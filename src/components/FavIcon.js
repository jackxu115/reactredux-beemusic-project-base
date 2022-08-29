import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import CheckBoxOutlineBlankTwoToneIcon from '@mui/icons-material/CheckBoxOutlineBlankTwoTone';
import CheckBoxTwoToneIcon from '@mui/icons-material/CheckBoxTwoTone';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import PlayingGif from '../assets/images/play.gif'


const FavIcon = ({liked, ...rest}) => {
    return (
        <div className='icon' {...rest} >
            {liked ? <FavoriteTwoToneIcon/> : <FavoriteBorderTwoToneIcon/>}
        </div>
    )
}

const CheckedIcon = ({checked, ...rest}) => {
    return (
        <div className='icon' {...rest}>
            {checked ? <CheckBoxTwoToneIcon/> : <CheckBoxOutlineBlankTwoToneIcon/>}
        </div>
    )
}

const PlayingIcon = ({playing, ...rest}) => {
    return (
        <div className='icon' {...rest}>
            {playing ? <img width='28px' src={PlayingGif} alt="play song"/> : <PlayCircleFilledWhiteOutlinedIcon/>}
        </div>
    )
}

export {
    FavIcon,
    CheckedIcon,
    PlayingIcon
}
