import headerReducer from "./HeaderReducer";
import serialReducer from "./SerialReducer";
import singlePageReducer from "./SinglePageReducer";

let store = {
    _state : {
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
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    dispatch (action) {
        debugger
        this._state.headerBlock = headerReducer(this._state.headerBlock, action);
        this._state.serialPage = serialReducer(this._state.serialPage, action);
        this._state.singlePage = singlePageReducer(this._state.singlePage, action);
        this._callSubscriber(this._state);
    }
};

window.store = store;

export default store;