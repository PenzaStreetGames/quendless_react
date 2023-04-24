import React from "react";
import { BrowserRouter as Router} from 'react-router-dom';
import {PageTemplate} from "./components/layout/PageTemplate";
import {PageHeader, headerNavLinks} from "./components/layout/PageHeader";
import {PageFooter} from "./components/layout/PageFooter";
import {SiteRoutes} from "./routes/SiteRoutes";
import './App.css';

export function App() {
  return (
      <PageTemplate>
          <Router>
              <PageHeader items={headerNavLinks}/>
              <SiteRoutes/>
              <PageFooter/>
          </Router>
      </PageTemplate>
  );
}
