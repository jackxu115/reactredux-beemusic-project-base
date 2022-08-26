import {actionType} from "../Helper";

// state shape
const initState = {
    rawSongList: [],
    id: undefined,
}

export const songReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.FETCH_ALL_SONGS:
            console.log(`[reducer] ${actionType.FETCH_ALL_SONGS}`, action.payload)
            // we need to update it to the state
            // state is immutable
            // copy state,update the copy
            // return the copy
            // object, array,

            /*
            let newState = {...state}
            newState.rawSongList = action.payload
            return newState
             */
            return {...state, rawSongList: action.payload}

        case actionType.SELECT_SONG:
            console.log(`[reducer] ${actionType.FETCH_ALL_SONGS}`, action.payload)
            return {...this.state, id: action.payload}

        default:
            return state
    }
}
