import React from "react";
import {Routes, Route, BrowserRouter} from 'react-router-dom';

import '@assets/styles/App.css';
import Home from "@src/pages/home/Home";
import Topbar from "@components/nav/Topbar";
import Footer from "@components/footer/Footer";
import MessageBanner from "@components/message/MessageBanner";
import NotFound from "@src/pages/http/NotFound";
import routes from "@utils/routes";
import InternalError from "@src/pages/http/InternalError";
import useCollections from "@src/hooks/useCollections";

function App() {
    useCollections();

    return (
        <BrowserRouter>
            <Topbar/>
            <MessageBanner />
            <Routes>
                <Route exact path={routes.home} element={<Home />}/>
                <Route exact path={routes.http.internalError} element={<InternalError />}/>
                <Route path={routes.http.notFound} element={<NotFound />}/>
            </Routes>
            <Footer/>
        </BrowserRouter>

    );
}

export default App;
