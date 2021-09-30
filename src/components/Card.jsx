import React from "react";

const Card = (props) => {
    return (
        <div className="card">
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
                <button className="card__button">
                    <img width={11} height={11} alt="" src="/img/plus.svg" />
                </button>
            </div>
        </div>
    );
}

export default Card;