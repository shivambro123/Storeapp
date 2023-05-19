import axios from "axios";
export const fetchData = () =>{
    return (dispatch) =>{
        dispatch({type:'loading'})
       return axios.get('https://fakestoreapi.com/products')
        .then(res => {
            dispatch({type:'FETCHDATA',payload:res.data})
        }
            )
            .catch(err => console.log(err))
    }
}

export const deleteData = (id) =>{
    return (dispatch) =>{
        return axios.delete(`https://fakestoreapi.com/products/${id}`)
        .then(res => {
            console.log(res)
            dispatch({type:'DELETEDATA',payload:id-1})
        })
    }
}

export const editData = (id,value) =>{  
    return (dispatch)=>{
        return axios.put('https://fakestoreapi.com/products/'+id,value)
        .then(res =>{
            console.log(res.data)
            dispatch({type:'EDITDATA',payload:{productId:id,updatedData:value}})
        })
    }
}

export const addProduct = (value) => {
    return (dispatch) =>{
        return axios.post('https://fakestoreapi.com/products/',value)
        .then(res =>{
            console.log(res.data)
            dispatch({type:'ADDPRODUCT',payload:res.data})
        })
    }
}