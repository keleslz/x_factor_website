import {useEffect, useState} from "react";
import requestApi from "@data/api/requestApi";
import Nft from "@data/model/Nft";
import Alert from "@components/alert/Alert";
import errorsMessage from "@utils/errorsMessage";

const AllCollectionTypeAndAttribute = ({name}) => {
    const [items, setItems] = useState([]);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        (async () => {
            const data = await requestApi(`nfts?collection=${name}&limit=100000`);
            if (!(data instanceof Error))
            {
                const nfts = data.collection.map( item => new Nft(item))
                setItems(nfts);
                return;
            }

            setIsError(true);
        })();
    }, [])

    /**
     * @param {string} rarity
     */
    const getRarityColor = (rarity) => {
        if(rarity === Nft.XRAR)
        {
            return "bg-gray-900 text-gray-50";
        }

        if(rarity === Nft.GOLD)
        {
            return "bg-yellow-400";
        }
    }

    return <div className="flex flex-wrap w-full justify-around">
        {!isError && items.map( (nft,i) => <div key={i} className="m-2 shadow-lg p-2 pt-4 rounded-t-md">
            <img className="mx-auto" width={150} height={150}  src={nft.imageLink}/>
            <div className="pt-2 flex justify-around">
                <span className="bg-gray-200 rounded-lg px-1 py-1 text-sm font-semibold text-gray-700 mb-2">#{i}</span>
                <span className={`bg-gray-200 rounded-lg shadow-lg px-1 py-1 text-sm font-semibold mb-2 ${getRarityColor(nft.getRarity())}`}>{nft.getRarity()}</span>
            </div>
        </div>)}
        {isError && <Alert message={errorsMessage.retrieve} />}
    </div>
}

export default AllCollectionTypeAndAttribute;
