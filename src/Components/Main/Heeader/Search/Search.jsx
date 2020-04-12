import React from 'react';
import style from './Search.module.css'
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const Search = (props) => {
    let searchElem = React.createRef();
    let searchBtn = () => {
        debugger;
        let searchVal = searchElem.current.value;
        props.addBlock(searchVal);
    };
    return (
        <div className={style.main__search__inner}>
            <div className={style.search__inner}>
                <input type="text" ref={searchElem}/>
                <Button type="primary" onClick={searchBtn} icon={<SearchOutlined />} />
            </div>
        </div>
    );
};

export default Search;