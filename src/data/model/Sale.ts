type Param = {
    nftId: number;
    mediaLink: string;
    price: string;
};

export default class Sale
{
    public nftId: number;
    public mediaLink: string;
    public price: string;

    constructor(param: Param) {
        this.nftId = param.nftId;
        this.mediaLink = param.mediaLink;
        this.price = param.price;
    }
}
