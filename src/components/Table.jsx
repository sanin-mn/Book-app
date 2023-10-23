import React from 'react'

export default function Table(props) {

  return (
    <div>
<table className='table m-3 rounded shadow border'>

    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Author</th>
            <th>Price</th>
            <th>Category</th>
            <th>Edit / Delete</th>
        </tr>
    </thead>
    <tbody>
        {
            props.products.map(
                (data)=>
                (
                <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.author}</td>
                    <td>{data.price}</td>
                    <td>{data.category}</td>
                    <td>
                        <button className='btn btn-primary m-1' onClick={()=>{props.edit(data)}}>Edit</button>
                        <button className='btn  m-1' onClick={()=>{props.delete(data.id)}}><i class="fa-solid fa-trash text-danger fs-3"></i></button>
                    </td>
                </tr>
                )
            )
        }
    </tbody>

</table>
    </div>
  )
}
