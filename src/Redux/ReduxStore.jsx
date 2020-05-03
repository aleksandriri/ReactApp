import {combineReducers, createStore} from "redux";
import filmReducer from "./FilmReducer";
import singlePageReducer from "./SinglePageReducer";

let reducers = combineReducers({
    filmPage:filmReducer,
    singlePage:singlePageReducer
});

let store = createStore(reducers);

export default store;