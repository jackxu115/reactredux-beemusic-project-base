import {actionType} from "../Helper";

const songs = [
    {id: 1, name: 'One kiss', artist: 'Taylor', length: 3.34},
    {id: 2, name: 'One kiss2', artist: 'Taylor', length: 3.34},
    {id: 3, name: 'One kiss3', artist: 'Taylor', length: 3.34},
    {id: 4, name: 'One kiss4', artist: 'Taylor', length: 3.34},
]

// action creator
const fetchAllSongs = () => {

    console.log(`[action] ${actionType.FETCH_ALL_SONGS}`)

    return {// action
        type:actionType.FETCH_ALL_SONGS,
        payload: songs,
    }
}

const selectSongs = id => {

    console.log(`[action] ${actionType.SELECT_SONG}`)

    return {// action
        type:actionType.SELECT_SONG,
        payload: id,
    }
}

export default {
    fetchAllSongs,
    selectSongs
}

