import React from 'react';
import style from './Header.module.css'

const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.header__inner}>
                <div className={style.header__logo}>
                    <img src="https://web-creator.ru/uploads/Page/25/react.svg" alt=""/>
                </div>
                <nav className={style.nav}>
                    <a className={style.nav__link} href="/film">Фильмы</a>
                    <a className={style.nav__link} href="/serial">Сериалы</a>
                    <a className={style.nav__link} href="/cartoon">Мультфильмы</a>
                    <a className={style.nav__link} href="/settings">Настройки</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;
