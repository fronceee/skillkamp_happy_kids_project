import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Layout from "./components/Layout";
import Home from "./containers/Home";
import OurStory from "./containers/OurStory";
import Contacts from "./containers/Contacts";
import Policy from "./containers/Policy";
import FAQ from "./containers/FAQ";
import ShopCollection from "./containers/ShopCollection";
import Product from "./containers/Product";
import Cart from "./containers/Cart";
import CartProvider from "./contexts/cartContext";
import Transaction from "./containers/Transaction";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="our-story" element={<OurStory />} />
              <Route path="contacts" element={<Contacts />} />
              <Route path="policy" element={<Policy />} />
              <Route path="faq" element={<FAQ />} />
              <Route path="shop-collection" element={<ShopCollection />} />
              <Route path="cart" element={<Cart />} />
              <Route path="transaction" element={<Transaction />} />
              <Route path="product">
                <Route path=":id" element={<Product />} />
              </Route>
            </Route>
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
