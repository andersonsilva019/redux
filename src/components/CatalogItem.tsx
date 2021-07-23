import { useDispatch } from "react-redux"
import { addProductToCart } from "../store/modules/cart/actions"
import { IProduct } from "../store/modules/cart/types"

type CatalogItemProps = {
  product: IProduct
}

export function CatalogItem({ product }: CatalogItemProps) {

  const dispatch = useDispatch()

  const handleAddProductToCart = () => {
    dispatch(addProductToCart(product))
  }

  return (
    <article>
      <strong>{product.title}</strong>
      <span>{product.price}</span>
      <button
        onClick={handleAddProductToCart}
        type="button"
      >Comprar</button>
    </article>
  )
}