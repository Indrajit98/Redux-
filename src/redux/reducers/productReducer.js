import { ADD_TO_CART, REMOVE_FORM_CART } from "../actionTypes/actionTypes";

const initialState = {
   cart:[]
};

export const productReducer = ( state=initialState, action) => {

    const selectedProduct = state.cart.find(product => product._id === action.payload._id)

    console.log(selectedProduct);


switch (action.type) {
    case ADD_TO_CART:
    
        if(selectedProduct){
            const newCart = state.cart.filter(product => product._id !== selectedProduct._id);
           selectedProduct.quantity = selectedProduct.quantity + 1;
           return{
            ...state,cart: [...newCart,selectedProduct]
           }
        }
        return{
        ...state,cart:[...state.cart,{...action.payload, quantity: 1}]
        }
    ;
    case REMOVE_FORM_CART:{
        if(selectedProduct.quantity > 1){
           const newCart = state.cart.filter(product => product._id !== selectedProduct._id);
           selectedProduct.quantity = selectedProduct.quantity -1;
           return{
            ...state,cart:[...newCart,selectedProduct]
           }
            
        }
        return{
            ...state,
            cart:state.cart.filter(product=>product._id !== action.payload._id)
        };
    }


    default:return state;
}
}