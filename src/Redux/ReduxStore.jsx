import {combineReducers, createStore} from "redux";
import headerReducer from "./HeaderReducer";
import singlePageReducer from "./SinglePageReducer";
import serialReducer from "./SerialReducer";

let reducers = combineReducers({
    filmPage:headerReducer,
    serialPage:serialReducer,
    singlePage:singlePageReducer,
});

let store = createStore(reducers);

export default store;