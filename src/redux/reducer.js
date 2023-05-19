const initialState = {
    product:[],
    isLaoding:false,
}

const proreducer = (state = initialState,action) =>{
    switch(action.type){
        case 'FETCHDATA':
            return {
                product:action.payload
            }
        case 'DELETEDATA':
            return {
                product:state.product.filter((val,ind)=>{
                    return ind !== action.payload
                })
            }
        case 'EDITDATA':
            const { productId, updatedData } = action.payload;
            console.log(updatedData)

            const updatedProducts = state.product.map(product => {
                // console.log(product.id , productId)
              if (product.id === productId) {
                return {
                  ...product,
                  ...updatedData
                };
              }
              return product;
            });
            return {
              ...state,
              product: updatedProducts
            };

        case 'ADDPRODUCT':
            return {
                ...state,
                product:[...state.product,action.payload]
            }

        default:
        return state;
    }
}

export default proreducer