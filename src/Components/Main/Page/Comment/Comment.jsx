import React from 'react';
import style from './Comment.module.css';
import {addCommentActionCreator, onSendMessageActionCreator} from "../../../../Redux/StateRedux";

const Comment = (props) => {
    let addComment = () => {
        props.dispatch(addCommentActionCreator());
    };
    let onCommentChange = (event) => {
        let CommentHeader = event.target.value;
        let CommentBody = event.target.value;
        props.dispatch(onSendMessageActionCreator(CommentHeader, CommentBody));
    };
    let CommentElements = props.stateComment.PageCommentsData.map((comment) => {
        return (
            <div className={style.comment__item}>
                <h3 className={style.comment__header}>{comment.name}</h3>
                <p className={style.comment__body}>{comment.comment}</p>
                <span className={style.comment__like}>Нравится: {comment.like}</span>
            </div>
        );
    });
    return (
        <div className={style.comments__wrapper}>
            <div className={style.comments__send}>
                <input className={style.comments__input}
                       type="text"
                       placeholder='Ваше Имя'
                       value={props.stateComment.newCommentText.header}
                       onChange={onCommentChange}
                />
                <textarea className={style.comments__textarea}
                          placeholder='Ваш коментарий'
                          value={props.stateComment.newCommentText.body}
                          onChange={onCommentChange}>
                </textarea>
                <button onClick={addComment}>Коментировать</button>
            </div>
            { CommentElements }
        </div>
    );
};

export default Comment;
