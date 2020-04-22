import React from 'react';
import style from './Comment.module.css';
import {onSearchActionCreator, onSendMessageActionCreator} from "../../../../Redux/StateRedux";

const Comment = (props) => {
    let CommentElements = props.statePage.map((comment) => {
        return (
            <div className={style.comment__item}>
                <h3>{comment.name}</h3>
                <p>{comment.comment}</p>
                <span>Like:{comment.like}</span>
            </div>
        );
    });
    let addComment = () => {
        alert('Hello');
    };
    let commentElem = React.createRef();
    let onCommentChange = () => {
        let CommentVal = commentElem.current.value();
        props.dispatch(onSendMessageActionCreator(CommentVal));
    };
    return (
        <div className={style.comments__wrapper}>
            <div className={style.comments__send}>
                <input className={style.comments__input} type="text" placeholder='Ваше Имя'/>
                <textarea className={style.comments__textarea}
                          placeholder='Ваш коментарий'
                          rows="5" ref={commentElem}
                          value={props.statePage} onChange={onCommentChange}>
                </textarea>
                <button onClick={addComment}>Коментировать</button>
            </div>
            { CommentElements }
        </div>
    );
};

export default Comment;
