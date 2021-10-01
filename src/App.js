import {useState, useEffect} from 'react';
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";
import Search from "./components/Search/Search";

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [sneakers, setSneakers] = useState([]);
  //
  useEffect(() => {
    fetch('https://615684b5e039a0001725aa2e.mockapi.io/items')
      .then(response => response.json())
      .then(data => setSneakers(data));
  }, []);
  return (
    <div className="wrapper clear">
      { isOpened && <Drawer onClose={() => setIsOpened(false)} /> }
      <Header onClickCard={() => setIsOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All sneakers</h1>
          <Search/>
        </div>
        <div className="d-flex flex-wrap">
          {sneakers.map(el => <Card key={el.id} {...el} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
