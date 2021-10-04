import {useState, useEffect} from 'react';
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";
import Search from "./components/Search/Search";

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [sneakers, setSneakers] = useState([]);
  const [cartSneakers, setCartSneakers] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const onAddToCart = (obj) => {
    setCartSneakers(prev => ([...prev, obj]))
  }
  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value)
  } 
  //
  useEffect(() => {
    fetch('https://615684b5e039a0001725aa2e.mockapi.io/items')
      .then(response => response.json())
      .then(data => setSneakers(data));
  }, []);
  return (
    <div className="wrapper clear">
      { isOpened && <Drawer cartSneakers={cartSneakers} onClose={() => setIsOpened(false)} /> }
      <Header onClickCard={() => setIsOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>{ searchValue ? `Search value: ${searchValue}` : 'All sneakers' }</h1>
          <Search onClickRemove={() => setSearchValue('')} searchValue={searchValue} onChangeEvent={onChangeSearchInput} />
        </div>
        <div className="d-flex flex-wrap">
          {sneakers.filter(item => item.title.toLowerCase().includes(searchValue)).map(el => <Card
            onPlus={(obj) => onAddToCart(obj)}
            key={el.id} 
            {...el} />)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
