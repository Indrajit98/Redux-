import { ADD_TO_CART, REMOVE_FORM_CART } from "../actionTypes/actionTypes"

export const  addToCart = (product) => {

    return{
        type: ADD_TO_CART,
        payload: product,
    }


}

export const removeFromCart = (product) => {
    return {
        type: REMOVE_FORM_CART,
        payload:product,
    }
}