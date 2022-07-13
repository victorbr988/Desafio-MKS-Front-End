import { StateProductType, ActionTypes } from './types';
import { Reducer } from 'redux';

const INITIAL_STATE: StateProductType = {
  products: [],
  error: false,
  loading: false,
};

const reducerProducts: Reducer<StateProductType> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.GET_PRODUCTS_API_MKS:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.GET_PRODUCTS_SUCCESS_MKS:
      return {
        ...state,
        loading: false,
        error: false,
        products: action.payload.data,
      };
    case ActionTypes.GET_PRODUCTS_FAILURE_MKS:
      return {
        ...state,
        error: true,
        loadind: false,
        products: [],
      };
    default:
      return state;
  }
};

export default reducerProducts;
