import React from 'react';
import style from './Navigation.module.css'
import {NavLink} from "react-router-dom";
import {HomeFilled, SettingFilled, FolderFilled} from '@ant-design/icons';

const Navigation = () => {
    return (
        <div className={style.navigation}>
            <div className={style.navigation__inner}>
                <div className={style.navigation__logo}>
                    <img src="https://web-creator.ru/uploads/Page/25/react.svg" alt="React"/>
                </div>
                <nav className={style.nav}>
                    <NavLink className={style.nav__link} to="/film" activeClassName={style.active}><HomeFilled />Фильмы</NavLink>
                    <NavLink className={style.nav__link} to="/serial" activeClassName={style.active}><FolderFilled />Сериалы</NavLink>
                    <NavLink className={style.nav__link} to="/cartoon" activeClassName={style.active}><FolderFilled />Мультфильмы</NavLink>
                    <NavLink className={style.nav__link} to="/settings" activeClassName={style.active}><SettingFilled />Настройки</NavLink>
                </nav>
            </div>
            <div className={style.navigation__footer}>

            </div>
        </div>
    );
};

export default Navigation;
