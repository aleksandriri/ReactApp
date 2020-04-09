import React from 'react';
import style from './Film.module.css'
import Block from '../Block/Block'
import {NavLink} from "react-router-dom";

let filmData = [
    {name: 'Iron Man', poster: 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg'},
    {name: 'Iron Fists', poster: 'https://m.media-amazon.com/images/M/MV5BMTg5ODI3ODkzOV5BMl5BanBnXkFtZTcwMTQxNjUwOA@@._V1_SX300.jpg'},
];

const Film = (props) => {
    return (
        <div className="inner">
            <NavLink to="/page">
                <Block name={filmData[0].name} poster={filmData[0].poster}/>
            </NavLink>
            <NavLink to="/page">
                <Block name={filmData[1].name} poster={filmData[1].poster}/>
            </NavLink>
        </div>
    );
};

export default Film;