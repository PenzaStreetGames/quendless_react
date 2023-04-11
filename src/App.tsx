import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import MainPage from "./main_page";
import {styles} from "./styles"


function App() {
  return (
      <div style={styles.MainPageBackground}>
        <div className="container min-vh-100 d-flex flex-column justify-content-center align-content-center">
          <MainPage>
          </MainPage>
        </div>
      </div>
  );
}

export default App;
