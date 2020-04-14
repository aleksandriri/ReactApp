import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./Redux/StateRedux";
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (stateRedux) =>{
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} addBlock={store.addBlock.bind(store)} updateSearch={store.updateNewSearchText.bind(store)}/>
        </BrowserRouter>, document.getElementById('root')
    );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
