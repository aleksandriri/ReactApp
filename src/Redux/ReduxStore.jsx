import {combineReducers, createStore} from "redux";
import headerReducer from "./HeaderReducer";
import singlePageReducer from "./SinglePageReducer";
import serialReducer from "./SerialReducer";
import filmReducer from "./FilmReducer";

let reducers = combineReducers({
    headerBlock: headerReducer,
    filmPage:filmReducer,
    serialPage:serialReducer,
    singlePage:singlePageReducer,
});

let store = createStore(reducers);

export default store;