import {ActionTypes} from '../constants/actiontypes';
const initialState={
    categories:[],
    selectedCategory: '',
}
export const categoryReducer = (state = initialState, action: any) => {
    switch(action.type){
        case ActionTypes.SET_CATEGORIES:
            return { ...state, categories: action.payload };
        case ActionTypes.SELECTED_CATEGORIES:
            return { ...state, selectedCategory: action.payload };   
        default:
                return state;
    }

};