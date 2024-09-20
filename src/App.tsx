import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import LoginPage from "./appmain/LoginPage";

function App() {
    return (
        <div className="min-h-screen bg-gray-100">
            <BrowserRouter>
                <Routes>
                    <Route path="login" element={<LoginPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;