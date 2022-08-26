import './List.scss'
import {useSelector} from "react-redux";
import SongRow from "./SongRow";

const PlayList = () => {

    let songs = useSelector(state => state.songReducer.rawSongList)
    return (
        <div className="listContainer">
            <div className="songList">
                <div className="list">
                    <div className="listRow title">Play List</div>
                    <div>
                        {
                            songs.filter(element => element.checked)
                                .map((element, index) =>
                                    <SongRow key={index} song={element}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayList