import { BrowserRouter, Route, Routes as ReactDOMRoutes, useParams} from "react-router-dom";
import Home from "../pages/Home";
import Dummy from "../pages/Dummy";
import React from "react";
import Shop from "../pages/Shop";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Products from "../pages/Products";
import ForgotPass from "../pages/ForgotPass";


const MyRoutes = () => {

  
  return (
    <BrowserRouter>
      <ReactDOMRoutes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path ="/ForgotPass" element={<ForgotPass />} />
        <Route path="/MyShoppings" element={<Dummy />} />
        <Route path="/Shop/:product/:productId" element={<Products/>} />
        <Route path="*" element={<Home />} />
      </ReactDOMRoutes>
    </BrowserRouter>
  );
};

export default MyRoutes;
