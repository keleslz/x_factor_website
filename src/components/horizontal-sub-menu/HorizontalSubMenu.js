import Button from "@components/button/Button";
import {useState} from "react";

const HorizontalSubMenu = ({children, buttons}) => {

    const [tabActive, setTabActive] = useState(0);

    if(children.length !== buttons.length)throw new Error('Item count not equals');

    return <div className="my-4">

        <div className="flex flex-wrap space-x-1 space-y-1 mb-12">
            {buttons.map((b, i) => <Button key={i} children={b} type="normal" color={tabActive === i ? 'white' : 'black'} bg={tabActive === i ? 'gray' : 'black'} onClick={() => setTabActive(i)}/>)}
        </div>

        <div className="px-2">
            {children.map((c, index) => <div className={`${index == tabActive ? '' : 'hidden'}`}>{c}</div>)}
        </div>
    </div>
}

export default HorizontalSubMenu ;
