import './Home.scss'
import axios from "axios";
import {APIURL} from "./Helper";
import {useEffect} from "react";

const fetchData =() => {
    console.log('i triggered,?')
    axios.get(APIURL) // Promise
        .then(res => console.log('data return', res.data))
        .then(err => console.log('err fetching data', err))
}


const Home = () => {

    useEffect(fetchData, [])
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
                            <div className="listRow">body</div>
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