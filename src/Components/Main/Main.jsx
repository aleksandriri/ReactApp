import React from 'react';
import style from './Main.module.css'
import Block from './Block/Block'

let filmData = [
    {name: 'Film 1', poster: 'https://upload.wikimedia.org/wikipedia/ru/0/0c/Black_Panther_film_poster.jpg'},
    {name: 'Film 2'},
    {name: 'Film 3'},
    {name: 'Film 4'},
    {name: 'Film 5'},
    {name: 'Film 6'},
    {name: 'Film 7'},
    {name: 'Film 8'},
    {name: 'Film 9'}
];

const Main = (props) => {
    return (
        <main className={style.main}>
            <Block name={filmData[0].name} poster={filmData[0].poster}/>
            <Block name={filmData[0].name} poster={filmData[0].poster}/>
            <Block name={filmData[0].name} poster={filmData[0].poster}/>
            <Block name={filmData[0].name} poster={filmData[0].poster}/>
            <Block name={filmData[0].name} poster={filmData[0].poster}/>
            <Block name={filmData[0].name} poster={filmData[0].poster}/>
        </main>
    );
};

export default Main;
