import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { http } from "../services/http"
import { addProductToCart } from "../store/modules/cart/actions"
import { IProduct } from "../store/modules/cart/types"

export function Catalog() {
  const dispatch = useDispatch()
  const [catalog, setCatalog] = useState<IProduct[]>([])

  useEffect(() => {
    http.get('/products').then(response => setCatalog(response.data))
  }, [])

  const handleAddProductToCart = (product: IProduct) => {
    dispatch(addProductToCart(product))
  }

  return (
    <>
      <h1>Catalog</h1>
      {catalog.map(product => (
        <article key={product.id}>
          <strong>{product.title}</strong> {" - "}
          <span>{product.price}</span> {"  "}
          <button
            onClick={() => handleAddProductToCart(product)}
            type="button"
          >Comprar</button>
        </article>
      ))}
    </>

  )
}