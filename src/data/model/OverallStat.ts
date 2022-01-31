type Param = {
    lowestPrice: number;
    numberOfSales: number;
    totalValuesOfAllSales: number;
    valueOfSalesOnLast24Hours: number;
    valueOfSalesOnLastWeek: number;
    valueOfSalesOnLast4Weeks: number;
}

/**
 * Global stat
 */
export default class OverallStat {

    public lowestPrice: number;
    public numberOfSales: number;
    public totalValuesOfAllSales: number;
    public valueOfSalesOnLast24Hours: number;
    public valueOfSalesOnLastWeek: number;
    public valueOfSalesOnLast4Weeks: number;

    constructor(param: Param) {
        this.lowestPrice = param.lowestPrice;
        this.numberOfSales = param.numberOfSales;
        this.totalValuesOfAllSales = param.totalValuesOfAllSales;
        this.valueOfSalesOnLast24Hours = param.valueOfSalesOnLast24Hours;
        this.valueOfSalesOnLastWeek = param.valueOfSalesOnLastWeek;
        this.valueOfSalesOnLast4Weeks = param.valueOfSalesOnLast4Weeks;
    }
}
