import {Route, Routes} from "react-router-dom";
import {MainPage} from "../components/pages/MainPage";
import {ProfilePage} from "../components/pages/ProfilePage";
import {GroupsPage} from "../components/pages/GroupsPage";
import {GroupPage} from "../components/pages/GroupPage";
import {QueuesPage} from "../components/pages/QueuesPage";
import {QueuePage} from "../components/pages/QueuePage";
import React from "react";
import {AuthPage} from "../components/pages/AuthPage";

export const SiteRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/auth" element={<AuthPage/>}/>
            <Route path="/profile" element={<ProfilePage/>}/>
            <Route path="/groups" element={<GroupsPage/>}/>
            <Route path="/group" element={<GroupPage/>}/>
            <Route path="/queues" element={<QueuesPage/>}/>
            <Route path="/queue" element={<QueuePage/>}/>
        </Routes>
    );
};