import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';


const Data = () => {
    const [datas, setData] = useState([]);
    const [totalStockValue, setTotalStockValue] = useState(0);
    const [stock] = useState(useLocation().pathname.split('/')[2]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:8081/${stock}`);
                setData(res.data);
                calculateTotalStockValue(res.data); // Calculate total stock value
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [stock]); // Add stock to the dependency array

    // Function to calculate total stock value
    const calculateTotalStockValue = (data) => {
        const totalValue = data.reduce((accumulator, currentValue) => {
            return accumulator + (currentValue.in_stock * currentValue.buy_price);
        }, 0);
        setTotalStockValue(totalValue);
    };

    const getTotalProducts = () => datas.length;
    const getOutOfStockProducts = () => {
        return datas.filter(product => product.in_stock === 0).length;
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8081/${stock}/` + id); // Fix template string usage
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className='d-flex flex-column align-items-center'>
            <div className='w-50 bg-white rounded mb-4 p-3'>
                <div className='d-flex flex-row align-items-center'>
                <div className="mx-2 p-2 border border-primary">Total Stock Value in INR:{totalStockValue}</div>
                <div className="mx-2 p-2 border border-primary">Total Products: {getTotalProducts()}</div>
                <div className="mx-2 p-2 border border-primary">Out-of-Stock Products: {getOutOfStockProducts()}</div>
                </div>
                <h1 className="mb-4">Products In Inventory</h1>
                <table className='table table-hover table-bordered'>
                    <thead>
                        <tr>
                            <th>Product_id</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>In-Stock</th>
                            <th>Buy_Price</th>
                            <th>Sell_Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datas.map((data, i) => (
                            <tr key={i}>
                                <td>{data.product_id}</td>
                                <td>{data.name}</td>
                                <td>{data.category}</td>
                                <td>{data.in_stock}</td>
                                <td>{data.buy_price}</td>
                                <td>{data.sell_price}</td>
                                <td>
                                    <button className='btn btn-primary' style={{ textDecoration: 'none', boxShadow: 'none' }} onClick={() => handleDelete(data.product_id)}>Delete</button>
                                    <button className='btn btn-danger ms-2'><Link to={`/update/${stock}/${data.product_id}`} style={{ color: 'inherit', textDecoration: 'none' }}>Update</Link></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <h2>Add products</h2>
            <button className='btn btn-success' style={{ textDecoration: 'none', boxShadow: 'none' }}>
                <Link to={`/add/${stock}`}  style={{ color: 'inherit', textDecoration: 'none' }}>Add +</Link>
            </button>
        </div>
    );
};

export default Data;
