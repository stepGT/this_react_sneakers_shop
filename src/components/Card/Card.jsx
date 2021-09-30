import React from "react";
import styles from './Card.module.scss';

const Card = (props) => {
    return (
        <div className={styles.card}>
            <img
                width={133}
                height={112}
                src={props.imageUrl}
                alt="Sneakers"
            />
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Price</span>
                    <b>{props.price} &#8381;</b>
                </div>
                <button className={styles.cardButton}>
                    <img width={11} height={11} alt="" src="/img/plus.svg" />
                </button>
            </div>
        </div>
    );
}

export default Card;