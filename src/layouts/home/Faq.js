import CustomAccordion from "@components/accordion/CustomAccordion";

const texts = require('@data/json/text.json');

const Faq = () => {
    const accordionItems = texts.home.accordion;

    return <div className="min-h-screen mx-0 bg-gradient-to-t from-black relative">

        <h2 className="text-4xl text-center font-semibold mb-12">FAQ</h2>

        <CustomAccordion items={accordionItems}/>

    </div>
}

export default Faq;
