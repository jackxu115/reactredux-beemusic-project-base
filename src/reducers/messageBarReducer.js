import {actionType} from "../Helper";

// redux / store shape
const initState = {}


export const messageBarReducer = (state = initState, action) => {
    switch (action.type) {
        // case actionType.FETCH_ALL_SONGS:
        //     console.log(`[reducer] ${actionType.FETCH_ALL_SONGS}`, action.payload)
        //     return state

        default:
            return state
    }
}