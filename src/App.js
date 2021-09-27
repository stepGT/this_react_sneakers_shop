function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="header__left">
          <img width={40} height={40} alt="Logo" src="/img/logo.png" />
          <div className="header__info">
            <h3>React Snickers</h3>
            <p>Shop best snickers</p>
          </div>
        </div>

        <ul className="header__right">
          <li>
          <img width={18} height={18} alt="Logo" src="/img/user.svg" />
            <span>1205 rub</span>
          </li>
          <li>
          <img width={18} height={18} alt="Logo" src="/img/cart.svg" />
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>All snickers</h1>
      </div>
    </div>
  );
}

export default App;
