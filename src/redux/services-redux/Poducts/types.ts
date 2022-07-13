// Action types
export enum ActionTypes {
  GET_PRODUCTS_API_MKS = '@products/GET_PRODUCTS_API_MKS',
  GET_PRODUCTS_SUCCESS_MKS = '@products/GET_PRODUCTS_SUCCESS_MKS',
  GET_PRODUCTS_FAILURE_MKS = '@products/GET_PRODUCTS_FAILURE_MKS',
}

// Data types

export interface ProductsType {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string | number;
  createdAt: string;
  updatedAt: string;
}

// utilizar readonly pois o estaod do redux é imutável

// State redux types
export interface StateProductType {
  readonly products: ProductsType[];
  readonly loading: boolean;
  readonly error: boolean;
}
