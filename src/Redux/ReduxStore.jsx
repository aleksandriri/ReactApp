import {combineReducers, createStore} from "redux";
import headerReducer from "./HeaderReducer";
import singlePageReducer from "./SinglePageReducer";

let reducers = combineReducers({
    filmPage:headerReducer,
    singlePage:singlePageReducer
});

let store = createStore(reducers);

export default store;