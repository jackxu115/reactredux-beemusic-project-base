import {actionType} from "../Helper";

// state shape
const initState = {
    rawSongList: [],
    id: undefined,
    track: undefined,
    play: -1
}

export const songReducer = (state = initState, action) => {

    let id = action.payload
    let newSongList = [...state.rawSongList]

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
            console.log(`[reducer] ${actionType.SELECT_SONG}`, action.payload)
            newSongList = newSongList.map(element =>
                element.id === id ? {...element, checked: !element.checked} : element)

            return {...state, rawSongList: newSongList}

        case actionType.LIKED_SONG:
            console.log(`[reducer] ${actionType.LIKED_SONG}`, action.payload)
            newSongList = newSongList.map(element =>
                element.id === id ? {...element, liked: !element.liked} : element)

            return {...state, rawSongList: newSongList}

        case actionType.PLAYING_SONG:
            console.log(`[reducer] ${actionType.PLAYING_SONG}`, action.payload)
            newSongList = newSongList.map(element =>
                element.id === id ?
                    {...element, playing: !element.playing}
                    :
                    {...element, playing: false})
            const play = newSongList.findIndex(element => element.playing === true)

            return {...state, rawSongList: newSongList, play: play}

        case actionType.SET_TRACK:
            console.log(`[reducer] ${actionType.SET_TRACK}`, action.payload)

            return {...state, track: state.rawSongList[id - 1].stream}


        default:
            return state
    }
}
