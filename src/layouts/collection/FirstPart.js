import {useEffect, useState} from "react";
import FullContainer from "@components/container/Container";
import NftCard from "@components/nftCard/NftCard";
import LocalStorage from "@utils/localStorage";
import MessageBanner from "@components/message/MessageBanner";
import Button from "@components/button/Button";
import {useParams} from "react-router-dom";
import Loader from "@components/loader/Loader";

export default function FirstPart() {
    const {name} = useParams();
    const localStorage = new LocalStorage();
    const collections = localStorage.get(LocalStorage.keysAvailable.collections);
    const [error, setError] = useState('');

    const [items, setItems] = useState();
    const [up, setUp] = useState(false);
    const [isLoad, setIsLoad] = useState(true);

    useEffect(() => {
        let isRegistered = undefined;

        try{
            isRegistered = collections[name];
        }catch(Error)
        {}

        setIsLoad(false);

        if (isRegistered !== undefined)
        {
            setItems(collections[name]);
            return;
        }

        setError('Oops, an error was occured please refresh page')
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0);
        return () => {};
    }, [up])


    return <FullContainer>

        <h1 className="flex center px-2 mb-12 text-4xl">{items && `Only ${items.length} items on ${name.toUpperCase()}  Collection`}</h1>

        <div className="flex center">
            {isLoad && <Loader />}
        </div>
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
