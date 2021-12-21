import React, { useEffect, useState} from "react";
import {Routes, Route, BrowserRouter} from 'react-router-dom';

import '@assets/styles/App.css';
import Home from "@src/pages/home/Home";
import Collection from "@src/pages/collection/Collection";
import Topbar from "@components/nav/Topbar";
import Footer from "@components/footer/Footer";
import requestApi from "@data/api/requestApi";
import Nft from "@data/model/Nft";
import MessageBanner from "@components/message/MessageBanner";
import NotFound from "@src/pages/http/NotFound";
import routes from "@utils/routes";
import LocalStorage from "@utils/localStorage";

function App() {
    const localStorage = new LocalStorage();
    const items = localStorage.get(localStorage?.keysAvailable?.collections);
    const [error, setError] = useState('');

    useEffect(async () => {

        if (!items) {
            const collections = await requestApi('collections');

            if(!(collections instanceof Error))
            {
                localStorage.add(LocalStorage.keysAvailable.collectionsMetas, collections.collections);
                collections.collections.map( c => {
                    setCollection(c.name, c.length)
                });
                return;
            }
            setError('Oops, an error occured')
        }
    }, [])

    /**
     * Set collection if not already registered
     * @param {string} collection
     * @param {number} limit
     * @return {null}
     */
    const setCollection = async (collection, limit) => {
        const data = await requestApi(`nfts?collection=${collection}&limit=${limit}`, 'GET');

        if (!(data instanceof Error)) {

            /**
             * @var Nfts[]
             */
            const nfts = data.collection.map((item) => new Nft(item));

            let collections = localStorage.get(LocalStorage.keysAvailable.collections);

            let isRegistered = false;

            if(collections !== null)
            {
                if(collections[collection]){
                    isRegistered = true;
                }
            }

            if(isRegistered) return;

            if(collections)
            {
                let substractCurrentCollection = {...collections};
                substractCurrentCollection[collection] = nfts;
                localStorage.add(LocalStorage.keysAvailable.collections, substractCurrentCollection)
                return;
            }

            collections = {}
            collections[collection] = nfts;
            localStorage.add(LocalStorage.keysAvailable.collections, collections);
        }
        setError('Oops, an error occured')

        return ;
    }

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
