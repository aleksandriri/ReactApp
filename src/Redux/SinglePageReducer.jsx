const ADD_COMMENT = 'ADD-COMMENT';
const UPDATE_NEW_COMMENT_TEXT_HEADER = 'UPDATE-NEW-COMMENT-TEXT-HEADER';
const UPDATE_NEW_COMMENT_TEXT_BODY = 'UPDATE-NEW-COMMENT-TEXT-BODY';

const singlePageReducer = (state, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            let newComment = {
                name: state.newCommentTextHeader,
                comment: state.newCommentTextBody,
                like: 0
            };
            state.PageCommentsData.push(newComment);
            state.newCommentTextHeader = '';
            state.newCommentTextBody = '';
            return state;
        case UPDATE_NEW_COMMENT_TEXT_HEADER:
            state.newCommentTextHeader = action.newHeader;
            return state;
        case UPDATE_NEW_COMMENT_TEXT_BODY:
            state.newCommentTextBody = action.newBody;
            return state;
        default: return state;
    }
};

export const addCommentActionCreator = () => {
    return {
        type: ADD_COMMENT
    }
};

export  const onSendCommentHeaderActionCreator = (CommentHeader) => {
    return {
        type: UPDATE_NEW_COMMENT_TEXT_HEADER, newHeader: CommentHeader
    }
};

export  const onSendCommentBodyActionCreator = (CommentBody) => {
    return {
        type: UPDATE_NEW_COMMENT_TEXT_BODY, newBody: CommentBody
    }
};

export default singlePageReducer;