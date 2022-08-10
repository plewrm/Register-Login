import React, { useEffect, useState } from 'react';
import Header from './Header';
import { Link,useNavigate } from 'react-router-dom';
import {Table} from 'react-bootstrap'

const ProductList = () => {
  const [products, setProducts] = useState([]);
  // const navigate = useNavigate()



  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch('http://localhost:3000/Add', {
      headers: {
        authorization: JSON.parse(localStorage.getItem('token'))
      }
    });
    result = await result.json();
    setProducts(result);
  }

  const deleteProduct = async (id) => {
    // alert(id)
      console.log(id)
      let result = await fetch(`http://localhost:3000/Add/${id}`, {
          method: "Delete"
      });
      result = await result.json();
      if (result) {
          getProducts();
        alert("Data Deleted")

      }
  }

  // const updateProduct = async (id) => {
  //   alert(id)
  //     // console.warn(id)
  //     // let result = await fetch(`http://localhost:3000/Add/${id}`, {
  //     //     method: "PUT"
  //     // });
  //     // result = await result.json();
  //     // if (result) {
  //     //     getProducts();
  //     //   alert("Data Deleted")

  //     // }
  // }

  // const searchHandle = async (event)=>{
  //     let key = event.target.value;
  //     if(key){
  //         let result = await fetch(`http://localhost:3000/Add/${key}`);
  //         result = await result.json()
  //         if(result){
  //             setProducts(result)
  //         }
  //     }else{
  //         getProducts();
  //     }

  // }

  return (
    <div className="product-list">
      <Header/>
      <h3>Product List</h3>
 
      {/* <input type="" className='search-product-box' placeholder='Search Product'
            onChange={searchHandle}
             /> */}


      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S. No.</th>
            <th>Name</th>
            <th>Price</th>
            <th>File</th>
            <th>Description</th>
            <th>Opration</th>

          </tr>
        </thead>
        <tbody>
        {
        products.length > 0 ? products.map((item, index) =>
          <tr key={item.id}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td><img src={"http://localhost:3001/"+item.file}/></td>
            <td>{item.desc}</td> 
                <td><button onClick={() => deleteProduct(item.id)}>Delete</button>&nbsp;
                 <Link to={"/update/"+item.id}><button className='button1'  >Update</button></Link></td>

                
{/* <button className='button1' onClick={()=>navigate('/update/' + item.id)}  >Update</button></td> */}

            {/* <td></td> */}
            
            
            {/* <li>
                            <button onClick={() => deleteProduct(item._id)}>Delete</button>
                            <Link to={"/update/"+item._id} >Update </Link>
                            </li> */}

          </tr>
        )
          : <h1>No Result Found</h1>
      }

        </tbody>
      </Table>

             
    
    </div>
  )
}

export default ProductList;
