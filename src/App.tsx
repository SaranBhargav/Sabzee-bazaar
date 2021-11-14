import { useState } from 'react';
import Home from './home/home';
import Login from './login/login';
import Signup from './login/signup';
import Header from './header/header';
import ProductList from './productlist';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectedCategory } from './redux/actions/categoriesAction';

export type CartItemType = {
  id: string;
  name: string;
  imageURL: string;
  description: string;
  price: number;
  stock: number;
  sku: string;
  category: string;
  available?: number;
}

function App() {
  const [isOuth, setIsOuth] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  let originalStockcount = 50;

  //function to handle new item in cart 
  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      //if item already exist
      const isIteminCart = prev.find(item => item.name === clickedItem.name);
      if (isIteminCart) {
        return prev.map(item => item.name === clickedItem.name ? { ...item, available: originalStockcount - item.stock + 1, stock: item.stock - 1 } : item
        );
      }
      return [...prev, { ...clickedItem, available: 1, stock: clickedItem.stock - 1, differentCartItems: 1 }];
    });

    setCartCount(cartCount + 1);
  };

  ////function to handle delete item in cart
  const handleRemoveFromCart = (name: string) => {
    setCartItems(prev =>
      prev.reduce((ack, item) => {
        if (item.name === name) {
          if (item.available === 1) {
            return ack;
          }
          return [...ack, { ...item, available: originalStockcount - item.stock - 1, stock: item.stock + 1 }];
        } else {
          return [...ack, item,];
        }
      }, [] as CartItemType[])
    );
    setCartCount(cartCount - 1);
  };

  const Dispatch = useDispatch();
  const statusHandler = (obj: any): any => {
    const CategoryVal = obj.value;
    Dispatch(selectedCategory(CategoryVal));
  };

  const clickHandler = (e: any): any => {
    const CategoryVal = e.target.value;
    Dispatch(selectedCategory(CategoryVal));
  };

  const outhHandler = (e: any): any => {
    setIsOuth(true);
  };
  return (
    <>
      <div className="container">
        <Header
          cartItems={cartItems}
          cartCount={cartCount}
          handleAddToCart={handleAddToCart}
          handleRemoveFromCart={handleRemoveFromCart}
        />
        <Routes>
          <Route path="/" element={isOuth ? <Home clickHandler={clickHandler} /> : <Login outhHandler={outhHandler} />} />
          <Route path="/products" element={isOuth ? <ProductList cartItems={cartItems} statusHandler={statusHandler} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} /> : <Login outhHandler={outhHandler} />} />
          <Route path="/signup" element= {<Signup /> } />
        </Routes>
      </div>
      <footer>
        <p style={{ background: '#dddddd', width: '100%', margin: '5px', padding: '5px' }}>Copyright 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd</p>
      </footer>
    </>
  );
}

export default App;
