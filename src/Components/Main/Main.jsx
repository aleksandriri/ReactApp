import React from 'react';
import style from './Main.module.css';
import Home from "./Home/Home";
import Film from "./Film/Film";
import Serial from "./Serial/Serial";
import Cartoon from "./Cartoon/Cartoon";
import Settings from "./Settings/Settings";
import Page from "./Page/Page";
import Header from "./Heeader/Header";
import {Route} from 'react-router-dom';
import classNames from 'classnames';

const Main = (props) => {
    return (
        <main className={style.main}>
            <Route path='/' render={() => <Header stateSearch={props.state.newSearchText} dispatch={props.dispatch}/>}/>
            <div className={style.main__body}>
                <Route path='/home' render={() => <Home />}/>
                <Route path='/film' render={() => <Film stateFilm={props.state.filmPage}/>}/>
                <Route path='/serial' render={() => <Serial stateSerial={props.state.serialPage}/>}/>
                <Route path='/cartoon' render={() => <Cartoon />}/>
                <Route path='/settings' render={() => <Settings />}/>
                <Route path='/page' render={() => <Page statePage={props.state.singlePage} dispatch={props.dispatch}/>}/>
            </div>
        </main>
    );
};

export default Main;
