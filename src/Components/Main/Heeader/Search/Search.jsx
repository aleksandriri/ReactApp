import React from 'react';
import style from './Search.module.css'
import 'antd/dist/antd.css';
import { Input, AutoComplete } from 'antd';
import { onSearchActionCreator } from "../../../../Redux/HeaderReducer";

const Search = (props) => {
    let onSearchChange = (event) => {
        let searchVal = event.target.value;
        props.dispatch(onSearchActionCreator(searchVal));
    };
    return (
        <div className={style.main__search__inner}>
                <AutoComplete>
                <Input.Search
                    size="large"
                    placeholder="Global search"
                    enterButton
                    onChange={onSearchChange}
                    value={props.stateSearch}
                />
            </AutoComplete>
        </div>
    );
};

export default Search;