export default class Nft
{
    id;
    imageLink = 'https://via.placeholder.com/150';
    likeCount = Math.floor(Math.random() * 100);
    price = 0.02;
    isSolded = false;
    collection = 'bee';
    collectionLength = 1_111;

    constructor(object) {
        this.id = object.id;
        this.imageLink = object.imageLink || this.imageLink;
        this.price = object.price || this.price;
        this.likeCount = object.likeCount || this.likeCount;
        this.isSolded = object.isSolded || this.isSolded;
        this.collection = object.collection || this.collection;
        this.collectionLength = object.collectionLength || this.collectionLength;
    }
}
