type Param = {
    nftId: number;
    mediaLink: string;
};

export default class Bid
{
    public nftId: number;
    public mediaLink: string;

    constructor(param: Param) {
        this.nftId = param.nftId;
        this.mediaLink = param.mediaLink;
    }
}
