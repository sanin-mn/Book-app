import React, { useState } from 'react'

export default function Form(props) {
    const [products,setProducts] = useState(props.data)
    const [submitted,setSubmitted] = useState(false)

    let changeFormData = (event) =>{
        const {name,value} = event.target
        setProducts({...products,[name]:value})
    
    }
    return (
        <div className='form-overlay border'>
            <form>
                <div className='form-group'>
                    <label>Name:</label>
                    <input className='form-control mt-2' 
                    type="text" 
                    name='name' 
                    placeholder='Enter Name'
                    value={products.name}
                    onChange={changeFormData}
                    />
                    {
                        submitted && products.name==="" && <span className='text-danger'>*Product name required</span>
                    }
                </div>
                <div className='form-group'>
                    <label>Author:</label>
                    <input className='form-control mt-2' 
                    type="text" 
                    name='author' 
                    placeholder='Author Name'
                    value={products.author}
                    onChange={changeFormData}
                    />
                    {
                        submitted && products.author==="" && <span className='text-danger'>*Author name required</span>
                    }
                </div>
                <div className='form-group'>
                    <label>Price:</label>
                    <input className='form-control mt-2' 
                    type="number" 
                    name='price' 
                    placeholder='Enter Price'
                    value={products.price}
                    onChange={changeFormData}
                    />
                    {
                        submitted && products.price==="" && <span className='text-danger'>*Product price required</span>
                    }
                </div>
                <div className="form-group">
                <label>Category:</label>
                    <select 
                    className='form-control mt-2' 
                    name='category' 
                    value={products.category}
                    onChange={changeFormData}
                    >
                        <option value="-1"></option>
                        <option value={'Biography'}>Biography</option>
                        <option value={'History'}>History</option>
                        <option value={'Fantasy'}>Fantasy</option>
                        <option value={'Horror'}>Horror</option>
                    </select>
                    {
                        submitted && products.category==="" && <span className='text-danger'>*Category name required</span>
                    }
                </div>

                <button 
                className='btn btn-primary float-end' 
                onClick={(e)=>{
                    setSubmitted(true)
                    e.preventDefault(); 
                    if(!!products.name && !!products.price && !!products.category){
                        props.add(products)
                    }
                }}
                >send</button>
                <button className='btn btn-danger float-end' onClick={(e)=>{e.preventDefault(); props.close()}}>cancel</button>
            </form>

        </div>
    )
}
