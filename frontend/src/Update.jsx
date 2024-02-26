import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Update = () => {
    const [formData, setFormData] = useState({
        product_id: "",
        name: "",
        category: "",
        in_stock: null,
        buy_price: null,
        sell_price: null,
    });
    const navigate = useNavigate();
    const location = useLocation();
    const productId = location.pathname.split('/')[3]; // Getting product ID from URL
    const brand = location.pathname.split('/')[2]; // Getting brand from URL

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:8081/${brand}/${productId}`);
                setFormData(res.data); // Set form data with fetched data
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [brand, productId]); // Trigger useEffect when brand or productId changes

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8081/${brand}/${productId}`, formData);
            navigate("/data"); // Navigate to data page after successful update
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='form'>
            <h1>Update the Product</h1>
            <input type='text' placeholder='Product ID' onChange={handleChange} name='product_id' value={formData.product_id} />
            <input type='text' placeholder='Name' onChange={handleChange} name='name' value={formData.name} />
            <input type='text' placeholder='Category' onChange={handleChange} name='category' value={formData.category} />
            <input type='number' placeholder='In Stock' onChange={handleChange} name='in_stock' value={formData.in_stock} />
            <input type='number' placeholder='Buy Price' onChange={handleChange} name='buy_price' value={formData.buy_price} />
            <input type='number' placeholder='Sell Price' onChange={handleChange} name='sell_price' value={formData.sell_price} />
            <button className='formbutton' onClick={handleSubmit}>Update</button>
        </div>
    );
};

export default Update;
