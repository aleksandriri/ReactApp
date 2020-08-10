import React from 'react';
import style from './Film.module.css'
import Block from '../Block/Block'
import {NavLink} from "react-router-dom"

const Film = (props) => {
    let BlockElements = props.stateFilm.FilmData.map((film, index) => {
        return (
            <NavLink className={'main__block__item'} to="/page" key={index}>
                <Block name={film.name} poster={film.poster} key={index}/>
            </NavLink>
        );
    });
    return (
        <div className={'content__inner'}>
            {BlockElements}
        </div>
    );
};

export default Film;