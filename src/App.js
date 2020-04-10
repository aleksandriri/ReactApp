import React from 'react';
import './App.css';
import Header from './Components/Navigation/Navigation';
import Main from './Components/Main/Main';
import {BrowserRouter} from 'react-router-dom'

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app">
                <div className="app__inner">
                    <Header/>
                    <Main FilmData={props.FilmData}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
