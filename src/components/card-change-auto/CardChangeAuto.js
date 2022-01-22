import {useEffect, useState} from "react";
import Loader from "../loader/Loader";

/**
 * @param {[ Nft[] ]} collection
 * @param {boolean} isFullSWidth* @return {JSX.Element}
 * @constructor
 */
const CardChangeAuto = ({collection, isFullWidth}) => {
    const [item, setItem] = useState();

    useEffect(() => {
        const name = Object.keys(collection);

        if (name.length > 0) {
            let i = 0;

            /**
             * @type {Nft[]}
             */
            const c = collection[name];

            const interval = setInterval(() => {
                setItem(c[i]);
                if (i === c.length - 1) i = 0;
                if (i < c.length) i++;

            }, 1500);

            return () => clearInterval(interval);
        }

    }, [])

    const getStyles = () => {
        return {
            backgroundImage: `url("${item?.imageLink}")`,
            backgroundSize: "100%",
            backgroundPosition: "center"
        }
    }

    return isFullWidth ? (
        <div className="flex w-full center h-72 mt-4 mb-12 flex">
            {item && <div className="w-full  h-56 bg-no-repeat" style={getStyles()}></div>}
            {!item && <div className="w-full center h-full flex center"><Loader/></div>}
        </div>
    ) : (
        <div>
            <div className="flex w-80 center h-72 mt-4 mb-12 flex">
                {item && <img className="w-80" src={item?.imageLink}/>}
                {!item && <div className="w-80 center h-full flex center"><Loader/></div>}
            </div>
        </div>
    )
}

export default CardChangeAuto;
