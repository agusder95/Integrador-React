import { BrowserRouter, Route, Routes as ReactDOMRoutes} from "react-router-dom";
import Home from "../pages/Home";
import Dummy from "../pages/Dummy";

import React from "react";
import Shop from "../pages/Shop";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <ReactDOMRoutes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Dummy" element={<Dummy />} />
        <Route path="*" element={<Home />} />
      </ReactDOMRoutes>
    </BrowserRouter>
  );
};

export default MyRoutes;
