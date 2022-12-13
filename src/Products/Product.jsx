import React from 'react'
import SingleProduct from './SingleProduct'
import { useNavigate } from 'react-router-dom'

const Product = ({products, handleDelete, isSubscribed, handleChange}) => {
  const navigate = useNavigate()

  return (
    <>
      <div className='product-div-1'>
        <h1 className='product-div-list'>Product List</h1>
        <div>
          <button type='button' className='add' onClick={() => navigate('/add')}>ADD</button>
          <button type='button' className='delete' id='delete-product-btn' onClick={handleDelete}>MASS DELETE</button>
        </div>
      </div>
      <div className='product-div'>
          <div className='product-list-div'>
            <div className='list'>
            {products.map(item => {
              return <SingleProduct key={item.sku} isSubscribed={isSubscribed} handleChange={handleChange} item={item}/>
            })}
            </div>
          </div>
      </div>
      <div className='footer'>
            <h4>Scandiweb Test assignment</h4>
          </div>
    </>
  )
}

export default Product