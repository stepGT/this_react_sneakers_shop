import React from "react";
import styles from './Card.module.scss';
import ContentLoader from 'react-content-loader';

const Card = ({ id, title, imageUrl, price, onPlus, onFavorites, favorited = false, addedToCart, loading = false }) => {
    const [isAdded, setIsAdded] = React.useState(addedToCart);
    const [isFavorite, setIsFavorite] = React.useState(favorited);
    const onClickHandler = (e) => {
        setIsAdded(!isAdded);
        onPlus({ id, title, imageUrl, price });
    }
    const onClickFavorite = () => {
        onFavorites({ id, title, imageUrl, price });
        setIsFavorite(!isFavorite)
    }
    return (
        <div className={styles.card}>
            {
                loading ? <ContentLoader
                    speed={2}
                    width={155}
                    height={250}
                    viewBox="0 0 155 265"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb">
                    <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
                    <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
                    <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
                    <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
                    <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
                </ContentLoader> : (
                    <>
                        <div className={styles.favorite} onClick={() => { }}>
                            <img onClick={() => onClickFavorite({ id, title, imageUrl, price })} src={isFavorite ? '/img/liked.svg' : '/img/unliked.svg'} className="cu-p" alt={isFavorite ? 'Liked' : 'Unliked'} />
                        </div>
                        <img
                            width={133}
                            height={112}
                            src={imageUrl}
                            alt="Sneakers"
                        />
                        <h5>{title}</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Price</span>
                                <b>{price} &#8381;</b>
                            </div>
                            <img className={styles.plus} onClick={onClickHandler} alt="Plus" src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'} />
                        </div>
                    </>
                )
            }
        </div>
    );
}

export default Card;