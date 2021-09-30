import Card from "./components/Card";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";
import Search from "./components/Search/Search";

const sneakers = [
  {
    id: 1,
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12999,
    imageUrl: "img/sneakers/1.jpg",
  },
  {
    id: 2,
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 15600,
    imageUrl: "img/sneakers/2.jpg",
  },
  {
    id: 3,
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 8499,
    imageUrl: "img/sneakers/3.jpg",
  },
  {
    id: 4,
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: 8999,
    imageUrl: "img/sneakers/4.jpg",
  }
];

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
          {sneakers.map(el => <Card key={el.id} {...el} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
