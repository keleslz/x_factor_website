import '../assets/styles/App.css';
import React from "react";
import {Routes, Route, BrowserRouter} from 'react-router-dom';

import Home from "../pages/home/Home";
import Collection from "../pages/collection/Collection";
import Topbar from "@components/nav/Topbar";
import Footer from "@components/footer/Footer";

function App() {
    return (
      <BrowserRouter>
          <Topbar />
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/collection/:name" element={<Collection />} />
          </Routes>
          <Footer />
      </BrowserRouter>

  );
}

export default App;
