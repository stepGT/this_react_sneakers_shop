import Search from "../components/Search/Search";
import Card from "../components/Card/Card";

const Home = ({ sneakers, searchValue, setSearchValue, onChangeSearchInput, onAddToCart, onAddToFavorites, cartSneakers }) => {
    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>{searchValue ? `Search value: ${searchValue}` : 'All sneakers'}</h1>
                <Search onClickRemove={() => setSearchValue('')} searchValue={searchValue} onChangeEvent={onChangeSearchInput} />
            </div>
            <div className="d-flex flex-wrap">
                {sneakers.filter(item => item.title.toLowerCase().includes(searchValue)).map(el => <Card
                    onPlus={(obj) => onAddToCart(obj)}
                    onFavorites={(obj) => onAddToFavorites(obj)}
                    key={el.id}
                    addedToCart={cartSneakers.some(item => Number(item.id) === Number(el.id))}
                    {...el} />)
                }
            </div>
        </div>
    )
}

export default Home;