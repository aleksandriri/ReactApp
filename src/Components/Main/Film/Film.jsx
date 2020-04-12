import React from 'react';
import style from './Film.module.css'
import Block from '../Block/Block'
import {NavLink} from "react-router-dom";

const Film = (props) => {
    let BlockElements = props.stateFilm.map((film) => {
        return (
            <NavLink to="/page">
                <Block name={film.name} poster={film.poster}/>
            </NavLink>
        )
    });
    return (
        <div className={style.inner + ' ' + 'main__inner'}>
            {BlockElements}
        </div>
    );
};

export default Film;