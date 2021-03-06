import React from 'react';
import style from './Comment.module.css';
import {HeartTwoTone} from '@ant-design/icons'
import {
    addCommentActionCreator,
    onSendCommentHeaderActionCreator,
    onSendCommentBodyActionCreator
} from "../../../../Redux/SinglePageReducer";

const Comment = (props) => {
    let addComment = () => {
        props.dispatch(addCommentActionCreator());
    };
    let onCommentHeaderChange = (name) => {
        let CommentHeader = name.target.value;
        props.dispatch(onSendCommentHeaderActionCreator(CommentHeader));
    };
    let onCommentBodyChange = (comment) => {
        let CommentBody = comment.target.value;
        props.dispatch(onSendCommentBodyActionCreator(CommentBody));
    };
    let CommentElements = props.stateComment.PageCommentsData.map((comment, index) => {
        return (
            <div className={style.comment__item} key={index}>
                <h3 className={style.comment__header}>{comment.name}</h3>
                <p className={style.comment__body}>{comment.comment}</p>
                <span className={style.comment__like}><HeartTwoTone twoToneColor="#eb2f96" /> {comment.like}</span>
            </div>
        );
    });
    return (
        <div className={style.comments__wrapper}>
            <div className={style.comments__send}>
                <input className={style.comments__input}
                       type="text"
                       placeholder='Ваше Имя'
                       value={props.stateComment.newCommentTextHeader}
                       onChange={onCommentHeaderChange}
                />
                <textarea className={style.comments__textarea}
                          placeholder='Ваш коментарий'
                          value={props.stateComment.newCommentTextBody}
                          onChange={onCommentBodyChange}>
                </textarea>
                <button onClick={addComment}>Коментировать</button>
            </div>
            {CommentElements}
        </div>
    );
};

export default Comment;
