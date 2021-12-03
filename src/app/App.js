import '../styles/App.css';
import React from "react";
import {Routes, Route, BrowserRouter} from 'react-router-dom';

import Home from "../pages/home/Home";
function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<Home />} />
          </Routes>

      </BrowserRouter>

  );
}

export default App;
