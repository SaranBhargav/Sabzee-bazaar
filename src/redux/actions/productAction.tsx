import {ActionTypes} from '../constants/actiontypes';

export const setProducts= (products: any): any => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selectedProduct= (product: any): any => {
    return {
        type: ActionTypes.SELECTED_PRODUCTS,
        payload: product,
    };
};