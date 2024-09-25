import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import LoginPage from "./appmain/LoginPage";
import LoginPage2 from "./appmain/LoginPage2";
import SignupPage from "./appmain/SignupPage";

function App() {
    return (
        <div className="min-h-screen bg-gray-100">
            <BrowserRouter>
                <Routes>
                    <Route path="login" element={<LoginPage />} />
                    <Route path="login2" element={<LoginPage2 />} />
                    <Route path="signup" element={<SignupPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;