import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {addBlock} from "./Redux/StateRedux";

export let rerenderEntireTree = (stateRedux) =>{
    ReactDOM.render(
        <BrowserRouter>
            <App state={stateRedux} addBlock={addBlock}/>
        </BrowserRouter>, document.getElementById('root')
    );
};

