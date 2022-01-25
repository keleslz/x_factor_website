/**
 * @return {JSX.Element}
 * @constructor
 */
const OverAllStats = () => {
    //retrieve {OverallStat} data

    return <div>
        <div className="mb-4">
            <h3>Current Lowest Price Available</h3>
            <p className="font-semibold">66.2 ETH ($158,014.10 USD)</p>
        </div>

        <div className="mb-4">
            <h3>Number of Sales</h3>
            <p className="font-semibold">652.06K ETH ($1.93B)</p>
        </div>

        <div className="mb-4">
            <h3>Total Value of All Sales (Lifetime)</h3>
            <p className="font-semibold">652.06K ETH ($1.93B)</p>
        </div>

        <div className="mb-4">
            <h3>Value of Sales (Week)</h3>
            <p className="font-semibold">6.69K ETH ($20.11M)</p>
        </div>

        <div className="mb-4">
            <h3>Value of Sales (Week)</h3>
            <p className="font-semibold">24.12K ETH ($83M)</p>
        </div>

    </div>
}

export default OverAllStats;
