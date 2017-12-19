import {
    ADD_SHOPCART
} from '../actions';

const initialState = {
    selectCart:[],
    count:1
};
function changeMnunt(state = initialState ,action) {
    switch (action.type) {
        case ADD_SHOPCART:
        return Object.assign({},state,{
            selectCart: state.selectCart.concat([action.selectCart])
        })
        default:
        return state;
    }
}
export default changeMnunt;