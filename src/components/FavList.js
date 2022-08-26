import './List.scss'

const FavList = () => {

    return (
        <div className="listContainer">
            <div className="songList">
                <div className="list">
                    <div className="listRow title">Fav List</div>
                    <div className="listRow">{JSON.stringify([])}</div>
                </div>
            </div>
        </div>
    )
}

export default FavList