import React, { useEffect, useState } from 'react';
import Header from './Header';
import Button from 'react-bootstrap/Button';
// import { withRouter } from 'react-router-dom'

import './App.css';
// import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

const UpdateProduct = () => {
    // const [data,setData]=useState();
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [file, setFile] = React.useState('');
    const [desc, setDesc] = React.useState('');
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getProductDetails();
    }, [])

    const getProductDetails = async () => {
        console.warn(params)
        let result = await fetch(`http://localhost:3000/Add/${params.id}`);
        result = await result.json();
        setName(result.name);
        setPrice(result.price);
        setFile(result.file);
        setDesc(result.desc)
        // setData(result)
    }

    const updateProduct = async () => {
        console.warn(name, price, file, desc)
        let result = await fetch(`http://localhost:3000/Add/${params.id}`, {
            method: 'Put',
            body: JSON.stringify({ name, price, file, desc }),
            headers: {
                'Content-Type': 'Application/json'
            }
        });
        result = await result.json();
        if (result) {
            navigate('/')
        alert("Data Updated")

        }

    }

    return (
        <div className='product'>
            <h1>Update Product</h1>
            <>
            <div className="col-sm-6  offset-sm-3">

            <input type="text" placeholder='Enter product name' className='inputBox'
                value={name} onChange={(e) => { setName(e.target.value) }}
            /><br/><br/>

            <input type="text" placeholder='Enter product price' className='inputBox'
                value={price} onChange={(e) => { setPrice(e.target.value) }}
            /><br/><br/>

            <input type="file" placeholder='Enter product category' className='inputBox'
                 onChange={(e) => { setFile(e.target.files[0]) }}
            /><br/><br/>

            <img style={{width:100}} src={"http://localhost:3000/Add/"+file[0]}/><br/><br/>

            <input type="text" placeholder='Enter product company' className='inputBox'
                value={desc} onChange={(e) => { setDesc(e.target.value) }}
            /><br/><br/>


            {/* <button onClick={updateProduct} className='secondary'>Update Product</button> */}
            <Button onClick={updateProduct} className='button1'>Update Product</Button>
            </div>
            </>
        </div>
    )
}
export default UpdateProduct;