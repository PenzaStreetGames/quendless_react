import {Route, Routes} from "react-router-dom";
import {MainPage} from "../components/pages/MainPage";
import {AuthPage} from "../components/pages/AuthPage";
import React from "react";
import {UserAgreementPage} from "../components/pages/UserAgreementPage";
import {LogoutPage} from "../components/pages/LogoutPage";

export function GuestRoutes() {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}></Route>
            <Route path="/auth" element={<AuthPage/>}></Route>
            <Route path="/logout" element={<LogoutPage/>}/>
            <Route path="/user_agreement" element={<UserAgreementPage/>}></Route>
        </Routes>
    );
}