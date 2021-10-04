import React from "react";
import styles from './Search.module.scss';

const Search = ({ searchValue, onChangeEvent, onClickRemove }) => {
    return <div className={styles.searchBlock}>
        <img src="/img/search.svg" alt="Search" />
        {searchValue && <img onClick={onClickRemove} className={styles.clear} src="/img/btn-remove.svg" alt="Remove" />}
        <input value={searchValue} onChange={onChangeEvent} placeholder="Search..." type="text" />
    </div>
}

export default Search;