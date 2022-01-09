import {useState} from "react";

/**
 * @param {Nft} nft
 * @param {string} index
 * @return {JSX.Element}
 */
const NftCard = ({nft, index}) => {
    const [isEnabled, setIsEnabled] = useState(false);

    const getGrowthClassname = () => {
        return isEnabled ? 'enabled' : 'disabled';
    }

    const getRarityColor = () => {
        if(nft.isXRar)return 'bg-gray-200'
        if(nft.isGold)return 'bg-yellow-200'
        return 'bg-gray-200'
    }

    return <div className="rounded-md relative m-4 font-sans cursor-pointer "
            onMouseOver={() => setIsEnabled(true)}
            onMouseLeave={() => setIsEnabled(false)}
        >
            <div className="relative">

                {nft.isSolded && <div className="z-20 hover:bg-transparent transition duration-500 bg-black opacity-60 absolute inset-0 center flex text-2xl font-semibold">Sold</div>}

                <div className="w-80 h-56 overflow-hidden m-0 center flex">
                    <img className="" src={nft.imageLink} alt="" />
                </div>


                <div className={`${isEnabled ? 'text-gray-800' : 'text-transparent'} font-semibold text-lg transition z-0 absolute inset-0 -bottom-9 flex items-end justify-around font-semibold`}>
                    <p>{nft.collection}</p>
                    {nft.isSolded && <p>Sold</p>}
                    <p>{nft.price}</p>
                </div>

                <div className={`absolute w-6 h-6 top-2 right-5 rounded-full ${getRarityColor()}`}></div>
            </div>

        <div className={`card-growth-${getGrowthClassname()} growth`}></div>

        </div>
}

export default NftCard;
