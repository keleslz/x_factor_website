import {useEffect, useState} from "react";

const Pills =() => {
    const startPositions = ['translate-x-12', 'translate-x-24', 'translate-x-36'];
    const endPositions = ['translate-x-0', 'translate-x-6', 'translate-x-12'];
    const zIndex = ['z-30', 'z-20', 'z-10']
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
            {positions.map((p, i) => <img key={i} className={`transform ${zIndex} transition duration-700 ease-out ${p} absolute bg-red-50 flex w-12 h-12 rounded-full border-gray-800 border-2`} />)}
        </div>
        {!isHidden && <div>
            <div>10+</div>
            <div>Join us on metaverse</div>
        </div>}
    </div>
}

export default Pills;
