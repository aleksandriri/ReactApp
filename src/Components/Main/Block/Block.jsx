import React from 'react';
import style from './Block.module.css'

const Block = (props) => {
    return (
        <div className={style.main__item}>
            <div className={style.main__item_poster}>
                <img alt="example" src={props.poster} />
            </div>
            <div className={style.main__item_body}>
                {props.name}
            </div>
        </div>
    );
};

export default Block;