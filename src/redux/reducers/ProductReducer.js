import {ActionTypes} from '../constants/ActionTypes'

const initialState = {
    products :[],
};

export const ProductReducer = (state = initialState , action) =>{
    switch(action.type){
        case ActionTypes.SET_PRODUCT:
            return {...state,products: action.item};
    default:
        return state;
}}

export const SelectedProductReducer = (state = {} , action) =>{
    switch(action.type){
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...action.item};
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
    default:
        return state;
}}