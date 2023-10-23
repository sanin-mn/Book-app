import './App.css';
import Form from './components/Form';
import Table from './components/Table';
import { getData, deleteData, postData, putData } from './Api/Api'
import { useEffect, useState } from 'react';

function App() {

  const [products, setProducts] = useState([])
  const [openform, setOpenform] = useState(false)
  const [edit, setEdit] = useState(false)

  const [initialForm, setInitialForm] = useState({
    name: '',
    author:'',
    price: '',
    category: ''
  })

  useEffect(
    () => {
      getProducts()
    }, []
  )

  let getProducts = async () => {
    let res = await getData();
    setProducts(res.data)
  }

  let deleteProduct = async (id) => {
    await deleteData(id);
    getProducts()
  }

  let addProduct = async (product) => {

    let data={
      name:product.name,
      price:product.price,
      category:product.category,
      author:product.author
    }

    if (edit)
      await putData(product.id, data)
    else
      await postData(data);

    getProducts()
    setOpenform(false)
  }

  let editProduct = async (data) => {
    setInitialForm(data)
    setOpenform(true)
    setEdit(true)
  }

  let showForm = () => {
    setOpenform(true)
    setInitialForm({
      name: '',
      author:'',
      price: '',
      category: ''
    })
  }

  let closeForm = () => {
    setOpenform(false)
  }

  return (
    <div className='wrapper m-5 w-75'>
      <h1 className='heading text-dark ms-3 fs-4 fw-bold bg-light rounded '>BOOKS DETAILS</h1>
      <button className='btn btn-success ms-3' onClick={() => { showForm() }}>Add Book</button>
      <Table products={products} delete={deleteProduct} edit={editProduct}></Table>
      {
        openform && <Form close={closeForm} data={initialForm} add={addProduct} />
      }
    </div>
  );
}

export default App;
