import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Search from "./components/Search";

function App() {
  return (
    <div className="wrapper clear">
      <Drawer/>
      <Header/>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All sneakers</h1>
          <Search/>
        </div>
        <div className="d-flex">
          <Card/>
        </div>
      </div>
    </div>
  );
}

export default App;
