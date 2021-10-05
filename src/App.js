import {useState, useEffect} from 'react';
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";
import Search from "./components/Search/Search";
import axios from 'axios';

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
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>{ searchValue ? `Search value: ${searchValue}` : 'All sneakers' }</h1>
          <Search onClickRemove={() => setSearchValue('')} searchValue={searchValue} onChangeEvent={onChangeSearchInput} />
        </div>
        <div className="d-flex flex-wrap">
          {sneakers.filter(item => item.title.toLowerCase().includes(searchValue)).map(el => <Card
            onPlus={(obj) => onAddToCart(obj)}
            onFavorites={(obj) => onAddToFavorites(obj)}
            key={el.id} 
            {...el} />)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
