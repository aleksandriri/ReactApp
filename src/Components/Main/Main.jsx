import React from 'react';
import style from './Main.module.css'
import Block from './Block/Block'

let filmData = [
    {name: 'Film 1'},
    {name: 'Film 2'},
    {name: 'Film 3'},
    {name: 'Film 4'},
    {name: 'Film 5'},
    {name: 'Film 6'},
    {name: 'Film 7'},
    {name: 'Film 8'},
    {name: 'Film 9'},
    {name: 'Film 9'},
    {name: 'Film 9'},
    {name: 'Film 9'},
    {name: 'Film 9'},
];

const Main = (props) => {
    return (
        <main className={style.main}>
            <Block name={filmData[0].name}
                   url="https://upload.wikimedia.org/wikipedia/ru/0/0c/Black_Panther_film_poster.jpg"/>
            {/* <Block name={props.filmData.name} url="https://i.pinimg.com/originals/fd/5e/66/fd5e662dce1a3a8cd192a5952fa64f02.jpg"/>
      <Block name={props.filmData.name} url="https://images-na.ssl-images-amazon.com/images/I/71nsvxFpSTL._SY606_.jpg"/>
      <Block name={props.filmData.name} url="https://images-na.ssl-images-amazon.com/images/I/71rNJQ2g-EL._AC_SY679_.jpg"/>
      <Block name={props.filmData.name} url="https://images-na.ssl-images-amazon.com/images/I/81ai6zx6eXL._AC_SY606_.jpg"/>
      <Block name={props.filmData.name} url="https://i.etsystatic.com/16832842/r/il/ab3e04/1573128269/il_570xN.1573128269_4nw9.jpg"/> */}
        </main>
    );
};

export default Main;
