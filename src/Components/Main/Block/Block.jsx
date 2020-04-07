import React from 'react';
import style from './Block.module.css'

const Block = (props) => {
    return (
        <div className={style.main__item}>
            <img alt="example" src={props.poster} />
            {props.name}
        </div>
    );
};

export default Block;