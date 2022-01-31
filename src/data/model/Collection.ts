import OverallStat from "./OverallStat";
import TopOwnerStats from "./TopOwnerStats";
import LargestStats from "./LargestSale";

type Param =  {
    id: number,
    name: string,
    totalSupply: number,
    description: string,
    mediaLink: string,
    stats : Stats;
}

type Stats = {
    overallStat: OverallStat;
    topOwnerStats: TopOwnerStats;
    largestStats: LargestStats;
};

/**
 * Basic Nft Collection
 */
export default class Collection
{
    public id: number;
    public name: string;
    public totalSupply: number;
    public description: string;
    public mediaLink: string;
    public stats: Stats;

    constructor(param: Param, stats: Stats) {
        this.id = param.id;
        this.name = param.name;
        this.totalSupply = param.totalSupply;
        this.description = param.description;
        this.mediaLink = param.mediaLink;
        this.stats = stats;
    }
}
