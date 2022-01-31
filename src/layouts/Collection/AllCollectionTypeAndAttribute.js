import {useEffect, useState} from "react";
import requestApi from "@data/api/requestApi";
import Nft from "@data/model/Nft";
import Alert from "@components/alert/Alert";
import errorsMessage from "@utils/errorsMessage";
import Button from "@components/button/Button";

const itemsRarities = [Nft.COMMON, Nft.GOLD, Nft.XRAR];

const AllCollectionTypeAndAttribute = ({name}) => {
    const [isError, setIsError] = useState(false);
    const [filterActive, setFilterActive] = useState(0);
    const [rarityFilterActive, setRarityFilterActive] = useState(0);
    const [items, setItems] = useState([]);
    const [itemsToFiltereds, setItemsToFiltereds] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await requestApi(`nfts?collection=${name}&limit=100000`);
            if (!(data instanceof Error)) {
                const nfts = data.collection.data.map(item => new Nft(item));
                nfts.sort((a, b) => a.getRarity() < b.getRarity() ? 0 : -1);
                setItems(nfts);
                setItemsToFiltereds(nfts);
                return;
            }

            setIsError(true);
        })();
    }, [])

    /**
     * @param {string} rarity
     */
    const getRarityColor = (rarity) => {
        if (rarity === Nft.XRAR) {
            return "bg-gray-900 text-gray-50";
        }

        if (rarity === Nft.GOLD) {
            return "bg-yellow-400";
        }
    }

    const itemsFilters = [
        {
            name: 'All',
            func: () => {
                const idTab = 0;
                if(filterActive === idTab ) return;
                setFilterActive(idTab);
                setItemsToFiltereds(items);
                setRarityFilterActive(1);
            }
        },
        {
            name: 'Sold',
            func: () => {
                const idTab = 1;
                if(filterActive === idTab ) return;
                setFilterActive(idTab);
                let solds = items.filter((nft) => nft.isSolded);
                setItemsToFiltereds(solds);
                setRarityFilterActive(1);

            }
        },
        {
            name: 'Unsold',
            func: () => {
                const idTab = 2;
                if(filterActive === idTab ) return;
                setFilterActive(idTab);
                let unsolds = items.filter((nft) => !nft.isSolded)
                setItemsToFiltereds(unsolds);
                setRarityFilterActive(1);
            }
        },
        {
            name: 'Rarity',
            func: () => {
                const idTab = 3;
                if(filterActive === idTab) return;
                setFilterActive(idTab);
                handleRarityFilter(0);
            }
        }
    ];

    const handleRarityFilter = (i) => {
        setRarityFilterActive(i);
        let itemsByRarities = items.filter((nft) => nft.getRarity() === itemsRarities[i]);
        setItemsToFiltereds(itemsByRarities);
    }

    return <>

        <div className="flex flex-wrap space-x-1 space-y-1 mb-4">
            {itemsFilters.map((filter, i) => <Button key={i}
                 children={`${filter.name} ${filterActive === i ? `(${itemsToFiltereds.length})` : ''}`}
                 type="normal"
                 color={filterActive === i ? 'white' : 'black'}
                 bg={filterActive === i ? 'gray' : ''}
                 onClick={filter.func}
            />)}
        </div>

        {filterActive === 3 && <div className="flex flex-wrap space-x-1 space-y-1">
            {itemsRarities.map((rarity, i) => <Button key={i}
                  children={rarity}
                  type="normal"
                  color={rarityFilterActive === i ? 'white' : 'black'}
                  bg={rarityFilterActive === i ? 'gray' : ''}
                  onClick={() => handleRarityFilter(i)}
            />)}
        </div>}

        <div className="flex flex-wrap w-full justify-around ">

            {!isError && itemsToFiltereds.map((nft, i) => <div key={i} className="m-2 shadow-lg p-2 pt-4 rounded-t-md">
                <img className="mx-auto" width={150} height={150} src={nft.imageLink}/>
                <div className="pt-2 flex justify-around flex-col">
                <span
                    className="pl-2 mr-0.5 bg-gray-200 rounded-lg px-1 py-1 text-sm font-semibold text-gray-700 mb-2">#{nft.serialNumber}</span>
                    <span
                        className={`pl-2 ml-0.5 bg-gray-200 rounded-lg shadow-lg px-1 py-1 text-sm font-semibold mb-2 ${getRarityColor(nft.getRarity())}`}>{nft.getRarity()}</span>
                </div>
            </div>)}
            {isError && <Alert message={errorsMessage.retrieve}/>}
        </div>
    </>
}

export default AllCollectionTypeAndAttribute;
