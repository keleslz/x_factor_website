type Param = {
    id: number;
    imageLink: string;
    price: number;
    likeCount: number;
    isSolded: boolean;
    collection: string;
    collectionLength: number;
    priceSolded: number;
    isGold: boolean;
    isXRar:boolean;
};

/**
 * Basic Nft Item
 */
export default class Nft
{
    public id: number;
    public imageLink: string ;
    public likeCount: number;
    public price: number = 0.02;
    public isSolded: boolean = false;
    public collection: string;
    public collectionLength: number;
    public priceSolded: number;
    public isGold: boolean = false;
    public isXRar: boolean = false;

    constructor(param : Param) {
        this.id = param.id;
        this.imageLink = param.imageLink;
        this.price = param.price;
        this.likeCount = param.likeCount;
        this.isSolded = param.isSolded;
        this.collection = param.collection;
        this.collectionLength = param.collectionLength;
        this.priceSolded = param.priceSolded;
        this.isGold = param.isGold;
        this.isXRar = param.isXRar;
    }
}
