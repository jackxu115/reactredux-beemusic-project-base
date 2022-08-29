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

    // The function returned receives the dispatch method as an argument,
    // which you should use to trigger state updates,
    // since the function by itself cannot dispatch actions event if you return an object.
    return async dispatch => {
        dispatch(fetchDataBegin())
        try {
            const res = await axios.get(APIURL)
            dispatch(fetchDataSuccess(res))
            dispatch(actions.songAction.fetchAllSongs())
        } catch (err) {
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