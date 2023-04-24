import {Route, Routes} from "react-router-dom";
import {MainPage} from "../components/pages/MainPage";
import {ProfilePage} from "../components/pages/ProfilePage";
import {GroupsPage} from "../components/pages/GroupsPage";
import {GroupPage} from "../components/pages/GroupPage";
import {QueuesPage} from "../components/pages/QueuesPage";
import {QueuePage} from "../components/pages/QueuePage";
import React from "react";

export const SiteRoutes = () => {
    return (
        <Routes>
            <Route path="/" Component={MainPage}/>
            <Route path="/profile" Component={ProfilePage}/>
            <Route path="/groups" Component={GroupsPage}/>
            <Route path="/group" Component={GroupPage}/>
            <Route path="/queues" Component={QueuesPage}/>
            <Route path="/queue" Component={QueuePage}/>
        </Routes>
    );
};