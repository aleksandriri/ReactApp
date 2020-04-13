import React from 'react';
import style from './Search.module.css'
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const Search = (props) => {
    let searchElem = React.createRef();
    let searchBtn = () => {
        props.addBlock();
        props.updateSearch('');
    };
    let onSearchChange = () => {
        let searchVal = searchElem.current.value;
        props.updateSearch(searchVal);
    };
    return (
        <div className={style.main__search__inner}>
            <div className={style.search__inner}>
                <input className={style.search__input + ' ' + 'testss'}
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