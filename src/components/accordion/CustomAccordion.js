import './custom-accordion.css';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const CustomAccordion = ({items}) => {
    return  <Accordion className="my-6 w-11/12 lg:w-6/12 mx-auto">
        {items.map((item, i) => <AccordionItem key={i}>

            <AccordionItemHeading>
                <AccordionItemButton>{`0${i+1} - ${item.title}`}</AccordionItemButton>
            </AccordionItemHeading>

            <AccordionItemPanel>
                <p>{item.text}</p>
            </AccordionItemPanel>

        </AccordionItem>
        )}
    </Accordion>
}

export default CustomAccordion;
