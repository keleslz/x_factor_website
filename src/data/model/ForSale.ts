import Nft from "./Nft";

type Param = {
    nfts: Array<Nft>;
    lowestPrice: number;
    mediaLink: string;
}
export default class ForSale
{
    public nfts: Array<Nft>;
    public lowestPrice: number;
    public mediaLink: string;

    constructor(param: Param) {
        this.nfts = param.nfts;
        this.lowestPrice = param.lowestPrice;
        this.mediaLink = param.mediaLink;
    }
}
