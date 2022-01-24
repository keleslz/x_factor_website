import Button from "@components/button/Button";
import {useState} from "react";

const HorizontalSubMenu = ({children, buttons}) => {

    const [tabActive, setTabActive] = useState(0);

    if(children.length !== buttons.length)throw new Error('Item count not equals');

    return <div className="my-4">

        <div className="flex flex-wrap space-x-1 space-y-1">
            {buttons.map((b, i) => <Button key={i} children={b} type="normal" color="white" bg={tabActive === i ? 'transparent' : 'gray'} onClick={() => setTabActive(i)}/>)}
        </div>

        {children.map((c, index) => {
            if(index == tabActive) {
                return c
            }
        })}

    </div>
}

export default HorizontalSubMenu ;
