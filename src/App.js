import {useState, useEffect} from 'react';
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";
import axios from 'axios';
import Home from './pages/Home';
import { Route } from 'react-router';

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [sneakers, setSneakers] = useState([]);
  const [cartSneakers, setCartSneakers] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favorites, setFavorites] = useState([]);
  //
  const onAddToCart = (obj) => {
    axios.post(`${process.env.REACT_APP_MOCKAPI_URL}/cart`, obj).then(res => setCartSneakers(prev => ([...prev, obj])));
  }
  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value)
  } 
  const onRemoveItem = id => {
    axios.delete(`${process.env.REACT_APP_MOCKAPI_URL}/cart/${id}`);
    setCartSneakers(prev => prev.filter(item => item.id !== id));
  };
  const onAddToFavorites = obj => {
    axios.post(`${process.env.REACT_APP_MOCKAPI_URL}/favorites`, obj).then(setFavorites(prev => ([...prev, obj])));
  };
  //
  useEffect(() => {
      axios.get(`${process.env.REACT_APP_MOCKAPI_URL}/items`)
      .then(res => setSneakers(res.data))
      axios.get(`${process.env.REACT_APP_MOCKAPI_URL}/cart`)
      .then(res => setCartSneakers(res.data))
  }, []);
  return (
    <div className="wrapper clear">
      { isOpened && <Drawer cartSneakers={cartSneakers} onClose={() => setIsOpened(false)} onRemove={onRemoveItem} /> }
      <Header onClickCard={() => setIsOpened(true)} />
      <Route exact path="/">
        <Home
          sneakers={sneakers}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToCart={onAddToCart}
          onAddToFavorites={onAddToFavorites}
        />
      </Route>
    </div>
  );
}

export default App;
