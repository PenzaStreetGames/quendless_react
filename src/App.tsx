import React from "react";
import { BrowserRouter as Router} from 'react-router-dom';
import {PageTemplate} from "./components/layout/PageTemplate";
import {PageHeader} from "./components/layout/PageHeader";
import {PageFooter} from "./components/layout/PageFooter";
import './App.css';
import {AuthUserRoutes} from "./routes/AuthUserRoutes";
import {GuestRoutes} from "./routes/GuestRoutes";
import {useSelector} from "react-redux";

export function App() {
    const isAuth = useSelector((state: any) => state.auth.isAuth)
    return (
            <PageTemplate>
                <Router>
                    <PageHeader isAuth={isAuth}/>
                    {isAuth ? <AuthUserRoutes/> : <GuestRoutes/>}
                    <PageFooter/>
                </Router>
            </PageTemplate>
    );
}
