import { all, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from '../services-redux/Poducts/types';
import { load } from './Poducts/sagas';

export default function* rootSaga(): Generator<any> {
  return yield all([takeLatest(ActionTypes.GET_PRODUCTS_API_MKS, load)]);
}