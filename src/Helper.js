
export const APIURL = `http://course-data.mark2win.com/solo`

export const actionType = {
    // song action define
    'FETCH_ALL_SONGS': 'FETCH_ALL_SONGS',
    'SELECT_SONG' : 'SELECT_SONG'

    // message bar action define
    // todo
}







// const fetchData = async () => {
//     console.log('i triggered,?')
// async, sync
// let res = await axios.get(APIURL) // Promise
// console.log('data return', res.data)
// setRawSongList(res.data)
// .then(res => {
//     console.log('data return', res.data)
//     setRawSongList(res.data)
// })
// .catch(err => console.log('err fetching data', err))
// }

// useEffect(() => fetchData, [])
// console.log('hi')
