import React from "react";
import {Routes, Route, BrowserRouter} from 'react-router-dom';

import '@assets/styles/App.css';
import Home from "@src/pages/home/Home";
import Topbar from "@components/nav/Topbar";
import Footer from "@components/footer/Footer";
import NotFound from "@src/pages/http/NotFound";
import routes from "@utils/routes";
import InternalError from "@src/pages/http/InternalError";
import useCollections from "@src/hooks/useCollections";
import Collection from "@src/pages/collection/Collection";
import GlobalComponent from "@layouts/App/GlobalComponent";
import BaseContainer from "@components/base-container/BaseContainer";

function App() {
    useCollections();

    return (
        <BrowserRouter>

            <BaseContainer>

                <Topbar/>
                <GlobalComponent />

                <Routes>
                    <Route exact path={routes.home} element={<Home />}/>
                    <Route exact path={routes.collections} element={<Collection />} />
                    <Route exact path={routes.http.internalError} element={<InternalError />}/>
                    <Route path={routes.http.notFound} element={<NotFound />}/>
                </Routes>

            <Footer/>

            </BaseContainer>

        </BrowserRouter>

    );
}

export default App;
