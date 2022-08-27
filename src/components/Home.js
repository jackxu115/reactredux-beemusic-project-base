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

    // const dispatch = useDispatch()
    //
    // useEffect(() => {
    //     dispatch(actions.songAction.fetchAllSongs())
    // }, [])

    return (
        <section>
            <h1>Music Store</h1>
            {/*<button onClick={() => sfDispatch(actions.songAction.fetchAllSongs())}>Fetch Songs</button>*/}
            <div className="container">
                <AllList/>
                <FavList/>
                <PlayList/>
            </div>
        </section>
    )
}

export default Home