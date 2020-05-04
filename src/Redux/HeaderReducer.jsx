const UPDATE_NEW_SEARCH_TEXT = 'UPDATE-NEW-SEARCH-TEXT';

let initialState = {
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
};

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_SEARCH_TEXT:
            state.newSearchText = action.newText;
            const getResponse = async () => {
                let key = '57ed170a';
                let response = await fetch(`http://www.omdbapi.com/?apikey=${key}&s=${action.newText}`);
                let responseData = await response.json();
                console.log(responseData);
                return responseData;
            };
            getResponse();
            return state;
        default: return state;
    }
};

export const onSearchActionCreator = (searchVal) => {
    return {
        type: UPDATE_NEW_SEARCH_TEXT, newText: searchVal
    }
};

export default headerReducer;