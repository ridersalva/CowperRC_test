import React from "react";
import { Routes, Route } from 'react-router-dom';
import HomePage from "../pages/HomePage";
import Contact from "../pages/Contact";
import Scuba from "../pages/ScubaPage";
import Mons from "../pages/MonsPage";
import Extreme from "../pages/ExtremePage";
import Hook from "../pages/HookPage";
import Filosofia from "../pages/FilosofiaPage";


function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/scuba" element={<Scuba/>}/>
            <Route path="/extreme" element={<Extreme/>} />
            <Route path="/hook" element={<Hook/>} />
            <Route path="/mons" element={<Mons/>} />
            <Route path="/filosofia" element={<Filosofia/>}/>
        </Routes>
    )
}
export default AppRoutes