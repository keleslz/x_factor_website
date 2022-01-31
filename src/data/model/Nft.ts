type Param = {
    id: number; // ok
    imageLink: string; // ok
    price:number; // ok
    isSolded: boolean;
    collection: string; // ok
    isGold: boolean;// ok
    isXRar:boolean; // ok
    serialNumber:string; // ok
};

/**
 * Basic Nft Item
 */
export default class Nft
{
    public id: number;
    public imageLink: string ;
    public price: number;
    public isSolded: boolean = false;
    public collection: string;
    public isGold: boolean = false;
    public isXRar: boolean = false;
    public serialNumber: string;

    public static XRAR = "Xrar";
    public static GOLD = "Gold";
    public static COMMON = "Common";

    constructor(param : Param) {
        this.id = param.id;
        this.imageLink = param.imageLink;
        this.price = param.price;
        this.isSolded = param.isSolded;
        this.collection = param.collection;
        this.isGold = param.isGold;
        this.isXRar = param.isXRar;
        this.serialNumber = param.serialNumber;
    }

    getRarity(): string{
        if(this.isXRar) return Nft.XRAR;
        if(this.isGold) return Nft.GOLD;
        return Nft.COMMON;
    }
}
