import {useState, useEffect} from 'react';
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";
import axios from 'axios';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import { Route } from 'react-router';
import AppContext from './context';
import Orders from './pages/Orders';

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [sneakers, setSneakers] = useState([]);
  const [cartSneakers, setCartSneakers] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //
  const onAddToCart = async obj => {
    try {
      const findItem = cartSneakers.find(item => Number(item.pid) === Number(obj.id));
      if (findItem) {
        setCartSneakers(prev => prev.filter(i => Number(i.pid) !== Number(obj.id)));
        await axios.delete(`${process.env.REACT_APP_MOCKAPI_URL}/cart/${findItem.id}`);
      } else {
        const { data } = await axios.post(`${process.env.REACT_APP_MOCKAPI_URL}/cart`, obj);
        setCartSneakers((prev) => [...prev, data]);
      }
    } catch (e) {
      console.error("Error add to cart: ", e.message);
    }
  };
  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value)
  } 
  const onRemoveItem = async id => {
    try {
      await axios.delete(`${process.env.REACT_APP_MOCKAPI_URL}/cart/${id}`);
      setCartSneakers(prev => prev.filter(item => Number(item.id) !== Number(id)));
    } catch (error) {
      alert('Error while deleting from cart!', error);
    }
  };
  const onAddToFavorites = async (obj) => {
    try {
      //
      if (favorites.find((favorites) => favorites.id === obj.id)) {
        axios.delete(
          `${process.env.REACT_APP_MOCKAPI_URL}/favorites/${obj.id}`
        );
      } else {
        const { data } = await axios.post(
          `${process.env.REACT_APP_MOCKAPI_URL}/favorites`,
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (e) {
      console.error("Error:", e.message);
    }
  };
  //
  useEffect(() => {
    async function fetchData() {
      try {
        const [cartData, favoritesData, itemsData] = await Promise.all([
          axios.get( `${process.env.REACT_APP_MOCKAPI_URL}/cart`),
          axios.get( `${process.env.REACT_APP_MOCKAPI_URL}/favorites`),
          axios.get( `${process.env.REACT_APP_MOCKAPI_URL}/items`)
        ]);
        setIsLoading(false);
        // Save to state
        setCartSneakers(cartData.data);
        setFavorites(favoritesData.data);
        setSneakers(itemsData.data);
      } catch (error) {
        alert('Error fetching data!', error)
      }
    }
    fetchData();
  }, []);
  const isItemAdded = (id) => {
    return cartSneakers.some(obj => Number(obj.pid) === Number(id))
  }
  return (
    <AppContext.Provider value={{ sneakers, cartSneakers, favorites, isItemAdded, onAddToFavorites, setIsOpened, setCartSneakers, onAddToCart }}>
      <div className="wrapper clear">
        { isOpened && <Drawer cartSneakers={cartSneakers} onClose={() => setIsOpened(false)} onRemove={onRemoveItem} /> }
        <Header onClickCard={() => setIsOpened(true)} />
        <Route exact path="/">
          <Home
            cartSneakers={cartSneakers}
            sneakers={sneakers}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onChangeSearchInput={onChangeSearchInput}
            onAddToCart={onAddToCart}
            onAddToFavorites={onAddToFavorites}
            isLoading={isLoading}
          />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/orders">
          <Orders />
        </Route>
      </div>
    </AppContext.Provider>
  );
}

export default App;
