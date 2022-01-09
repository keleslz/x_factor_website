import FullContainer from "@components/container/Container";
import {useState} from "react";

const texts = require('@data/json/text.json');

export default function SecondPart() {
    const title = texts.home.titles[1];
    const [p] = useState(texts.home.paragraphs || []);
    const [pictures] = useState([]);

    const getElement =(index, isInverse) => {
        return isInverse ? (<div className="lg:w-10/12 md:w-full mx-auto flex flex-wrap justify-around mb-12">
            <div className="w-96 my-6">
                <img
                    src={pictures[index]}
                    className="mx-auto"
                    alt=""
                />
            </div>
            <p className="m-4 inline-block max-w-sm my-auto">{p[index]}</p>
        </div>) : (
            <div className="lg:w-10/12 md:w-full mx-auto flex flex-wrap justify-around mb-6">
                <p className="m-4 inline-block max-w-sm my-auto">{p[index]}</p>
                <div className="w-96 my-6">
                    <img
                        src={pictures[index]}
                        className="mx-auto"
                        alt=""
                    />
                </div>
            </div>
        )
    }

    return <FullContainer>
        <h2 className="text-4xl text-center font-semibold mb-12">{title}</h2>

        {getElement(0)}
        {getElement(1, true)}

    </FullContainer>
}


