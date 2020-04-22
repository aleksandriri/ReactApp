import React from 'react';
import style from './Film.module.css'
import Block from '../Block/Block'
import {NavLink} from "react-router-dom";

const Film = (props) => {
    let BlockElements = props.stateFilm.map((film) => {
        return (
            <NavLink className={'main__block__item'} to="/page">
                <Block key={film.id} name={film.name} poster={film.poster}/>
            </NavLink>
        );
    });
    return (
        <div className={'inner'}>
            {BlockElements}
        </div>
    );
};

export default Film;