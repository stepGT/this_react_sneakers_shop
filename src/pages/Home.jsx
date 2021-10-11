import Search from "../components/Search/Search";
import Card from "../components/Card/Card";

const Home = ({ sneakers, searchValue, setSearchValue, onChangeSearchInput, onAddToCart, onAddToFavorites, cartSneakers, isLoading }) => {
    const renderItems = () => {
        const filteredItems = sneakers.filter(item => item.title.toLowerCase().includes(searchValue));

        return (isLoading ? [...Array(10)] : filteredItems).map((el, index) => <Card
            onPlus={(obj) => onAddToCart(obj)}
            onFavorites={(obj) => onAddToFavorites(obj)}
            key={index}
            addedToCart={cartSneakers.some(item => Number(item.id) === Number(el.id))}
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