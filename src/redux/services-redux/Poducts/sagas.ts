import {call, put} from 'redux-saga/effects';
import api from '../../../services/api';


import {requestSuccessApiMks, requestFailureAPiMks} from '../Poducts/actions'

interface ProductType {
  id: number,
  name: string,
  brand: string,
  description: string,
  photo: string,
  price: string,
  createdAt: string,
  updatedAt: string
}

interface ProductsType {
  data: {
    products: ProductType[]
  }
}

export function* load() {
  try {
    const response: ProductsType = yield call(api.get, '/products?page=1&rows=10&sortBy=id&orderBy=DESC');
    console.log(response)
    yield put(requestSuccessApiMks(response.data.products))
  } catch (error) {
    yield put(requestFailureAPiMks());
  }
}