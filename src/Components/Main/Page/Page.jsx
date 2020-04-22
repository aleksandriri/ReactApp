import React from 'react';
import style from './Page.module.css';
import Comment from "./Comment/Comment";


const Page = (props) => {
    return (
        <div className={style.page}>
            <Comment statePage={props.statePage}/>
        </div>
    );
};

export default Page;