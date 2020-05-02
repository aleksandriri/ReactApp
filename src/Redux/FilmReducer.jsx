const ADD_BLOCK = 'ADD-BLOCK';
const UPDATE_NEW_SEARCH_TEXT = 'UPDATE-NEW-SEARCH-TEXT';

const filmReducer = (state, action) => {
    switch (action.type) {
        case ADD_BLOCK:
            let newBlock = {
                name: state.newSearchText,
                poster: 'https://m.media-amazon.com/images/M/MV5BMjM3ODY3Njc5Ml5BMl5BanBnXkFtZTgwMjQ5NjM5MTI@._V1_SX300.jpg'
            };
            state.FilmData.push(newBlock);
            state.newSearchText = '';
            return state;
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

export const addBlockActionCreator = () => {
    return {
        type: ADD_BLOCK
    }
};

export const onSearchActionCreator = (searchVal) => {
    return {
        type: UPDATE_NEW_SEARCH_TEXT, newText: searchVal
    }
};

export default filmReducer;