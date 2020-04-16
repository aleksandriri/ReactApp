import React from 'react';
import style from './Search.module.css'
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { addBlockActionCreator, onSearchActionCreator } from "../../../../Redux/StateRedux";

const Search = (props) => {
    let searchElem = React.createRef();
    let searchBtn = () => {
        props.dispatch(addBlockActionCreator());
    };
    let onSearchChange = () => {
        let searchVal = searchElem.current.value;
        props.dispatch(onSearchActionCreator(searchVal));
    };
    return (
        <div className={style.main__search__inner}>
            <div className={style.search__inner}>
                <input className={style.search__input}
                       type="text" ref={searchElem}
                       onChange={onSearchChange}
                       value={props.stateSearch}
                />
                <Button className={style.search__btn} type="primary" onClick={searchBtn} icon={<SearchOutlined />} />
            </div>
        </div>
    );
};

export default Search;