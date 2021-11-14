import {ActionTypes} from '../constants/actiontypes';
const initialState={
    products:[{
        available : 1,},
    ],
    selectedProducts:'',
}
export const productReducer = (state = initialState , action: any)=>{
    switch(action.type){
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: action.payload };
            case ActionTypes.SELECTED_PRODUCTS:
                return { ...state, selectedProducts: action.payload };    
            default:
                return state;
    }
};
