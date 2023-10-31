import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "../pages/Home";
import Dummy from "../pages/Dummy";

import React from "react";

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Dummy" element={<Dummy />} />
      </Routes>
    </Router>
  );
};

export default MyRoutes;
