import React from 'react';
import style from './Main.module.css'
import Search from "./Search/Search"
import Film from "./Film/Film";
import Serial from "./Serial/Serial";
import Cartoon from "./Cartoon/Cartoon";
import Settings from "./Settings/Settings";
import {Route} from 'react-router-dom'

// function searchMovie(){
//     fetch('http://www.omdbapi.com/?s=${movie}&apikey=${key}')
// }
// let key = '57ed170a';
// let movie = 'Iron';
// let link = `http://www.omdbapi.com/?s=${movie}&apikey=${key}`;
// console.log(link);

const Main = (props) => {
    return (
        <main className={style.main}>
            <div className={style.main__header}>
                <div className={style.main__title__inner}>
                    <h1 className={style.main__title}>Скачать новые сериалы и фильмы</h1>
                </div>
                <Search />
            </div>
            <div className={style.main__body}>
                <Route path='/film' component={Film}/>
                <Route path='/serial' component={Serial}/>
                <Route path='/cartoon' component={Cartoon}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </main>
    );
};

export default Main;
