import React from 'react';
import style from './Film.module.css'
import Block from '../Block/Block'
import {NavLink} from "react-router-dom";

let FilmData = [
    {
        name: 'Iron Man',
        poster: 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg'
    },
    {
        name: 'Iron Fists',
        poster: 'https://m.media-amazon.com/images/M/MV5BMTg5ODI3ODkzOV5BMl5BanBnXkFtZTcwMTQxNjUwOA@@._V1_SX300.jpg'
    },
    {
        name: 'Iron Fists',
        poster: 'https://m.media-amazon.com/images/M/MV5BMTg5ODI3ODkzOV5BMl5BanBnXkFtZTcwMTQxNjUwOA@@._V1_SX300.jpg'
    },
    {
        name: 'Iron Fists',
        poster: 'https://m.media-amazon.com/images/M/MV5BMTg5ODI3ODkzOV5BMl5BanBnXkFtZTcwMTQxNjUwOA@@._V1_SX300.jpg'
    }
];

let BlockElements = FilmData.map((film) => {
    return (
        <NavLink to="/page">
            <Block name={film.name} poster={film.poster}/>
        </NavLink>
    )
} );

const Film = (props) => {
    return (
        <div className={style.inner}>
            {BlockElements}
        </div>
    );
};

export default Film;