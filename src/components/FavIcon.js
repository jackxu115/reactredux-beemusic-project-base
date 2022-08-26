import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';

import CheckBoxOutlineBlankTwoToneIcon from '@mui/icons-material/CheckBoxOutlineBlankTwoTone';
import CheckBoxTwoToneIcon from '@mui/icons-material/CheckBoxTwoTone';


const FavIcon = ({liked}) => {
    return (
        <div className='icon'>
            {liked ? <FavoriteTwoToneIcon/> : <FavoriteBorderTwoToneIcon/>}
        </div>
    )
}

const CheckedIcon = ({checked}) => {
    return (
        <div className='icon'>
            {checked ? <CheckBoxTwoToneIcon/> : <CheckBoxOutlineBlankTwoToneIcon/>}
        </div>
    )
}

const PlayingIcon = ({playing}) => {
    return (
        <div className='icon'>
            {playing ? <img width='28px' src='img/play.gif'/> : <></>}
        </div>
    )
}

export {
    FavIcon,
    CheckedIcon,
    PlayingIcon
}
