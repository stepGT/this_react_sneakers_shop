import React from "react";

const Card = () => {
    return (
        <div className="card">
            <img
                width={133}
                height={112}
                src="/img/sneakers/1.jpg"
                alt="Sneakers"
            />
            <h5>Мужские кроссовки NIKE Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Price</span>
                    <b>12999 &#8381;</b>
                </div>
                <button className="card__button">
                    <img width={11} height={11} alt="" src="/img/plus.svg" />
                </button>
            </div>
        </div>
    );
}

export default Card;