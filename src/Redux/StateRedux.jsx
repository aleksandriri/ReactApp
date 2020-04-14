let key = '57ed170a';
let link = `http://www.omdbapi.com/?apikey=${key}&s=guns`;
console.log(link);

let store = {
    _stateRedux : {
        FilmData:[
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
        SerialData:[
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
        newSearchText: ''
    },
    getState () {
        return this._stateRedux;
    },
    _callSubscriber () {
        console.log('State change');
    },
    addBlock () {
        let newBlock = {
            name: this._stateRedux.newSearchText,
            poster: 'https://m.media-amazon.com/images/M/MV5BMjM3ODY3Njc5Ml5BMl5BanBnXkFtZTgwMjQ5NjM5MTI@._V1_SX300.jpg'
        };
        this._stateRedux.FilmData.push(newBlock);
        this._callSubscriber(this._stateRedux);
    },
    updateNewSearchText (newText) {
        this._stateRedux.newSearchText = newText;
        this._callSubscriber(this._stateRedux);
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    }
};

window.store = store;

export default store;