type Param =  {
    nftId: number;
    price: number;
    date: Date;
    mediaLink: string;

}

/**
 * Basic Nft Collection
 */
export default class LargestSale
{
    public nftId: number;
    public price: number;
    public date: Date;
    public mediaLink: string;

    constructor(param: Param) {
        this.nftId = param.nftId;
        this.price = param.price;
        this.date = param.date;
        this.mediaLink = param.mediaLink;
    }
}
