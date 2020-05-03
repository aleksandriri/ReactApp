const ADD_COMMENT = 'ADD-COMMENT';
const UPDATE_NEW_COMMENT_TEXT_HEADER = 'UPDATE-NEW-COMMENT-TEXT-HEADER';
const UPDATE_NEW_COMMENT_TEXT_BODY = 'UPDATE-NEW-COMMENT-TEXT-BODY';

let initialState = {
    PageCommentsData: [
        {
            name: 'Саша',
            comment : 'Assure polite his really and others figure though. Day age advantages end sufficient eat expression travelling.',
            like: 0
        },
        {
            name: 'Оля',
            comment : 'Started earnest brother believe an exposed so. Me he believing daughters if forfeited at furniture.',
            like: 0
        },
        {
            name: 'Алина',
            comment : 'They why quit gay cold rose deal park. One same they four did ask busy. Reserved opinions fat him nay position.',
            like: 0
        }
    ],
    newCommentTextHeader: '',
    newCommentTextBody: '',
};

const singlePageReducer = (state = initialState, action) => {
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