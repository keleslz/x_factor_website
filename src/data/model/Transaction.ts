type Param = {
    idItem: number;
    transactionType: 'Bid'|'Sell'|'Buy'|'OfferToBid';
    address: string;
}

export default class LastTransaction
{
    public idItem: number;
    public transactionType: string;
    public address: string;

    constructor(param: Param) {
        this.idItem = param.idItem;
        this.transactionType = param.transactionType;
        this.address = param.address;
    }
}
