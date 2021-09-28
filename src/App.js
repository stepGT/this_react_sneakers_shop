function App() {
  return (
    <div className="wrapper clear">
      <div className="wrapper__overlay">
        <div className="wrapper__drawer">
          <h2>Cart</h2>
          <div className="wrapper__drawer_cart_item d-flex">
            <img
              className="mr-20"
              width={70}
              height={70}
              alt="Sneakers"
              src="/img/sneakers/1.jpg"
            />
            <div className="mr-20">
              <p className="mb-5">Мужские кроссовки NIKE Blazer Mid Suede</p>
              <b>12999 &#8381;</b>
            </div>
            <img className="wrapper__drawer_cart_item_button" alt="Button" src="/img/btn-remove.svg" />
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
          <div className="card">
            <div className="content__card_favorite">
              <img src="/img/unliked.svg" alt="Liked" />
            </div>
            <img
              width={133}
              height={112}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
            />
            <h5>Мужские кроссовки NIKE Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price</span>
                <b>12999 &#8381;</b>
              </div>
              <button className="card__button">
                <img width={11} height={11} alt="" src="/img/plus.svg" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/2.jpg"
              alt="Sneakers"
            />
            <h5>Мужские кроссовки NIKE Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price</span>
                <b>12999 &#8381;</b>
              </div>
              <button className="card__button">
                <img width={11} height={11} alt="" src="/img/plus.svg" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/3.jpg"
              alt="Sneakers"
            />
            <h5>Мужские кроссовки NIKE Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price</span>
                <b>12999 &#8381;</b>
              </div>
              <button className="card__button">
                <img width={11} height={11} alt="" src="/img/plus.svg" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/4.jpg"
              alt="Sneakers"
            />
            <h5>Мужские кроссовки NIKE Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price</span>
                <b>12999 &#8381;</b>
              </div>
              <button className="card__button">
                <img width={11} height={11} alt="" src="/img/plus.svg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
