import React from "react";
import { Routes, Route } from 'react-router-dom';
import HomePage from "../pages/HomePage";
import Contact from "../pages/Contact";
import Scuba from "../pages/ScubaPage";



function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/scuba" element={<Scuba/>}/>
        </Routes>
    )
}
export default AppRoutes