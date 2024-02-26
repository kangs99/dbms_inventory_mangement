import React, { useState } from 'react';
import { useLocation, useNavigate,Link } from 'react-router-dom';
import axios from 'axios';


const Add = () => {
  const [datas, setStock] = useState({
    product_id: null,
    name: "",
    category: "",
    in_stock: null,
    buy_price: null,
    sell_price: null,
  });
  const location = useLocation();
  const navigate = useNavigate();
  const brand = location.pathname.split('/')[2];

  const handleChange = (e) => {
    setStock((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:8081/${brand}`, datas);
    
    } catch (err) {
      console.log(err);
    }
  };

  console.log("FormData:", datas);

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form>
          <h2>Add product details</h2>
          <div className='mb-2'>
            <label htmlFor="product_id">Product ID</label>
            <input type="text" placeholder='Enter product ID' className='form-control' id="product_id" onChange={handleChange} name="product_id" />
          </div>
          <div className='mb-2'>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder='Enter name' className='form-control' id="name" onChange={handleChange} name="name" />
          </div>
          <div className='mb-2'>
            <label htmlFor="category">Category</label>
            <input type="text" placeholder='Enter category' className='form-control' id="category" onChange={handleChange} name="category" />
          </div>
          <div className='mb-2'>
            <label htmlFor="in_stock">In Stock</label>
            <input type="number" placeholder='Enter in stock quantity' className='form-control' id="in_stock" onChange={handleChange} name="in_stock" />
          </div>
          <div className='mb-2'>
            <label htmlFor="buy_price">Buy Price</label>
            <input type="number" placeholder='Enter buy price' className='form-control' id="buy_price" onChange={handleChange} name="buy_price" />
          </div>
          <div className='mb-2'>
            <label htmlFor="sell_price">Sell Price</label>
            <input type="number" placeholder='Enter sell price' className='form-control' id="sell_price" onChange={handleChange} name="sell_price" />
          </div>
          <button className='formbutton' onClick={handleClick}><Link to={`/data/${brand}`}>Add</Link></button>
        
        </form>
      </div>
    </div>
  );
};

export default Add;
