import {useParams} from "react-router-dom";
import {useState} from "react";
import FirstPart from "../../layouts/collection/FirstPart";

const Collection = () => {
    const { name } = useParams();
    const [items, setItems] = useState();

    return <div>
        <FirstPart />
    </div>
}


export default Collection
