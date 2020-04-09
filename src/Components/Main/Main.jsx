import React from 'react';
import style from './Main.module.css'
import Film from "./Film/Film";
import Serial from "./Serial/Serial";
import Cartoon from "./Cartoon/Cartoon";
import Settings from "./Settings/Settings";
import Page from "./Page/Page";
import Header from "./Heeader/Header";
import {Route} from 'react-router-dom'

const Main = (props) => {
    return (
        <main className={style.main}>
            <Route path='/' component={Header}/>
            <div className={style.main__body}>
                <Route path='/film' component={Film}/>
                <Route path='/serial' component={Serial}/>
                <Route path='/cartoon' component={Cartoon}/>
                <Route path='/settings' component={Settings}/>
                <Route path='/page' component={Page}/>
            </div>
        </main>
    );
};

export default Main;
