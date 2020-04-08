import React from 'react';
import style from './Main.module.css'
import Block from './Block/Block'
import Search from "./Search/Search"

let filmData = [
    {name: 'Film 1', poster: 'https://upload.wikimedia.org/wikipedia/ru/0/0c/Black_Panther_film_poster.jpg'},
    {name: 'Film 2', poster: 'https://upload.wikimedia.org/wikipedia/ru/0/0c/Black_Panther_film_poster.jpg'},
    {name: 'Film 3'},
    {name: 'Film 4'},
    {name: 'Film 5'},
    {name: 'Film 6'},
    {name: 'Film 7'},
    {name: 'Film 8'},
    {name: 'Film 9'}
];
function searchMovie(){
    fetch('http://www.omdbapi.com/?s=${movie}&apikey=${key}')
}
let key = '57ed170a';
let movie = 'Iron';
let link = `http://www.omdbapi.com/?s=${movie}&apikey=${key}`;
console.log(link);


const Main = (props) => {
    return (
        <main className={style.main}>
            <div className={style.main__header}>
                <div className={style.main__title__inner}>
                    <h1 className={style.main__title}>Скачать новые сериалы и фильмы</h1>
                </div>
                <Search />
            </div>
            <Block name={filmData[0].name} poster={filmData[0].poster}/>
            <Block name={filmData[0].name} poster={filmData[0].poster}/>
            <Block name={filmData[0].name} poster={filmData[0].poster}/>
            <Block name={filmData[0].name} poster={filmData[0].poster}/>
            <Block name={filmData[0].name} poster={filmData[0].poster}/>
        </main>
    );
};

export default Main;
