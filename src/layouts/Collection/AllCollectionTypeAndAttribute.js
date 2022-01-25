import CardContainer from "../../components/card-container/CardContainer";
import NftCard from "../../components/nftCard/NftCard";

const AllCollectionTypeAndAttribute = () => {
    return <CardContainer>
        {new Array().fill(1111).map( (item,i) => <NftCard nft={item} key={i} />)}
    </CardContainer>
}

export default AllCollectionTypeAndAttribute;
