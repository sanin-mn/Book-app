import './App.css';
import Form from './components/Form';
import Table from './components/Table';
import {getData,deleteData} from './Api/Api'
import { useEffect, useState } from 'react';

function App() {

  const [products,setProducts] = useState ([])

  useEffect(
    ()=>{
      getProducts()
    },[]
  )

  let getProducts = async () =>{
    let res = await getData();
    setProducts(res.data)
  }

  let deleteProduct = async (id) =>{
    await deleteData(id);
    getProducts()
  }

  return (
    <div className='wrapper m-5 w-50'>
          <h1>crud</h1>
          <button className='btn btn-primary'>add Product</button>
          <Table products={products} deleteProduct={deleteProduct}></Table>
          <Form/>
    </div>
  );
}

export default App;
