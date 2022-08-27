import axios from "axios";
import {APIURL} from "../Helper";
import {actionType} from "../Helper";
import actions from "./index";


const fetchDataBegin = () => ({
    type: actionType.FETCH_DATA_BEGIN
})

const fetchDataSuccess = data => ({
    type: actionType.FETCH_DATA_SUCCESS,
    payload: {data}
})

const fetchDataFailure = error => ({
    type: actionType.FETCH_DATA_FAILURE,
    payload: {error}
})

// fetch data using async logic
const fetchData = () => {
    console.log("fetch data")
    return async dispatch => {
        dispatch(fetchDataBegin())
        try {
            const res = await axios.get(APIURL)
            dispatch(fetchDataSuccess(res))
            dispatch(actions.songAction.fetchAllSongs())
        } catch (err){
            dispatch(fetchDataFailure(err))
        }
    }
}

export default {
    fetchData,
    fetchDataBegin,
    fetchDataFailure,
    fetchDataSuccess
}