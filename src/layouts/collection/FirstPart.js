import {useEffect, useState} from "react";
import FullContainer from "@components/container/Container";
import NftCard from "@components/nftCard/NftCard";
import LocalStorage from "@utils/localStorage";
import MessageBanner from "../../components/message/MessageBanner";
import Button from "../../components/button/Button";
import {useParams} from "react-router-dom";

const FirstPart = () => {
    const localStorage = new LocalStorage();
    const nfts = localStorage.get('nfts');
    const [error, setError] = useState('');
    const [items, setItems] = useState(nfts);
    const [up, setUp] = useState(false);

        const {name} = useParams();

    useEffect(() => {
        if(!items)
        {
            setError('Oops, an error occured')
            setItems(nfts);
            return;
        }
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0);
        return () => {};
    }, [up])


    return <FullContainer>

        <h1 className="flex center px-2 mb-12 text-4xl">{items && `Only ${items[0].collectionLength} items on ${items[0]?.collection?.toUpperCase()}`} Collection</h1>

        {items?.map( (nft, i) => <NftCard key={i} nft={nft} index={i+1} />)}
        {error.length > 0 && <MessageBanner message={error} hasCloseButton={false}/>}
        <div
            className="fixed bottom-5 right-5 font-bold text-4xl text-gray-300
             rounded-full bg-gray-800 w-10 flex center  duration-700 hover:-translate-y-2 transform ease-in-out"
        >
            <Button
                children="&#x21a5;"
                color="white"
                bg="gray"
                onClick={() => setUp(!up)}
            />
        </div>
    </FullContainer>
}

export default FirstPart;
