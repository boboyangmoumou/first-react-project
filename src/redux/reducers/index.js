import {
    ADD_SHOPCART,
    DELETE_GOOD
} from '../actions';

const initialState = {
    selectCart:[],
    index:[],
    result:[]
};
function update(state,action){
    state.selectCart.splice(action.index,1)
   // console.log(Object.assign({},{...state.selectCart}))
    return state.selectCart.concat([]);
}
function changeMnunt(state = initialState ,action) {
    switch (action.type) {
        case ADD_SHOPCART:
        return Object.assign({},state,{
            selectCart: state.selectCart.concat([action.selectCart])
        })
        case DELETE_GOOD:
        return  Object.assign({},state,{
            selectCart: update(state,action)
        })
        default:
        return state;
    }
}
export default changeMnunt;