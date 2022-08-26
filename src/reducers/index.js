import {combineReducers} from "redux";
import {songReducer} from "./songReducer";
import {messageBarReducer} from "./messageBarReducer";

export default combineReducers(
    {
    songReducer,
    messageBarReducer
})