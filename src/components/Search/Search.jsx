import React from "react";
import styles from './Search.module.scss';

const Search = () => {
    return <div className={styles.searchBlock}>
        <img src="/img/search.svg" alt="Search" />
        <input placeholder="Search..." type="text" />
    </div>
}

export default Search;