export const ADD_SHOPCART = 'ADD_SHOPCART';
export const DELETE_GOOD = 'DELETE_GOOD';
export function addShopcart(selectCart) {
    return {
        type: ADD_SHOPCART,
        selectCart
    }
}
export function deletegood(index){
    return {
        type: DELETE_GOOD,
        index
    }
}