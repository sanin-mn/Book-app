import React, { useState } from 'react'

export default function Form(props) {
    const [products,setProducts] = useState(props.data)
    

    let changeFormData = (event) =>{
        const {name,value} = event.target
        setProducts({...products,[name]:value})
    
    }
    return (
        <div className='form-overlay'>
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
                        <option value={'mobiles'}>Mobiles</option>
                        <option value={'laptops'}>Laptops</option>
                        <option value={'tv'}>Tv</option>
                    </select>
                </div>

                <button className='btn btn-primary float-end' onClick={(e)=>{e.preventDefault(); props.add(products)}}>send</button>
                <button className='btn btn-danger float-end' onClick={(e)=>{e.preventDefault(); props.close()}}>cancel</button>
            </form>

        </div>
    )
}
