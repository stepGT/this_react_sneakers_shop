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
        <h1>All snickers</h1>
      </div>
    </div>
  );
}

export default App;
