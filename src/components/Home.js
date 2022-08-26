import './Home.scss'
import axios from "axios";
import {APIURL} from "../Helper";
import {useEffect, useState} from "react";
import AllList from "./AllList";
import FavList from "./FavList";
import PlayList from "./PlayList";
import actions from "../actions";
import {useDispatch} from "react-redux";

// functional component, FC,
// class based component, CC
const Home = () => {

    const [rawSongList, setRawSongList] = useState([])
    console.log(rawSongList)
    // dispatch: useDispatch(), mapDispatchToProps
    const sfDispatch = useDispatch()

    return (
        <section>
            <button onClick={() => sfDispatch(actions.songAction.fetchAllSongs())}>Fetch Songs</button>
            <div className="container">
                <AllList />
                <FavList />
                <PlayList />
            </div>
        </section>
    )
}

export default Home