import FullContainer from "@components/container/Container";
import {useEffect, useState} from "react";
import LocalStorage from "@utils/localStorage";
import Pills from "@components/pills/Pills";
import Rotator from "@components/rotator/Rotator";
import beeLogo from "@assets/images/bee.png";
import {convertObjectToArray, getTwoLastCollections} from "@utils/arrayUtils";
import NftCard from "@components/nftCard/NftCard";
import SpringCarousselAuto from "@components/spring-caroussel-auto/SpringCarousselAuto";
import routes from "../../utils/routes";

const texts = require('@data/json/text.json');
const imageSize = 300;

export default function FirstPart() {
    const intro = texts.home.intro;
    const localStorage = new LocalStorage();
    const [metas, setMetas] = useState(localStorage.get(LocalStorage.keysAvailable.collectionsMetas));
    const [collections, setCollections] = useState(localStorage.get(LocalStorage.keysAvailable.collections))


    useEffect(() => {
        const isItemsMissing = localStorage.get(LocalStorage.keysAvailable.collections) === null;

        if (isItemsMissing === true)
        {
            window.location.href = '/error/0001';
            return;
        }

    },[localStorage.get(LocalStorage.keysAvailable.collections)])

    useEffect(() => {
        let collectionsLength = undefined;
        if(collections)  collectionsLength = Object.keys(collections).length;

        if(Number.isInteger(collectionsLength) && collectionsLength === metas?.length)
        {
            let twoLastCollections = getTwoLastCollections(collectionsLength, collections, 0,9);
            twoLastCollections = convertObjectToArray(twoLastCollections)
            setCollections(twoLastCollections);
        }
    },[])

    /**
     * @param {number} index
     * @return {JSX.Element}
     */
    const displayCollection = (index) => {
        if(!collections) return;

        if(collections[index])
        {
            const from = '0px';
            const to = `${-(collections[index].length * imageSize) + (imageSize * 3.5)}px`;

            return  <SpringCarousselAuto from={index === 0 ? from : to}
               to={index === 0 ? to : from}
            >
                <div className="mb-12 w-max">
                    <div className="flex">
                        {collections[index].map((item, i) => <NftCard  key={i}  nft={item} index={i} />)}
                    </div>
                </div>
            </SpringCarousselAuto>
        }
    }
    return <FullContainer>
        <div className="flex justify-around flex-wrap space-x-4 mb-12">

            <div className="w-80 mb-12">
                <p className="mb-8">{intro}</p>

                <Pills />
            </div>

            <div  className="mb-12">
                <h1 className=" w-80 text-4xl font-semibold">
                    <span className=" mb-4 inline-block">Discover rare</span>
                    <span className=" mb-4 inline-block"> digital art</span>
                    <span className=" mb-4 inline-block">and collect <strong className="text-salmon">NFTs</strong></span>
                </h1>
            </div>

            <div className="w-max relative overflow-hidden">
                <Rotator>
                    <div  className="w-80 text-4xl flex center w-full h-full rounded-full">
                        <img width={imageSize} src={beeLogo}/>
                    </div>
                </Rotator>

                <p className="absolute inset-0 flex center top-0 font-bold text-9xl text-black">X</p>
            </div>
        </div>

        <div className="flex flex-col overflow-x-hidden">
            {displayCollection(0)}
            {displayCollection(1)}
        </div>

    </FullContainer>
}
