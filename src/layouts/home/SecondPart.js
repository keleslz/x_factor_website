import {useState} from "react";
import FullContainer from "../../components/container/Container";

const texts = require('@data/json/text.json');

export default function SecondPart() {
    const paragraphs = texts.home.texts[1].paragraphs;
    const lastParagraphs = texts.home.texts[2];
    const title = texts.home.titles[1];

    return <FullContainer>
        <h2 className="text-4xl text-center font-semibold mb-12">{title}</h2>

        <div className="flex flex-wrap my-14">
            {paragraphs.map((p) => <p key={p.id} className="w-80 my-6 mx-auto px-4">{p.content}</p>)}
        </div>

        <div>
            <img className="lg:w-4/12 mx-auto mb-12"
                 src="https://tailwindcss.com/img/card-top.jpg"
                 alt="Sunset in the mountains"
            />
            <p className="w-11/12 mx-auto">{lastParagraphs.content}</p>
        </div>
    </FullContainer>
}


