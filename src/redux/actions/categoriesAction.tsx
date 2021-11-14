import {ActionTypes} from '../constants/actiontypes';

export const setCategories= (productCategories: any): any => {
    return {
        type: ActionTypes.SET_CATEGORIES,
        payload: productCategories,
    };
};

export const selectedCategory= (productCategory: any): any => {
    return {
        type: ActionTypes.SELECTED_CATEGORIES,
        payload: productCategory,
    };
};