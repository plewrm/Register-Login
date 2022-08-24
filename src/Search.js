import React, {useState,useEffect} from 'react'
import Header from './Header'
 
import {Table} from 'react-bootstrap'
// import Breadcrumb from './Breadcrumb/Breadcrumb'


function Search() {
  const [products, setProducts] = useState([]);
//   const [data,setData]=useState()

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
 const searchHandle = async (event)=>{
    // console.log(Key)
      let Key = event.target.value;
      if(Key){
          let result = await fetch("http://localhost:3000/Add?q="+Key);
          result = await result.json()
          if(result){
              setProducts(result)
          }
      }
      else{
          getProducts();
      }

  }
  return (
    <>
    <div className="product-list">

        <Header/>
        <div>
      <h1>Search Product</h1>
       <input type="" className='pm-form-search' placeholder='Search Product...'
            onChange={searchHandle}
            // onChange={(e)=>searchHandle(e.target.value)}
             />
             {/* <div className="breadcrumb leftalign_breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Country List' },
                    ]}
                />
            </div> */}
              <Table striped bordered hover>
        <thead>
          <tr>
            <th>S. No.</th>
            <th>Name</th>
            <th>Price</th>
            <th>File</th>
            <th>Description</th>
            {/* <th>Opration</th> */}

           </tr>
        </thead>
        <tbody>
        {
        products.length > 0 ? products.map((item, index) =>
          <tr key={item.id}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td><img src={"http://localhost:3000/"+item.file}/></td>
            <td>{item.desc}</td> 

            

          </tr>
        )
          : <h1>No Result Found</h1>
      }

        </tbody>
      </Table> 
      </div>
    </div>
    </>
  )
}

export default Search
