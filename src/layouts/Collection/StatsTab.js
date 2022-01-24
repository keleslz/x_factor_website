/**
 *
 * @param  {OverallStat} stats
 * @return {JSX.Element}
 * @constructor
 */
const StatsTab = ({stat}) => {

    //retrieve data

    return <div>
        <h2>Stats</h2>

        <div>
            <h3>Current Lowest Price Available</h3>
            <p>66.2 ETH ($158,014.10 USD)</p>
        </div>

        <div>
            <h3>Number of Sales</h3>
            <p>652.06KΞ ($1.93B)</p>
        </div>

        <div>
            <h3>Total Value of All Sales (Lifetime)</h3>
            <p>652.06KΞ ($1.93B)</p>
        </div>

        <div>
            <h3>Value of Sales (Week)</h3>
            <p>6.69KΞ ($20.11M)</p>
        </div>

        <div>
            <h3>Value of Sales (Week)</h3>
            <p>24.12KΞ ($83M)</p>
        </div>

    </div>
}

export default StatsTab;
