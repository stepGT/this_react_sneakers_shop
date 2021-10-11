import React from 'react';
import Card from "../components/Card/Card";
import AppContext from '../context';

const Favorites = () => {
    const { favorites, onAddToFavorites } = React.useContext(AppContext);
    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>Favorites sneakers</h1>
            </div>
            <div className="d-flex flex-wrap">
                {
                    favorites.map((el) => <Card onFavorites={onAddToFavorites} key={el.id} favorited={true} {...el} />)
                }
            </div>
        </div>
    )
}

export default Favorites;