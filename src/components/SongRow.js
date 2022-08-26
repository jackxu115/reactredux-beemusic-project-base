import "./SongRow.scss"
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import {CheckedIcon, FavIcon, PlayingIcon} from "./FavIcon";

const SongRow = ({song}) => {

    return (
        <div className='songRow'>
            <div className='songRow_Index'>
                <div>{song.id}</div>
                <CheckedIcon checked={song.checked}/>

            </div>
            <div className='songRow_Image'>
                <img width='50px' src={song.cover} alt=""/>
            </div>
            <div className='songRow_Content'>
                <div className='songRow_Content_Title'>
                    <div className='songRow_Content_Title_Name'>{song.name}</div>
                    <div className='songRow_Content_Title_Lyrics'>{song.artist}</div>
                </div>
                <div className='songRow_Content_Album'>
                    {song?.album ?? 'Album'}
                </div>
            </div>
            <div className='songRow_Length'>{song.length}</div>
            <div className='songRow_Button'>
                <FavIcon liked={song.liked}/>
                <PlayingIcon playing={song.playing}/>
            </div>
        </div>
    )
}

export default SongRow