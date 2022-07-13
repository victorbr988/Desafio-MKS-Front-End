import {createStore, Store, applyMiddleware} from 'redux';
import rootReducer from './services-redux/rootReducer';
import createSagaMiddleware from '@redux-saga/core';
import {StateProductType} from './services-redux/Poducts/types'
import rootSaga from './services-redux/rootSaga';
export interface AplicationState {
  reducerProducts: StateProductType
}

const sagaMiddleware = createSagaMiddleware()

const store: Store<AplicationState>  = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)



export default store