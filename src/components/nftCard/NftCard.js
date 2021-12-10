import like from "@assets/icons/like.png";
import ethereum from "@assets/icons/ethereum.png";

/**
 * @param {Nft} nft
 * @param {string} index
 * @return {JSX.Element}
 */
const NftCard = ({nft, index}) => {
    return <div className="rounded-md relative rounded-md w-80 border-2 my-2 font-sans cursor-pointer">
        <h3 className="rounded-tl-lg rounded-tr-lg h-12 py-2 bg-black shadow-lg text-white text-center font-bold opacity-75">#{index}</h3>
        <img className="w-80 h-80" src={nft.imageLink} alt=""/>
        <div className="h-12 pt-2 flex">
            <ul className="flex w-full justify-around items-center">
                <li className="flex items-center ">
                    <span className="px-2">
                        <img style={{opacity: "0.6"}} width={20} src={ethereum}/>
                    </span>
                    <span>{nft.price} ETH</span>
                </li>
                <li className="flex items-center">
                    <span className="px-2 cursor-pointer">
                        <img style={{opacity: "0.6"}} width={20} src={like}/>
                    </span>
                    <span>{nft.likeCount}</span>
                </li>
            </ul>
        </div>

        {nft.isSolded && <div className="absolute center inset-0">
            <div
                className="rounded-md w-full flex center h-full bg-gray-900 opacity-75 hover:bg-gray-300 hover:opacity-0 hover:flex hover:hidden ease-in-out duration-500">
                <h1 className="text-red-900 text-4xl font-bold tracking-widest">Sold</h1>
            </div>
        </div>}

    </div>
}

export default NftCard;
