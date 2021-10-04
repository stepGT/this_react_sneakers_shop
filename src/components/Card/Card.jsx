import React from "react";
import styles from './Card.module.scss';

const Card = ({ id, title, imageUrl, price, onPlus }) => {
    const [isAdded, setIsAdded] = React.useState(false);
    const onClickHandler = (e) => {
        setIsAdded(!isAdded);
        onPlus({ id, title, imageUrl, price });
    }
    return (
        <div className={styles.card}>
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
                <img className={styles.plus} onClick={onClickHandler} alt="Plus" src={isAdded ?'/img/btn-checked.svg' : '/img/btn-plus.svg'} />
            </div>
        </div>
    );
}

export default Card;