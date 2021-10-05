import Card from "../components/Card/Card";

const Favorites = ({ favorites }) => {
    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>Favorites sneakers</h1>
            </div>
            <div className="d-flex flex-wrap">
                {
                    favorites.map((el) => <Card {...el} />)
                }
            </div>
        </div>
    )
}

export default Favorites;