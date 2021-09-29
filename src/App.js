import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  return (
    <div className="wrapper clear">
      <Drawer/>
      <Header/>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All sneakers</h1>
          <div className="content__search_block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Search..." type="text" />
          </div>
        </div>
        <div className="d-flex">
          <Card/>
        </div>
      </div>
    </div>
  );
}

export default App;
