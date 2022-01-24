export default class StatItemOwner
{
    id;
    user;
    itemsCount;
    lastPurchase = 0.02;

    constructor(object) {
        this.id = object.id;
        this.user = object.user;
        this.itemsCount = object.itemsCount;
        this.lastPurchase = object.lastPurchase;
    }
}
