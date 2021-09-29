import Card from "./components/Card";

function App() {
  return (
    <div className="wrapper clear">
      <div style={{ display: 'none' }} className="wrapper__overlay">
        <div className="wrapper__drawer">
          <h2 className="mb-30 d-flex justify-between">Cart
            <img className="wrapper__drawer_cart_item_button" alt="Button" src="/img/btn-remove.svg" />
          </h2>
          <div className="wrapper__drawer_cart_items">
            <div className="wrapper__drawer_cart_item d-flex mb-20">
              <div className="wrapper__drawer_cart_item_image" style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}></div>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские кроссовки NIKE Blazer Mid Suede</p>
                <b>12999 &#8381;</b>
              </div>
              <img className="wrapper__drawer_cart_item_button" alt="Button" src="/img/btn-remove.svg" />
            </div>
            <div className="wrapper__drawer_cart_item d-flex">
              <div className="wrapper__drawer_cart_item_image" style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}></div>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские кроссовки NIKE Blazer Mid Suede</p>
                <b>12999 &#8381;</b>
              </div>
              <img className="wrapper__drawer_cart_item_button" alt="Button" src="/img/btn-remove.svg" />
            </div>
          </div>
          <div className="wrapper__drawer_cart_total_block">
            <ul>
              <li>
                <span>Total:</span>
                <div></div>
                <b>21 456 &#8381;</b>
              </li>
              <li>
                <span>Tax 5%:</span>
                <div></div>
                <b>1070 &#8381;</b>
              </li>
            </ul>
            <button className="green_btn">Checkout <img src="/img/arrow.svg" alt="Arrow" /></button>
          </div>
        </div>
      </div>
      <header className="header d-flex justify-between align-center p-40">
        <div className="header__left d-flex align-center">
          <img className="mr-15" width={40} height={40} alt="Logo" src="/img/logo.png" />
          <div className="header__info">
            <h3 className="text-uppercase">React Snickers</h3>
            <p className="opacity-5">Shop best snickers</p>
          </div>
        </div>

        <ul className="header__right d-flex">
          <li className="mr-30">
            <img className="mr-15" width={18} height={18} alt="Logo" src="/img/user.svg" />
            <span>1205 rub</span>
          </li>
          <li>
            <img width={18} height={18} alt="Logo" src="/img/cart.svg" />
          </li>
        </ul>
      </header>
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
