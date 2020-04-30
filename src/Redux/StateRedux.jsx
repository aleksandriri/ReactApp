import filmReducer from "./FilmReducer";
import singlePageReducer from "./SinglePageReducer";

const ADD_BLOCK = 'ADD-BLOCK';
const UPDATE_NEW_SEARCH_TEXT = 'UPDATE-NEW-SEARCH-TEXT';
const ADD_COMMENT = 'ADD-COMMENT';
const UPDATE_NEW_COMMENT_TEXT_HEADER = 'UPDATE-NEW-COMMENT-TEXT-HEADER';
const UPDATE_NEW_COMMENT_TEXT_BODY = 'UPDATE-NEW-COMMENT-TEXT-BODY';

let store = {
    _stateRedux : {
        filmPage: {
            FilmData: [
                {
                    name: 'Iron Man',
                    poster: 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg'
                },
                {
                    name: 'Iron Fists',
                    poster: 'https://m.media-amazon.com/images/M/MV5BMTg5ODI3ODkzOV5BMl5BanBnXkFtZTcwMTQxNjUwOA@@._V1_SX300.jpg'
                },
                {
                    name: '2 Guns',
                    poster: 'https://m.media-amazon.com/images/M/MV5BNTQ5MTgzNDg4OF5BMl5BanBnXkFtZTcwMjAyODEzOQ@@._V1_SX300.jpg'
                },
                {
                    name: 'Avatar',
                    poster: 'https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg'
                }
            ],
        },
        serialPage : {
            SerialData: [
                {
                    name: 'Friends',
                    poster: 'https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg'
                },
                {
                    name: 'El Narco',
                    poster: 'https://m.media-amazon.com/images/M/MV5BOThkNTRhZTctMWMwNy00MDdlLWI1MWEtOGJhNjAwMzQzMTEwXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'
                },
                {
                    name: 'Money Heist',
                    poster: 'https://m.media-amazon.com/images/M/MV5BOTI5OTI0YTQtM2UxNC00MjMxLWE5NjQtZWIzNGRhZTlmMjdhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg'
                },
                {
                    name: 'The Money Pit',
                    poster: 'https://m.media-amazon.com/images/M/MV5BNDJmNTZkMDMtOWU5ZS00N2ZlLWIxN2EtZTI4NzBhODc0MmRjL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
                }
            ],
        },
        singlePage : {
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
        },
        headerBlock : {
            newSearchText: ''
        }
    },
    _callSubscriber () {
        console.log('State change');
    },
    getState () {
        return this._stateRedux;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    dispatch (action) {
        this._stateRedux.headerBlock = filmReducer(this._stateRedux.headerBlock, action);
        this._stateRedux.singlePage = singlePageReducer(this._stateRedux.singlePage, action)
        this._callSubscriber(this._stateRedux);
        // if (action.type === ADD_BLOCK) {
        //     let newBlock = {
        //         name: this._stateRedux.headerBlock.newSearchText,
        //         poster: 'https://m.media-amazon.com/images/M/MV5BMjM3ODY3Njc5Ml5BMl5BanBnXkFtZTgwMjQ5NjM5MTI@._V1_SX300.jpg'
        //     };
        //     this._stateRedux.filmPage.FilmData.push(newBlock);
        //     this._stateRedux.headerBlock.newSearchText = '';
        //     this._callSubscriber(this._stateRedux);
        // } else if (action.type === UPDATE_NEW_SEARCH_TEXT) {
        //     this._stateRedux.headerBlock.newSearchText = action.newText;
        //     const getResponse = async () => {
        //         let key = '57ed170a';
        //         let response = await fetch(`http://www.omdbapi.com/?apikey=${key}&s=${action.newText}`);
        //         let responseBlock = await response.json();
        //         console.log(responseBlock);
        //     };
        //     getResponse();
        //     this._callSubscriber(this._stateRedux);
        // } else if (action.type === ADD_COMMENT){
        //     let newComment = {
        //         name : this._stateRedux.singlePage.newCommentTextHeader,
        //         comment : this._stateRedux.singlePage.newCommentTextBody,
        //         like : 0
        //     };
        //     this._stateRedux.singlePage.PageCommentsData.push(newComment);
        //     this._stateRedux.singlePage.newCommentTextHeader = '';
        //     this._stateRedux.singlePage.newCommentTextBody = '';
        //     this._callSubscriber(this._stateRedux);
        // } else if (action.type === UPDATE_NEW_COMMENT_TEXT_HEADER) {
        //     this._stateRedux.singlePage.newCommentTextHeader = action.newHeader;
        //     this._callSubscriber(this._stateRedux);
        // } else if (action.type === UPDATE_NEW_COMMENT_TEXT_BODY) {
        //     this._stateRedux.singlePage.newCommentTextBody = action.newBody;
        //     this._callSubscriber(this._stateRedux);
        // }
    }
};

export const addBlockActionCreator = () => {
    return {
        type: ADD_BLOCK
    }
};

export const addCommentActionCreator = () => {
    return {
        type: ADD_COMMENT
    }
};

export const onSearchActionCreator = (searchVal) => {
    return {
        type: UPDATE_NEW_SEARCH_TEXT, newText: searchVal
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

window.store = store;

export default store;