import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const initialInp = {
  size: '',
  width: '',
  height: '',
  length: '',
  weight: ''
}

const AddPage = ({handleProducts, products}) => {
  const [sku, setSku] = useState('')
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [type, setType] = useState('')
  const [inp, setInp] = useState(initialInp)
  const [sameSku, setSameSku] = useState(false)

  const options = ['DVD', 'Furniture', 'Book']

  const navigate = useNavigate()

  useEffect(() => {
    let itemSku = products.find(item => item.sku === sku)
    if(itemSku === undefined) {
      setSameSku(false)
    }else {
      setSameSku(true)
    }
  }, [sku])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(sameSku);
    sameSku === false && handleProducts({
      sku: sku,
      name: name,
      price: price,
      type: ((type === 'DVD' && `Size: ${inp.size} MB`) || (type === 'Furniture' && `Dimensions: ${inp.height}x${inp.width}x${inp.length}`) || (type === 'Book' && `Weight: ${inp.weight} KG`))
    })
    sameSku === false && navigate('/')
  }

  const handleInputChange = (e) => {
    setInp({
      ...inp,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className='add-page' id='#product_form' onSubmit={handleSubmit}>
      <div className='product-div-1'>
        <h1 className='product-div-list'>Product Add</h1>
        <div>
          <button type='submit' className='add'>Save</button>
          <button type='button' className='delete' onClick={() => navigate('/')}>Cancel</button>
        </div>
      </div>
      <div className='form'>
        <div className='label-inp'>
          <label htmlFor='sku' style={{color: sameSku ? 'red' : 'black'}}>SKU</label>
          <input type='text' className={sameSku ? 'error-sku' : null} name='sku' id='sku' value={sku} onChange={e => setSku(e.target.value)} required autoComplete='off' autoFocus/>
        </div>
        {sameSku === true ? <span className='sku-error'>This sku already exists!</span> : null}
        <div className='label-inp'>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' id='name' value={name} onChange={e => setName(e.target.value)} required autoComplete='off'/>
        </div>
        <div className='label-inp'>
          <label htmlFor='price'>Price ($)</label>
          <input type='number' name='price' id='price' value={price} onChange={e => setPrice(e.target.value)} required autoComplete='off'/>
        </div>
        <div className='label-inp'>
          <label htmlFor='type'>Type Switcher</label>
          <select name='type' id='productType' onChange={e => setType(e.target.value)} required>
            <option value=''>Type Switcher</option>
            {options.map(item => {
              return <option key={item} value={item}>{item}</option>
            })}
          </select>
        </div>
        {type === 'DVD' && <>
        <div className='label-inp'>
          <label htmlFor='size'>Size (MB)</label>
          <input type='number' name='size' id='size' value={inp.size} onChange={handleInputChange} required/>
        </div>
        <strong>Please, provide size</strong>
        </>}
        {type === 'Furniture' && <>
        <div className='label-inp'>
          <div>
            <div>
              <label htmlFor='height'>Height (CM)</label>
              <input type='number' name='height' id='height' value={inp.height} onChange={handleInputChange} required/>
            </div>
            <div>
              <label htmlFor='width'>Width (CM)</label>
              <input type='number' name='width' id='width' value={inp.width} onChange={handleInputChange} required/>
            </div>
            <div>
              <label htmlFor='length'>Length (CM)</label>
              <input type='number' name='length' id='length' value={inp.length} onChange={handleInputChange} required/>
            </div>
            <strong>Please, provide dimensions</strong>
          </div>
        </div>
        </>}
        {type === 'Book' && <>
        <div className='label-inp'>
          <label htmlFor='weight'>Book (KG)</label>
          <input type='number' name='weight' id='weight' value={inp.weight} onChange={handleInputChange} required/>
        </div>
        <strong>Please, provide weight</strong>
        </>}
      </div>
      <div className='footer'>
        <h4>Scandiweb Test assignment</h4>
      </div>
    </form>
  )
}

export default AddPage