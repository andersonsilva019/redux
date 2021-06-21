import { useEffect, useState } from "react"
import { http } from "../services/http"
import { IProduct } from "../store/modules/cart/types"

export function Catalog() {

  const [catalog, setCatalog] = useState<IProduct[]>([])

  useEffect(() => {
    http.get('/products').then(response => setCatalog(response.data))
  }, [])

  return (
    <>
      <h1>Catalog</h1>
      {catalog.map(product => (
        <article key={product.id}>
          <strong>{product.title}</strong> {" - "}
          <span>{product.price}</span> {"  "}
          <button type="button" >Comprar</button>
        </article>
      ))}
    </>

  )
}