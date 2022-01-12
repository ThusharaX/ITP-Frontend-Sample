import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Notes } from "../pages";

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const AppRoutes = () => {
    return (
        <>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/notes" element={<Notes />} />

                    <Route path="*" element={<div>404 Not Found</div>} />
                </Routes>
                <Footer />
            </Router>
        </>
    )
}

export default AppRoutes
