import './List.scss'

const PlayList = () => {

    return (
        <div className="listContainer">
            <div className="songList">
                <div className="list">
                    <div className="listRow title">Play List</div>
                    <div className="listRow">{JSON.stringify([])}</div>
                </div>
            </div>
        </div>
    )
}

export default PlayList