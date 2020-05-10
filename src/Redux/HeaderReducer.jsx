const UPDATE_NEW_SEARCH_TEXT = 'UPDATE-NEW-SEARCH-TEXT';

let initialState = {
    headerBlock : {
        newSearchText: '',
        newSearchResult: null
    }
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