type Param = {
    id: number;
    user: string;
    ownedsCount: number;
    lastPurchase: string;
}

/**
 * top items owner stats
 */
export default class TopOwnerStats
{
    public id;
    public user;
    public ownedsCount;

    constructor(param: Param) {
        this.id = param.id;
        this.user = param.user;
        this.ownedsCount = param.ownedsCount;
    }
}
