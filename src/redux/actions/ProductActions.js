import {ActionTypes} from '../constants/ActionTypes';


export const setProduct = (products)=>{
    return{
        type:ActionTypes.SET_PRODUCT,
        item:products,
    };
};

export const selectedProduct =(products)=>{
    return{
        type:ActionTypes.SELECTED_PRODUCT,
        item:products,
    };
};