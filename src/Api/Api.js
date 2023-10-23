import axios from "axios";


const url = "http://localhost:4000/products"

export async function getData(){

    return await axios.get(url)

}

export async function deleteData(id){

    return await axios.delete(`${url}/${id}`)
    
}

export async function postData(id){

    return await axios.post(url,data,{
        headers:{
            'Content-Type':'application/json'
        }
    })
    
}