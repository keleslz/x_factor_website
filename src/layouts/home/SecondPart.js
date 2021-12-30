import FullContainer from "@components/container/Container";
import {useEffect, useState} from "react";
import LocalStorage from "@utils/localStorage";
import {convertObjectToArray} from "@utils/arrayUtils";
import {useNavigate} from "react-router-dom";

const texts = require('@data/json/text.json');

export default function SecondPart() {
    const localStorage = new LocalStorage();

    const title = texts.home.titles[1];

    const [p, setP] = useState(texts.home.paragraphs || []);
    const [pictures, setPictures] = useState([]);
    const [collections, setCollections] = useState(localStorage.get(LocalStorage.keysAvailable.collections))
    const nav = useNavigate();

    useEffect(() => {
        if(collections === null)
        {
            nav('/error/0001')
            return;
        }
    }, [])
    useEffect(() => {
        if(collections)
        {
            let collection = convertObjectToArray(collections) || null ;

            if(collection)
            {
                collection = collection[0].splice(0,3).map(item => item.imageLink);
                setPictures(collection);
                return;
            }
            return () => {}
        }
    }, [])

    const getElement =(index, isInverse) => {
        return isInverse ? (<div className="lg:w-10/12 md:w-full mx-auto flex flex-wrap justify-around mb-12">
            <div className="w-96 my-6">
                <img
                    src={pictures[index]}
                    className="mx-auto"
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


