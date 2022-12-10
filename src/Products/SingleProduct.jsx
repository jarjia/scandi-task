import React from 'react'

const SingleProduct = ({item, handleChange, isSubscribed}) => {
  return (
    <>
        <div className='product' key={item.sku}>
            <input 
                type="checkbox"
                id="subscribe"
                name="subscribe"
                value={isSubscribed}
                onChange={() => {
                  item.isMarked = !item.isMarked
                  handleChange()
                }}
                className='delete-checkbox'
            />
            <div className='info'>
                <span>{item.sku}</span>
                <span>{item.name}</span>
                <span>{item.price} $</span>
                <span>{item.type}</span>
            </div>
        </div>
    </>
  )
}

export default SingleProduct