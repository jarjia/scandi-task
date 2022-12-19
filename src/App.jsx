import React, {useState, useEffect} from 'react';
import AddPage from './AddPage';
import './App.css'
import Product from "./Products/Product";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [products, setProducts] = useState([])
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem('my-products'));
    if (savedProducts) {
      setProducts(savedProducts);
    }
  }, []);

  useEffect(() => { 
    localStorage.setItem('my-products', JSON.stringify(products))
  }, [products])

  const handleChange = () => {
    setIsSubscribed(prev => !prev)
  };

  const handleProducts = (data) => {
    setProducts(prev => {
      let newData = Object.assign(data, {isMarked: false})
      return [
        ...prev,
        newData
      ]
    })
  }

  const handleDelete = () => {
    setProducts(prev => prev.filter(item => item.isMarked !== true))
  }

  const handleCheckBoxes = () => {
    setProducts(prev =>  prev.map(item => {
      item.isMarked = false
      return item
    }))
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Product isSubscribed={isSubscribed} handleChange={handleChange} products={products} handleDelete={handleDelete}/>}/>
        <Route path='/add' element={<AddPage handleCheckBoxes={handleCheckBoxes} products={products} handleProducts={handleProducts}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
