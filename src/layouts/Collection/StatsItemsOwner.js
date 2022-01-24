import {useEffect, useState} from "react";
import Loader from "@components/loader/Loader";

/**
 *
 * @param {StatItemOwner[]} stats
 * @return {JSX.Element}
 * @constructor
 */
const StatsItemsOwner = () => {
    const items = Array.from(Array(1_111).keys())
    const [isLoad, setIsLoad] = useState(true);

    return <div className="overflow-x-auto my-4">

        <table className="table-auto">

            {!isLoad && <>

                <thead>
                    <tr>
                        <th className="font-semibold  bg-white text-blue-900 border px-4 py-2">#</th>
                        <th className="font-semibold  bg-white text-blue-900 border px-4 py-2">Account</th>
                        <th className="font-semibold  bg-white text-blue-900 border px-4 py-2">Owned</th>
                        <th className="font-semibold  bg-white text-blue-900 border px-4 py-2">last active</th>
                    </tr>
                </thead>

                <tbody>
                    {items.map((item, i) => <tr key={i}>
                        <td className="text-center font-semibold  bg-white text-blue-900 border px-4 py-2">#{i + 1}</td>
                        <td className="text-center font-semibold  bg-white text-blue-900 border px-4 py-2">Killer</td>
                        <td className="text-center font-semibold  bg-white text-blue-900 border px-4 py-2">{i * 3}</td>
                        <td className="text-center font-semibold  bg-white text-blue-900 border px-4 py-2">{i} months</td>
                    </tr>)}
                </tbody>

            </>}

        </table>

        {isLoad && <div className="flex center w-full">
            <Loader />
        </div>}

    </div>
}

export default StatsItemsOwner;
// <div>
//     {[].map((statItemOwner) => <div>
//         {statItemOwner.id}
//         {/*X detient X items*/}
//         {/*Y detiens X items...*/}
//
//     </div>)}
// </div>
