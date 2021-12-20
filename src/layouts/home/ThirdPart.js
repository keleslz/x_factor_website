import FullContainer from "@components/container/Container";
import {useEffect, useState} from "react";
import Caroussel from "@components/caroussel/Caroussel";
import LocalStorage from "@utils/localStorage";

export default function ThirdPart() {
    const [slideItems, setSlideItems] = useState([]);
    const localStorage = new LocalStorage();

    useEffect(() => {

        const data = localStorage.get(LocalStorage.keysAvailable.collections)?.bee

        if(data !== null)
        {
            const items = [...data].slice(0, 15).map(c => c.imageLink);
            console.log(items)
            setSlideItems(items);
        }
    },[])

    return <div className="w-95-percent mx-auto bg-gray-50">
            <div className="px-4 mx-auto w-4/6">
                {slideItems.length > 0 && <Caroussel items={slideItems}/>}
            </div>
        </div>
}


