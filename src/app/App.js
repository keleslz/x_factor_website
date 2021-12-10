import '@assets/styles/App.css';
import React, {useEffect, useState} from "react";
import {Routes, Route, BrowserRouter} from 'react-router-dom';

import Home from "@src/pages/home/Home";
import Collection from "@src/pages/collection/Collection";
import Topbar from "@components/nav/Topbar";
import Footer from "@components/footer/Footer";
import requestApi from "@data/api/requestApi";
import Nft from "@data/model/Nft";
import LocalStorage from "@utils/localStorage";
import MessageBanner from "@components/message/MessageBanner";
import NotFound from "@src/pages/http/NotFound";
import routes from "../utils/routes";

function App() {
    const localStorage = new LocalStorage();
    const [items, setItems] = useState(localStorage.get('nfts'));
    const [error, setError] = useState('');

    useEffect(async () => {

        if (!items) {
            const data = await requestApi('https://jsonplaceholder.typicode.com/todos', 'GET');

            if (!(data instanceof Error)) {

                const nfts = data.map((item) => {
                    return new Nft(item);
                })

                localStorage.add('nfts', nfts);
                return;
            }

//            setError(data.message)
            setError('Oops, an error occured')

            return setItems([]);
        }
    })

    return (
        <BrowserRouter>
            <Topbar/>
            <MessageBanner message={error}/>
                <Routes>
                    <Route exact path={routes.home} element={<Home/>}/>
                    <Route exact path={routes.collections} element={<Collection/>}/>
                    <Route path={routes.notFound} element={<NotFound/>}/>
                </Routes>
            <Footer/>
        </BrowserRouter>

    );
}

export default App;
