import {actionType} from "../Helper";

// redux / store shape
const initState = {
    rawSongList: [],
    id: undefined,
}

export const songReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.FETCH_ALL_SONGS:
            console.log(`[reducer] ${actionType.FETCH_ALL_SONGS}`, action.payload)
            return state

        case actionType.SELECT_SONG:
            console.log(`[reducer] ${actionType.FETCH_ALL_SONGS}`, action.payload)
            return state

        default:
            return state
    }
}
