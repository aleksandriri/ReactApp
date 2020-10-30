import React from 'react';
import style from './Navigation.module.css'
import {NavLink} from "react-router-dom";
import logo from '../../img/logo.svg';
import {
    HomeFilled,
    SettingFilled,
    FolderFilled,
    FacebookFilled,
    LinkedinFilled,
    TwitterSquareFilled,
    CustomerServiceFilled,
    PhoneFilled
} from '@ant-design/icons';

const Navigation = () => {
    return (
        <div className={style.navigation}>
            <div className={style.navigation__inner}>
                <div className={style.navigation__logo}>
                    <a href="#">
                        <img src={logo} alt="Logo"/>
                    </a>
                </div>
                <nav className={style.nav}>
                    <NavLink className={style.nav__link} to="/home" activeClassName={style.active}><HomeFilled />Главная</NavLink>
                    <NavLink className={style.nav__link} to="/film" activeClassName={style.active}><FolderFilled />Фильмы</NavLink>
                    <NavLink className={style.nav__link} to="/serial" activeClassName={style.active}><FolderFilled />Сериалы</NavLink>
                    <NavLink className={style.nav__link} to="/cartoon" activeClassName={style.active}><FolderFilled />Мультфильмы</NavLink>
                    <NavLink className={style.nav__link} to="/settings" activeClassName={style.active}><SettingFilled spin />Настройки</NavLink>
                </nav>
                <div className={style.navigation__social}>
                    <p className={style.navigation__social_title}>Social media:</p>
                    <div className={style.navigation__social_wrapper}>
                        <a href="https://www.facebook.com" target="_blank"><FacebookFilled /></a>
                        <a href="https://www.linkedin.com" target="_blank"><LinkedinFilled /></a>
                        <a href="https://twitter.com" target="_blank"><TwitterSquareFilled /></a>
                    </div>
                </div>
            </div>
            <div className={style.navigation__footer}>
                <div className={style.navigation__footer_inner}>
                    <div className={style.navigation__footer_header}>
                        <CustomerServiceFilled />
                    </div>
                    <div className={style.navigation__footer_body}>
                        <p className={style.navigation__footer_body_title}>Customer Support</p>
                        <a className={style.navigation__footer_body_link} href="tel:+303-339-0949"><PhoneFilled />303-339-0949</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
