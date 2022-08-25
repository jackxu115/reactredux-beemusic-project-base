import './Home.scss'
import axios from "axios";
import {APIURL} from "./Helper";
import {useEffect, useState} from "react";
import AllList from "./AllList";
import FavList from "./FavList";
import PlayList from "./PlayList";

const Home = () => {

    const [rawSongList, setRawSongList] = useState([])

    const fetchData = async () => {
        console.log('i triggered,?')
        // async, sync
        let res = await axios.get(APIURL) // Promise
        console.log('data return', res.data)
        setRawSongList(res.data)
        // .then(res => {
        //     console.log('data return', res.data)
        //     setRawSongList(res.data)
        // })
        // .catch(err => console.log('err fetching data', err))

    }

    useEffect(() => fetchData, [])
    console.log('hi')
    // no second parameter,
    // [], mount, render,
    // [],

    return (
        <section>
            <div className="container">
                <AllList />
                <FavList />
                <PlayList />
            </div>
        </section>
    )
}

export default Home