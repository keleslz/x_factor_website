export default class Nft
{
    id;
    imageLink ;
    likeCount;
    price = 0.02;
    isSolded = false;
    collection;
    collectionLength;
    priceSolded;

    constructor(object) {
        this.id = object.id;
        this.imageLink = object.imageLink;
        this.price = object.price;
        this.likeCount = object.likeCount;
        this.isSolded = object.isSolded;
        this.collection = object.collection;
        this.collectionLength = object.collectionLength;
        this.priceSolded = object.priceSolded;
    }
}
