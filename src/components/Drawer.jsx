import React from "react";

const Drawer = () => {
    return (
        <div style={{ display: 'block' }} className="wrapper__overlay">
            <div className="wrapper__drawer">
                <h2 className="mb-30 d-flex justify-between">Cart
                    <img className="wrapper__drawer_cart_item_button" alt="Button" src="/img/btn-remove.svg" />
                </h2>
                <div className="wrapper__drawer_cart_items">
                    <div className="wrapper__drawer_cart_item d-flex mb-20">
                        <div className="wrapper__drawer_cart_item_image" style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}></div>
                        <div className="mr-20 flex">
                            <p className="mb-5">Мужские кроссовки NIKE Blazer Mid Suede</p>
                            <b>12999 &#8381;</b>
                        </div>
                        <img className="wrapper__drawer_cart_item_button" alt="Button" src="/img/btn-remove.svg" />
                    </div>
                    <div className="wrapper__drawer_cart_item d-flex">
                        <div className="wrapper__drawer_cart_item_image" style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}></div>
                        <div className="mr-20 flex">
                            <p className="mb-5">Мужские кроссовки NIKE Blazer Mid Suede</p>
                            <b>12999 &#8381;</b>
                        </div>
                        <img className="wrapper__drawer_cart_item_button" alt="Button" src="/img/btn-remove.svg" />
                    </div>
                </div>
                <div className="wrapper__drawer_cart_total_block">
                    <ul>
                        <li>
                            <span>Total:</span>
                            <div></div>
                            <b>21 456 &#8381;</b>
                        </li>
                        <li>
                            <span>Tax 5%:</span>
                            <div></div>
                            <b>1070 &#8381;</b>
                        </li>
                    </ul>
                    <button className="green_btn">Checkout <img src="/img/arrow.svg" alt="Arrow" /></button>
                </div>
            </div>
        </div>
    );
}

export default Drawer;