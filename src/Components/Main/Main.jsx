import React from 'react';
import style from './Main.module.css'
import Film from "./Film/Film";
import Serial from "./Serial/Serial";
import Cartoon from "./Cartoon/Cartoon";
import Settings from "./Settings/Settings";
import Page from "./Page/Page";
import Header from "./Heeader/Header";
import {Route} from 'react-router-dom';

const Main = (props) => {
    return (
        <main className={style.main}>
            <Route path='/' render={() => <Header stateSearch={props.state.newSearchText}
                                                  addBlock={props.addBlock}
                                                  updateSearch={props.updateSearch}/>}
            />
            <div className={style.main__body}>
                <Route path='/film' render={() => <Film stateFilm={props.state.FilmData}/>}/>
                <Route path='/serial' render={() => <Serial stateSerial={props.state.SerialData}/>}/>
                <Route path='/cartoon' render={() => <Cartoon/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/page' render={() => <Page/>}/>
            </div>
        </main>
    );
};

export default Main;
