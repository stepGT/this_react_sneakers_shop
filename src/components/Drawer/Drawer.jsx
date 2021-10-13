import React from "react";
import styles from '../Drawer/Drawer.module.scss';
import Info from '../../components/Info/Info'
import AppContext from "../../context";
import axios from "axios";

const Drawer = (props) => {
    const [isOrderComplete, setIsOrderComplete] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [orderID, setOrderID] = React.useState(null);
    const { cartSneakers, setCartSneakers } = React.useContext(AppContext);
    const totalPriceCart = cartSneakers.reduce((sum, obj) => obj.price + sum, 0);
    const onClickOrder = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.post(`${process.env.REACT_APP_MOCKAPI_URL}/orders`, {
                items: cartSneakers
            });
            for (let i = 0; i < cartSneakers.length; i++) {
                const item = cartSneakers[i];
                await axios.delete(`${process.env.REACT_APP_MOCKAPI_URL}/cart/${item.id}`);
            }
            setOrderID(data.id);
            setIsOrderComplete(true);
            setCartSneakers([]);
        } catch (error) {
            alert('Failed to create order! (' + error.message + ')');
        }
        setIsLoading(false);
    }
    return (
        <div className={styles.overlay}>
            <div className={styles.drawer}>
                <h2 className="mb-30 d-flex justify-between">Cart
                    <img onClick={props.onClose} className={styles.buttonRemove} alt="Button" src="/img/btn-remove.svg" />
                </h2>
                {
                    props.cartSneakers.length > 0 ? <>
                        <div className={styles.cartItems}>
                            {props.cartSneakers.map(item => {
                                return <div key={item.id} className={styles.cartItem}>
                                    <div className={styles.cartItemImage} style={{ backgroundImage: `url(${item.imageUrl})` }}></div>
                                    <div className="mr-20 flex">
                                        <p className="mb-5">{item.title}</p>
                                        <b>{item.price} &#8381;</b>
                                    </div>
                                    <img onClick={() => { props.onRemove(item.id) }} className={styles.buttonRemove} alt="Button" src="/img/btn-remove.svg" />
                                </div>
                            })}

                        </div>
                        <div className={styles.totalBlock}>
                            <ul>
                                <li>
                                    <span>Total:</span>
                                    <div></div>
                                    <b>{ totalPriceCart } &#8381;</b>
                                </li>
                                <li>
                                    <span>Tax 5%:</span>
                                    <div></div>
                                    <b>{ totalPriceCart / 100 * 5 } &#8381;</b>
                                </li>
                            </ul>
                            <button disabled={isLoading} onClick={onClickOrder} className={styles.greenBtn}>Checkout <img src="/img/arrow.svg" alt="Arrow" /></button>
                        </div>
                    </> : 
                    <Info
                        title={isOrderComplete ? "Order is processed!" : "Cart is empty"}
                        description={isOrderComplete ? `Your order #${orderID} has been completed!` : "Add at least one pair of sneakers to order."}
                        image={isOrderComplete ? "/img/complete-order.jpg" : "/img/empty-cart.jpg"}
                    />
                }
            </div>
        </div>
    );
}

export default Drawer;