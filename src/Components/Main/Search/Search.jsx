import React from 'react';
import style from './Search.module.css'

const Search = (props) => {
    return (
        <div className={style.main__search__inner}>
            <div className={style.search__inner}>
                <input type="text"/>
            </div>
        </div>
    );
};

export default Search;