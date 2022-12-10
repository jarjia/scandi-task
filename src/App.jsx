import React, {useState} from 'react';
import AddPage from './AddPage';
import './App.css'
import Product from "./Products/Product";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [products, setProducts] = useState([])

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
    console.log(products);
    setProducts(prev => prev.filter(item => item.isMarked !== true))
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Product products={products} handleDelete={handleDelete}/>}/>
        <Route path='/add' element={<AddPage products={products} handleProducts={handleProducts}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
