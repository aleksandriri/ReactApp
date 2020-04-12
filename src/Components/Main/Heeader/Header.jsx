import React from 'react';
import style from './Header.module.css'
import Search from "./Search/Search"
import {Route} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={style.main__header}>
            <div className={style.main__title__inner}>
                <h1 className={style.main__title}>Скачать новые сериалы и фильмы</h1>
            </div>
            <Search addBlock={props.addBlock}/>
        </div>
    );
};

export default Header;