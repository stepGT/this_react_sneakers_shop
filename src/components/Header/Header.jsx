import React from "react";
import styles from './Header.module.scss';
import { Link } from "react-router-dom";

const Header = (props) => {
    return <header className={styles.header}>
        <div className={styles.left}>
            <Link to="/">
                <img className="mr-15" width={40} height={40} alt="Logo" src="/img/logo.png" />
            </Link>
            <div>
                <h3 className="text-uppercase">React Snickers</h3>
                <p className="opacity-5">Shop best snickers</p>
            </div>
        </div>

        <ul className={styles.right}>
            <li onClick={props.onClickCard} className="mr-30 cu-p">
                <img className="mr-15" width={18} height={18} alt="Logo" src="/img/user.svg" />
                <span>1205 rub</span>
            </li>
            <li className="mr-20 cu-p">
                <Link to="/favorites">
                    <img width={18} height={18} alt="Favorites" src="/img/heart.svg" />
                </Link>
            </li>
            <li>
                <img width={18} height={18} alt="Logo" src="/img/cart.svg" />
            </li>
        </ul>
    </header>
}

export default Header;