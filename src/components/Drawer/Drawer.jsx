import React from "react";
import styles from './Drawer.module.scss';

const Drawer = (props) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.drawer}>
                <h2 className="mb-30 d-flex justify-between">Cart
                    <img onClick={props.onClose} className={styles.buttonRemove} alt="Button" src="/img/btn-remove.svg" />
                </h2>
                <div className={styles.cartItems}>
                    {props.cartSneakers.map(item => {
                        return <div className={styles.cartItem}>
                        <div className={styles.cartItemImage} style={{ backgroundImage: `url(${item.imageUrl})` }}></div>
                        <div className="mr-20 flex">
                            <p className="mb-5">{ item.title }</p>
                            <b>{ item.price } &#8381;</b>
                        </div>
                        <img className={styles.buttonRemove} alt="Button" src="/img/btn-remove.svg" />
                    </div>
                    })}
                    
                </div>
                <div className={styles.totalBlock}>
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
                    <button className={styles.greenBtn}>Checkout <img src="/img/arrow.svg" alt="Arrow" /></button>
                </div>
            </div>
        </div>
    );
}

export default Drawer;