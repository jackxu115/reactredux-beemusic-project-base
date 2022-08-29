import './Home.scss'
import axios from "axios";
import {APIURL} from "../Helper";
import {useEffect, useState} from "react";
import AllList from "./AllList";
import FavList from "./FavList";
import PlayList from "./PlayList";
import actions from "../actions";
import {useDispatch, useSelector} from "react-redux";

// functional component, FC,
// class based component, CC
const Home = () => {

    let track = useSelector(state => state.songReducer.track)
    let play = useSelector(state => state.songReducer.play)
    console.log('track', track)
    console.log('play', play)
    const dispatch = useDispatch()


    useEffect(() => {
        const audio = new Audio(track)
        play !== -1 && audio.play()
        audio.onended = () => {
            console.log('audio end')
            dispatch(actions.songAction.playSong(play + 1))
        }

        return () => {
            play !== -1 && audio.pause()
        }
    }, [play])

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