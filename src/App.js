function App() {
  return (
    <div className="wrapper clear">
      <header className="header d-flex justify-between align-center p-40">
        <div className="header__left d-flex align-center">
          <img className="mr-15" width={40} height={40} alt="Logo" src="/img/logo.png" />
          <div className="header__info">
            <h3 className="text-uppercase">React Snickers</h3>
            <p>Shop best snickers</p>
          </div>
        </div>

        <ul className="header__right d-flex">
          <li className="mr-30">
          <img width={18} height={18} alt="Logo" src="/img/user.svg" />
            <span>1205 rub</span>
          </li>
          <li>
          <img width={18} height={18} alt="Logo" src="/img/cart.svg" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">All sneakers</h1>
        <div className="d-flex">
          <div className="card">
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
