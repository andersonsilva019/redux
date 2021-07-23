import { useEffect, useState } from "react"
import { http } from "../services/http"
import { IProduct } from "../store/modules/cart/types"
import { CatalogItem } from "./CatalogItem"

export function Catalog() {

  const [catalog, setCatalog] = useState<IProduct[]>([])

  useEffect(() => {
    http.get('/products').then(response => setCatalog(response.data))
  }, [])

  return (
    <>
      <h1>Catalog</h1>
      {catalog.map(product => (
        <CatalogItem key={product.id} product={product} />
      ))}
    </>

  )
}