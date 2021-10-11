import React from 'react';
import styles from '../Drawer/Drawer.module.scss';
import AppContext from '../../context'

const Info = ({ title, image, description }) => {
    const { setIsOpened } = React.useContext(AppContext);
    return (
        <div className={`${styles.cartEmpty} d-flex align-center justify-center flex-column flex`}>
            <img className="mb-20" width="120px" height="120px" src={image} alt="" />
            <h2>{ title }</h2>
            <p className="opacity-6">{ description }</p>
            <button onClick={()=>{setIsOpened(false)}} className={`${styles.greenButton} ${styles.greenBtn}`}>
                <img src="/img/arrow.svg" alt="Arrow" />
                Back
            </button>
        </div>
    )
}

export default Info;