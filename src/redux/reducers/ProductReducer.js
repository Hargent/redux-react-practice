import {ActionTypes} from '../constants/ActionTypes'

// const initialState = {
//     products :[],
// };

export const ProductReducer = (state, action) =>{
    switch(action.type){
        case ActionTypes.SET_PRODUCT:
            return {...state,products: action.item};
    default:
        return state;
}}