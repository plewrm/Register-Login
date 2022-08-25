// import { Alert, Snackbar, SnackbarContent } from '@mui/material'
// import AlertMessage from './Alert'

import { useState, useEffect } from 'react';
import React from 'react';
import Header from './Header';
import './App.css';
import {useNavigate } from 'react-router-dom';
// import React from 'react';

const AddProduct = () => {
    // const [loading,setLoading]= React.useState(false)
    // const uploadImage = async e=>{
        //     const files= e.target.files
        //     const data= new FormData()
    //     data.append('file',files[0])
    //     data.append('Upload_present', 'darwin')
    //     setLoading(true)
    //     const res= await fetch('http://localhost:3000/Add',
    //     {
        //         method: 'POST',
        //         body: data
        
        //     })
        //     const file =await res.json()
    //     setFile(file.secure_url)
    //     setLoading(false)
    // }
    const [file, setFile] = React.useState('');
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [desc, setDesc] = React.useState('');
    const [error, setError] = React.useState(false);
    // const [users, setUsers] = useState([]);
    const [products, setProducts]=useState([])
    // const [fileName, setFileName] = useState("");
    // const navigate = useNavigate();

    // const saveFile = (e) => {
    //     setFile(e.target.files[0]);
    //     setFileName(e.target.files[0].name);
    //   };
//  function addProduct ()
//     {
//         const formData = new FormData();
//         formData.append("file",file);
//         formData.append("name",name);
//         formData.append("price",price);
//         formData.append("desc",desc);
//       const res=  fetch("http://localhost:3000/Add",
//       {
//         method:'POST',
//         body: formData
//       })
      
//     }


const getProducts = async () => {
    let result = await fetch('http://localhost:3000/Add', {
      headers: {
        authorization: JSON.parse(localStorage.getItem('token'))
      }
    });
    result = await result.json();
    setProducts(result);
  }
    useEffect(() => {
        getProducts();
      }, []);
    const addProduct = async() => {
        // fetch("http://localhost:3000/Add", {
        //     method: "POST",
        //     body: JSON.stringify({
        //         name: name,
        //         price: price,
        //         file: file,
        //         desc: desc
        //     }),
        //     headers: {
        //         Action: "Application/json",
        //         "content-type": "Application/json"
        //     }
        // })
        //     .then((res) => res.json())
        //     .then((Add) => console.log(Add))

        /* */

        let result = await fetch("http://localhost:3000/Add", {
            method: "post",
            body: JSON.stringify({ name, price, file, desc }),
            headers: {
                "Content-type": "application/json"
            }
        });
        result = await result.json();
        // console.warn(result)
        if(result){
            getProducts();
            alert("Data Add Succesfully...!")
        }
    };

    return (
        <>
        <div className='product'>
            <Header />
            <h1>Add Product</h1>
            {/* <div className="col-sm-6  offset-sm-3"> */}
    <div className='pm-card-form'>


                <input type="text" placeholder='Enter product name' className='pm-form-control'
                    value={name} onChange={(e) => { setName(e.target.value) }}
                /><br /><br />
                {error && !name && <span className='invalid-input'>Enter valid name</span>}

                <input type="text" placeholder='Enter product price' className='pm-form-control'
                    value={price} onChange={(e) => { setPrice(e.target.value) }}
                /><br /><br />
                {error && !price && <span className='invalid-input'>Enter valid price</span>} 

                <input type="file" placeholder='Upload an Image' 
                // className='inputBox'
                className='pm-form-control'
                    onChange={(e) => { setFile(e.target.files[0]) }}
                /><br /><br />
                {error && !file && <span className='invalid-input'>Enter valid category</span>}

                {/* <input type="file" onChange={saveFile} /> */}

{/* <input type="file" placeholder='Upload an Image' className='inputBox'
                     onChange={uploadImage}
                /><br /><br />
                {error && !file && <span className='invalid-input'>Enter valid category</span>} */}


                <input type="text" placeholder='Enter product company' className='                pm-form-control
'
                    value={desc} onChange={(e) => { setDesc(e.target.value) }}
                /><br /><br />
                {error && !desc && <span className='invalid-input'>Enter valid company</span>}


                <button onClick={addProduct} className='button11'>Add Product</button>
                {/* <button onClick={addProduct} className='pm-btn-primary'>Add Product</button> */}
                
            </div>
            

           {/* {
            loading ?(
                <h3> Loading...</h3>
            ):
           (

               <img src={file} style={{width:'300px'}}/>
           )
           } */}
        </div>
        
        </>
    )
}

export default AddProduct;
