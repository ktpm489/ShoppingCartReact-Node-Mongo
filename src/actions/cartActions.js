
// GET CART
export function getCart(){
    return {
        type :'GET_CART'
    }
}
// ADD CART
export function addToCart(cart){
    return {
        type : 'ADD_CART',
        payload : cart
    }
}

// UPDATE CART
export function updateCart(_id ,unit ,  cart){
    return {
        type : 'UPDATE_CART',
        payload : cart
    }
}
// DELETE FROM CART
export function deleteCartIem(cart){
    return {
        type :'DELETE_CART',
        payload : cart
    }
}