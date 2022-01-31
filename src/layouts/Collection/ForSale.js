import CardContainer from "../../components/card-container/CardContainer";
import NftCard from "../../components/nftCard/NftCard";

const ForSale = () => {
    return <CardContainer>
        {new Array().fill(10).map( (item,i) => <NftCard nft={item} key={i} />)}
    </CardContainer>
}

export default ForSale;
