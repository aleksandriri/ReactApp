const ADD_COMMENT = 'ADD-COMMENT';
const UPDATE_NEW_COMMENT_TEXT_HEADER = 'UPDATE-NEW-COMMENT-TEXT-HEADER';
const UPDATE_NEW_COMMENT_TEXT_BODY = 'UPDATE-NEW-COMMENT-TEXT-BODY';

const singlePageReducer = (state, action) => {
    if (action.type === ADD_COMMENT) {
        let newComment = {
            name: state.newCommentTextHeader,
            comment: state.newCommentTextBody,
            like: 0
        };
        state.PageCommentsData.push(newComment);
        state.newCommentTextHeader = '';
        state.newCommentTextBody = '';
    } else if (action.type === UPDATE_NEW_COMMENT_TEXT_HEADER) {
        state.newCommentTextHeader = action.newHeader;
    } else if (action.type === UPDATE_NEW_COMMENT_TEXT_BODY) {
        state.newCommentTextBody = action.newBody;
    }
    return state;
};

export default singlePageReducer;