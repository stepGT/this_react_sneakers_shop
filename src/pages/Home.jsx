import { useContext } from 'react'
import Search from "../components/Search/Search";
import Card from "../components/Card/Card";
import AppContext from '../context';

const Home = ({ sneakers, searchValue, setSearchValue, onChangeSearchInput, onAddToCart, onAddToFavorites, cartSneakers, isLoading }) => {
    const { isItemAdded } = useContext(AppContext);
    const renderItems = () => {
        const filteredItems = sneakers.filter(item => item.title.toLowerCase().includes(searchValue));

        return (isLoading ? [...Array(10)] : filteredItems).map((el, index) => <Card
            onPlus={(obj) => onAddToCart(obj)}
            onFavorites={(obj) => onAddToFavorites(obj)}
            key={index}
            addedToCart={el && isItemAdded(el.id)}
            loading={isLoading}
            {...el} />)
    };
    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>{searchValue ? `Search value: ${searchValue}` : 'All sneakers'}</h1>
                <Search onClickRemove={() => setSearchValue('')} searchValue={searchValue} onChangeEvent={onChangeSearchInput} />
            </div>
            <div className="d-flex flex-wrap">
                {renderItems()}
            </div>
        </div>
    )
}

export default Home;