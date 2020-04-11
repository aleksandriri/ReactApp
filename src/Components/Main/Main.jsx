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
            <Route path='/' render={() => <Header/>}/>
            <div className={style.main__body}>
                <Route path='/film' render={() => <Film state={props.state.FilmData}/>}/>
                <Route path='/serial' render={() => <Serial state={props.state.SerialData}/>}/>
                <Route path='/cartoon' render={() => <Cartoon/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/page' render={() => <Page/>}/>
            </div>
        </main>
    );
};

export default Main;
