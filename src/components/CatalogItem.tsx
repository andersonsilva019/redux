import { useDispatch, useSelector } from "react-redux"
import { IState } from "../store"
import { addProductToCartPending } from "../store/modules/cart/actions"
import { IProduct } from "../store/modules/cart/types"

type CatalogItemProps = {
  product: IProduct
}

export function CatalogItem({ product }: CatalogItemProps) {

  const dispatch = useDispatch()

  const hasFailedStockCheck = useSelector<IState, boolean>(state => {
    return state.cart.failedStockCheck.includes(product.id)
  })

  const handleAddProductToCart = () => {
    dispatch(addProductToCartPending(product))
  }

  return (
    <article>
      <strong>{product.title}</strong>
      <span>{product.price}</span>
      <button
        onClick={handleAddProductToCart}
        type="button"
      >Comprar</button>

      {hasFailedStockCheck && <p style={{ color: "red" }}>Falta de estoque</p>}
    </article>
  )
}