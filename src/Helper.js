import axios from "axios";

export const APIURL = `http://course-data.mark2win.com/solo`

export const actionType = {
    // song action define
    'FETCH_ALL_SONGS': 'FETCH_ALL_SONGS',
    'LIKED_SONG': 'LIKED_SONG',
    'PLAYING_SONG': 'PLAYING_SONG',
    'SELECT_SONG': 'SELECT_SONG',
    'SET_TRACK' : 'SET_TRACK',
    'FETCH_DATA_BEGIN': 'FETCH_DATA_BEGIN',
    'FETCH_DATA_SUCCESS': 'FETCH_DATA_SUCCESS',
    'FETCH_DATA_FAILURE': 'FETCH_DATA_FAILURE'

    // message bar action define
    // todo
}


// sync fetchData using axios

// const fetchData = async () => {
//     let res = await axios.get(APIURL) // Promise
//     console.log('data return', res.data)
//     // Handle the data now
// }


// fetch async

// const fetchData = () => {
//    fetch(APIURL) // Promise
//        .then(res => res.json()) // Convert data to json format
//        .then(res => { // Handle the data
//            console.log('data return', res.data)
//        })
//        .catch(err => { // Handle the error
//            console.log('err fetching', err)
//        })
// }


// axios async

// const fetchData = () => {
//     axios.get(APIURL) // Promise
//         .then(res => { // handle the data
//             console.log('data return', res.data)
//         })
//         .catch(err => { // handle the error
//             console.log('err fetching data', err)
//         })
// }


// useEffect(() => fetchData, [])
// console.log('hi')
