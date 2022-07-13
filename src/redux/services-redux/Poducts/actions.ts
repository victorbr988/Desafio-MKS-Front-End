import { action } from 'typesafe-actions';
import { ActionTypes, ProductsType } from './types';

export const requestAPiMks = () => action(ActionTypes.GET_PRODUCTS_API_MKS);

export const requestSuccessApiMks = (data: ProductsType[]) => action(ActionTypes.GET_PRODUCTS_SUCCESS_MKS, { data });

export const requestFailureAPiMks = () => action(ActionTypes.GET_PRODUCTS_FAILURE_MKS);
