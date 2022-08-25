import './List.scss'

const AllList = () => {

    return (
        <div className="listContainer">
            <div className="songList">
                <div className="list">
                    <div className="listRow title">All List</div>
                    <div className="listRow">{JSON.stringify([])}</div>
                </div>
            </div>
        </div>
    )
}

export default AllList