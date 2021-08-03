import { all, takeLatest } from 'redux-saga/effects';

import { cartConstants } from './constants'

function checkProductStock() {
  console.info('Acionou')
}

export default all([
  takeLatest(cartConstants.ADD_PRODUCT_TO_CART, checkProductStock)
])