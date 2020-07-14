import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'
import './App.css';
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import amazon from './screens/amazon.png'
import CartScreen from './screens/CartScreen';


function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">

          <div className="brand">
            <button onClick={openMenu}>
              &#9776;
            </button>
          </div>
          <Link to="/"><Image className="logo" src={amazon} style={{ width: "13rem", height: "4rem" }} /></Link>
          <div className="header-links">
            <a href="cart.html">Cart</a>
            <a href="signin.html">Sign In</a>
          </div>
        </header>
        <aside className="sidebar">
          <h3 style={{ color: "#707880" }}>SHOP BY CATEGORY</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>x</button>
          <ul>
            <li>
              <a href="index.html">Tuxedos</a>
            </li>

            <li>
              <a href="index.html">Classic Shirts</a>
            </li>

            <li>
              <a href="index.html">Ties</a>
            </li>
            <li>
              <a href="index.html">Accessories</a>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/" exact={true} component={HomeScreen} />

          </div>
        </main>
        <footer className="footer">All rights reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
