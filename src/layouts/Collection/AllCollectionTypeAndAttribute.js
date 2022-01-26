import CardContainer from "../../components/card-container/CardContainer";
import NftCard from "../../components/nftCard/NftCard";
import {useEffect, useState} from "react";
import requestApi from "../../data/api/requestApi";
import Nft from "../../data/model/Nft";

const AllCollectionTypeAndAttribute = ({name}) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const data = await requestApi(`nfts?collection=${name}&limit=100000`);
            if (!(data instanceof Error))
            {
                console.log(data.collection)
                const nfts = data.collection.map( item => new Nft(item))
                setItems(nfts);
                return;
            }
            //Error
        };
        getData();
    }, [])
    return <div className="flex flex-wrap w-full justify-around">
        {items.map( (nft,i) => <div key={i} className="m-2">
            <img  width={150} height={150}  src={nft.imageLink}/>
            <div>
                <h3 className="text-md">#{i}</h3>
                <p className="">{nft.getRarity()}</p>
            </div>
        </div>)}
    </div>
}

export default AllCollectionTypeAndAttribute;
