import {combineReducers} from "redux";
import collectionsReducer from "./collectionsReducer";

export default combineReducers({
    collectionReducer: collectionsReducer
});
