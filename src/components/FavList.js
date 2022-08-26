import './List.scss'
import {useSelector} from "react-redux";
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import SongRow from "./SongRow";

const FavList = () => {

    let songs = useSelector(state => state.songReducer.rawSongList)

    return (
        <div className="listContainer">
            <div className="songList">
                <div className="list">
                    <div className="listRow title">Fav List</div>
                    <div className="listRow">
                        {
                            songs.filter(element => element.liked)
                                .map((element, index) =>
                                    <SongRow key={index} song={element}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FavList