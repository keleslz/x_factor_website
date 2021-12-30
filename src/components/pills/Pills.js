import {useEffect, useState} from "react";
import e1 from "@assets/images/team/e1.png"; // Team member
import e2 from "@assets/images/team/e2.png"; // Team member
import e3 from "@assets/images/team/e3.png"; // Team member
import e4 from "@assets/images/team/e4.png"; // Team member

const Pills =() => {
    const pictureSources = [e1, e2, e3, e4];
    const startPositions = ['translate-x-12', 'translate-x-24', 'translate-x-36', 'translate-x-52'];
    const endPositions = ['translate-x-0', 'translate-x-6', 'translate-x-12', 'translate-x-20'];
    const zIndex = ['z-30', 'z-20', 'z-10'];

    const [positions, setPositions] = useState(startPositions);
    const [isHidden, setIsHidden] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setPositions(endPositions);
            setIsHidden(!isHidden);
        }, 200)
    }, [])

    return <div className="flex">
        <div className="transition flex flex w-40 h-14 relative">
            {positions.map((p, i) => <img key={i} src={pictureSources[i]} className={`transform ${zIndex} transition duration-700 ease-out ${p} absolute bg-red-50 flex w-12 h-12 rounded-full border-gray-800 border-2`} />)}
        </div>
        {!isHidden && <div className="ml-6">
            <div>Join us on the x-metaverse</div>
        </div>}
    </div>
}

export default Pills;
