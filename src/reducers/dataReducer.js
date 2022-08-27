import {actionType} from "../Helper";

// redux / store shape
const initState = {
    rawData: [],
    loading: false,
    error: null
}


export const dataReducer = (state = initState, action) => {

    switch (action.type) {
        case actionType.FETCH_DATA_BEGIN:
            console.log(`[reducer] ${actionType.FETCH_DATA_BEGIN}`, action.payload)
            return {...state, loading: true, error: null}

        case actionType.FETCH_DATA_SUCCESS:
            console.log(`[reducer] ${actionType.FETCH_DATA_SUCCESS}`, action.payload)
            return {...state, loading: false, rawData: action.payload}

        case actionType.FETCH_DATA_FAILURE:
            console.log(`[reducer] ${actionType.FETCH_DATA_FAILURE}`, action.payload)
            return {...state, loading: false, error: action.payload.error, rawData: []}

        default:
            return state
    }
}