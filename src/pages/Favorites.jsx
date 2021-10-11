import React from 'react';
import Card from "../components/Card/Card";
import AppContext from '../context';

const Favorites = ({ favorited, onFavorites }) => {
    const { favorites } = React.useContext(AppContext);
    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>Favorites sneakers</h1>
            </div>
            <div className="d-flex flex-wrap">
                {
                    favorites.map((el) => <Card onFavorites={onFavorites} key={el.id} favorited={favorited} {...el} />)
                }
            </div>
        </div>
    )
}

export default Favorites;