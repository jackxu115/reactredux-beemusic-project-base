import "./SongRow.scss"
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import {CheckedIcon, FavIcon, PlayingIcon} from "./FavIcon";
import {useDispatch} from "react-redux";
import actions from "../actions";

const SongRow = ({song}) => {

    const dispatch = useDispatch()

    return (
        <div className='songRow'>
            <div className='songRow_Index'>
                <div>{song.id}</div>
            </div>
            <div className='songRow_Image'>
                <img width='80px' src={song.cover} alt=""/>
            </div>
            <div className='songRow_Content'>
                <div className='songRow_Content_Title'>
                    <div className='songRow_Content_Title_Name'>{song.title}</div>
                    <div className='songRow_Content_Title_Artist'>{song.artist}</div>
                </div>
                <div className='songRow_Content_Info'>
                    <div className='songRow_Content_Info_Album'>
                        {song?.album ?? 'Album'}
                    </div>
                    <div className='songRow_Content_Info_Length'>{song.length}</div>
                </div>
            </div>
            <div className='songRow_Button'>
                <FavIcon liked={song.liked} onClick={() => dispatch(actions.songAction.likedSong(song.id))}/>
                <CheckedIcon checked={song.checked} onClick={()=> dispatch(actions.songAction.selectSong(song.id))}/>
                <PlayingIcon playing={song.playing} onClick={()=> dispatch(actions.songAction.playSong(song.id))}/>
            </div>
        </div>
    )
}

export default SongRow