import { AxiosResponse } from 'axios';
import { all, takeLatest, select, call, put } from 'redux-saga/effects';
import { IState } from '../..';
import { http } from '../../../services/http';
import { addProductToCartPending, addProductToCartRejected, addProductToCartResolved } from './actions';

import { cartConstants } from './constants'

type StockResponseType = {
  id: number
  quantity: number
}

type CheckProductStockAction = ReturnType<typeof addProductToCartPending>;

function* checkProductStock({ payload }: CheckProductStockAction) {
  const { product } = payload;

  const currentQuantity: number = yield select((state: IState) => {
    return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0;
  });

  const availableStockResponse: AxiosResponse<StockResponseType> = yield call(
    http.get,
    `stock/${product.id}`
  );

  if (availableStockResponse.data.quantity > currentQuantity) {
    yield put(addProductToCartResolved(product));
  } else {
    yield put(addProductToCartRejected(product.id));
  }

  console.info(currentQuantity)
}

export default all([
  takeLatest(cartConstants.ADD_PRODUCT_TO_CART_PENDING, checkProductStock)
])