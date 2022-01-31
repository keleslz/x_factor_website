import CardContainer from "../../components/card-container/CardContainer";
import NftCard from "../../components/nftCard/NftCard";

const Bids = () => {
    return <CardContainer>
        {new Array().fill(50).map( (item,i) => <NftCard nft={item} key={i} />)}
    </CardContainer>
}

export default Bids;
