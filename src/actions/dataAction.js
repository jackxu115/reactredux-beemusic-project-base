import axios from "axios";
import {APIURL} from "../Helper";
import {actionType} from "../Helper";


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

const fetchData = () => {
    console.log("fetch data")
    return async dispatch => {
        dispatch(fetchDataBegin())
        try {
            const res = await axios.get(APIURL)
            dispatch(fetchDataSuccess(res))
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