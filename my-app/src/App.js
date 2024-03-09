import './App.css';
import Table from './Table';
import Form from './Form';
import { getData, deleteData, postData, putData } from './api'
import { useEffect, useState } from 'react';

/**
 * This is about CRUD Operation in React
 * To run this application we need to run json-server locally
 * Command to run json-server is 'json-server --watch data.json --port 4000'
 */

function App() {

  const [products, setProducts] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  const [initialForm, setForm] = useState({
    name: '',
    price: '',
    category: ''
  });
  const [edit, setEdit] = useState(false);

  useEffect(
    () => {
      getProducts()
    }, []
  )

  let getProducts = async () => {
    let res = await getData();
    setProducts(res.data);
  }

  let deleteProducts = async (id) => {
    console.log('delete');
    await deleteData(id);
    getProducts();
  }

  let addProduct = async (product) => {
    console.log('add');
    let data={
      name: product.name,
      price: product.price,
      category: product.category
    }
    if(edit){
      await putData(product.id, data)
    } else{
      await postData(data);
    }
    getProducts();
    setOpenForm(false);
  }

  let editProduct = async (data) => {
    debugger;
    setForm(data);
    setEdit(true);
    setOpenForm(true);
  }

  let showForm = () => {
    setOpenForm(true);
    setEdit(false);
    setForm({
      name: '',
      price: '',
      category: ''
    })
  }

  let closeForm = () => {
    setOpenForm(false);
  }

  return (
    <div className='wrapper m-5 w-50'>
      <h2 className='text-primary'>CRUD Operations</h2>
      <button className='btn btn-primary' onClick={
        ()=>{
          showForm()
        }
      }>Add Product</button>
      <Table products={products} delete={deleteProducts} edit={editProduct} />
      {
        openForm && <Form close={closeForm} data={initialForm} add={addProduct} />
      }
    </div>
  );
}

export default App;
