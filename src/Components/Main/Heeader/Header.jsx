import React from 'react';
import style from './Header.module.css';
import Search from "./Search/Search";

const Header = (props) => {
    debugger
    return (
        <div className={style.main__header}>
            <div className={style.main__header__search}>
                <Search className={style.main__search}
                        stateSearch={props.stateSearch}
                        dispatch={props.dispatch}
                />
            </div>
        </div>
    );
};

export default Header;