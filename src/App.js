import {useState, useEffect} from 'react';
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";
import axios from 'axios';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import { Route } from 'react-router';

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [sneakers, setSneakers] = useState([]);
  const [cartSneakers, setCartSneakers] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favorites, setFavorites] = useState([]);
  //
  const onAddToCart = obj => {
    try {
      if (cartSneakers.find(item => Number(item.id) === Number(obj.id))) {
        setCartSneakers(prev => prev.filter(i => Number(i.id) !== Number(obj.id)));
        axios.delete(`${process.env.REACT_APP_MOCKAPI_URL}/cart/${obj.id}`);
      } else {
        axios.post(`${process.env.REACT_APP_MOCKAPI_URL}/cart`, obj);
        setCartSneakers((prev) => [...prev, obj]);
      }
    } catch (e) {
      console.error("Error add to cart: ", e.message);
    }
  };
  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value)
  } 
  const onRemoveItem = id => {
    axios.delete(`${process.env.REACT_APP_MOCKAPI_URL}/cart/${id}`);
    setCartSneakers(prev => prev.filter(item => item.id !== id));
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
      axios.get(`${process.env.REACT_APP_MOCKAPI_URL}/items`)
      .then(res => setSneakers(res.data))
      axios.get(`${process.env.REACT_APP_MOCKAPI_URL}/cart`)
      .then(res => setCartSneakers(res.data))
      axios.get(`${process.env.REACT_APP_MOCKAPI_URL}/favorites`)
      .then(res => setFavorites(res.data))
  }, []);
  return (
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
        />
      </Route>
      <Route exact path="/favorites">
        <Favorites onFavorites={onAddToFavorites} favorited={true} favorites={favorites} />
      </Route>
    </div>
  );
}

export default App;
