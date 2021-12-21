import Card from "@components/card/Card";
import Button from "@components/button/Button";
import {Link} from "react-router-dom";
import FullContainer from "@components/container/Container";
import {useState} from "react";
import LocalStorage from "@utils/localStorage";

const texts = require('@data/json/text.json');

export default function FirstPart() {
    const title = texts.home.titles[0];
    const cards = texts.home.texts[0].cards;
    const localStorage = new LocalStorage();
    const [collections, setCollections] = useState(localStorage.get(LocalStorage.keysAvailable.collectionsMetas));
    const [isHidden, setIsHidden] = useState(true);


    const displayButtons = () => {
        isHidden && setIsHidden(false)
    }

    return <FullContainer>

        <div className="mb-24">
            <h1 className="h-1/4 flex center ease-in-out duration-700 text-center px-4 font-sans text-2xl transition transform hover:-translate-y-2 cursor-pointer font-bold h-1/2 ">
                {title}
            </h1>
        </div>

        <div className="mb-24 center flex flex-col">
            <div className="mb-12">
                <Button
                    children="Show"
                    type="big"
                    color="white"
                    bg="blue"
                    onMouseOver={displayButtons}
                />
            </div>
            <div>
                {collections?.map((b, i) => <Link key={i} className={isHidden ? "hidden" : ""} to={`/collections/${b.name}`}>
                    <Button
                        children={b.name}
                        type="normal"
                        color="blue"
                        bg="white"
                    />
                </Link>)}
                {!collections && <small>Une erreur est survenue</small>}
            </div>
        </div>

        <div className="flex center flex-wrap">
            {cards?.map((e, i) => <Card
                key={i}
                title={e.title}
                description={e.content}
            />)}
        </div>
    </FullContainer>
}
