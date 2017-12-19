export const ADD_SHOPCART = 'ADD_SHOPCART';

export function addShopcart(selectCart) {
    return {
        type: ADD_SHOPCART,
        selectCart
    }
}