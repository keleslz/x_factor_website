import {useEffect, useState} from "react";
import Loader from "@components/loader/Loader";
import {Link} from "react-router-dom";

/**
 * @return {JSX.Element}
 * @constructor
 */
const StatsTopItemsOwner = () => {
    const items = Array.from(Array(1_111).keys())
    const [isLoad, setIsLoad] = useState(true);

    // Order by owned

    useEffect(() => {
        setTimeout(() => setIsLoad(false), 3000)
    }, [])

    return <div className="overflow-x-auto my-4">

        <table className="table-auto">

            {!isLoad && <>

                <thead>
                    <tr>
                        <th className="font-semibold  bg-white border px-4 py-2">#</th>
                        <th className="font-semibold  bg-white border px-4 py-2">Account</th>
                        <th className="font-semibold  bg-white border px-4 py-2">Owned</th>
                        <th className="font-semibold  bg-white border px-4 py-2">last active</th>
                    </tr>
                </thead>

                <tbody>
                    {items.map((item, i) => <tr key={i} className="hover:text-blue-900 transition ease-in-out pointer">
                        <td className="text-center font-semibold  bg-white border px-4 py-2">#{i + 1}</td>
                        <td className="text-center font-semibold  bg-white border px-4 py-2"><Link to="/bee/0x0abc">0x0abc full</Link></td>
                        <td className="text-center font-semibold  bg-white border px-4 py-2">{i * 3}</td>
                        <td className="text-center font-semibold  bg-white border px-4 py-2">{i} months</td>
                    </tr>)}
                </tbody>

            </>}

        </table>

        {isLoad && <div className="flex center w-full">
            <Loader />
        </div>}

    </div>
}

export default StatsTopItemsOwner;
// <div>
//     {[].map((statItemOwner) => <div>
//         {statItemOwner.id}
//         {/*X detient X items*/}
//         {/*Y detiens X items...*/}
//
//     </div>)}
// </div>
