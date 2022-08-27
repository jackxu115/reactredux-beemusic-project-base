import {actionType} from "../Helper";
import store from "../store";


const songs = [
    {id: 1, name: 'The Nights', artist: 'Avicii', length: 3.34, cover: 'img/album.jpg'},
    {id: 2, name: 'The Nights2', artist: 'Avicii', length: 3.34, cover: 'img/album.jpg'},
    {id: 3, name: 'The Nights3', artist: 'Avicii', length: 3.34, cover: 'img/album.jpg'},
    {id: 4, name: 'The Nights4', artist: 'Avicii', length: 3.34, cover: 'img/album.jpg'},
    {id: 5, name: 'The Nights5', artist: 'Avicii', length: 3.34, cover: 'img/album.jpg'},
    {id: 6, name: 'The Nights6', artist: 'Avicii', length: 3.34, cover: 'img/album.jpg'},
    {id: 7, name: 'The Nights7', artist: 'Avicii', length: 3.34, cover: 'img/album.jpg'},
    {id: 8, name: 'The Nights8', artist: 'Avicii', length: 3.34, cover: 'img/album.jpg'},
]



// action creator
const fetchAllSongs = () => {

    // access state store to get data
    const state = {...store.getState()}
    const {dataReducer: {rawData: {data: {data: {data}}}}} = state
    console.log('store dataReducer', data)

    console.log(`[action] ${actionType.FETCH_ALL_SONGS}`)
    // liked, playing, checked,
    // ... three dot operator, spread operator

    // copy compound data structure, object, array, {...} [...]
    // mdn spread operator
    return {// action
        type:actionType.FETCH_ALL_SONGS,
        payload: data.map(element => ({...element, liked: false, playing: false, checked: false}))
        // map, filter, find, some, findIndex, sort, push, slice, forEach
    }
}

const selectSong = id => {

    console.log(`[action] ${actionType.SELECT_SONG}`)

    return {// action
        type:actionType.SELECT_SONG,
        payload: id,
    }
}


const likedSong = id => {

    console.log(`[action] ${actionType.LIKED_SONG}`)

    return {// action
        type:actionType.LIKED_SONG,
        payload: id,
    }
}

const playSong = id => {

    console.log(`[action] ${actionType.PLAYING_SONG}`)

    return {// action
        type:actionType.PLAYING_SONG,
        payload: id,
    }
}

export default {
    fetchAllSongs,
    selectSong,
    likedSong,
    playSong
}

