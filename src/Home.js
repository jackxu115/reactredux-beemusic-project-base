import './Home.scss'
import axios from "axios";
import {APIURL} from "./Helper";
import {useEffect, useState} from "react";

const Home = () => {

    const [rawSongList, setRawSongList] = useState([])

    const fetchData = async () => {
        console.log('i triggered,?')

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
                <div className="listContainer">
                    <div className="songList">
                        <div className="list">
                            <div className="listRow title">All List</div>
                            <div className="listRow">{JSON.stringify(rawSongList)}</div>
                        </div>
                    </div>
                </div>
                <div className="listContainer">
                    <div className="songList">
                        <div className="list">
                            <div className="listRow title"> Fav List</div>
                            <div className="listRow">body</div>
                        </div>
                    </div>
                </div>
                <div className="listContainer">
                    <div className="songList">
                        <div className="list">
                            <div className="listRow title">Play List</div>
                            <div className="listRow">body</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home