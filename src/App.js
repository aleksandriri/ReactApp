import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import {BrowserRouter} from 'react-router-dom'

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app">
                <div className="app__inner">
                    <Header/>
                    <Main/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
