import {combineReducers} from "redux";
import {songReducer} from "./songReducer";
import {dataReducer} from "./dataReducer";

export default combineReducers(
    {
    songReducer,
    dataReducer
})