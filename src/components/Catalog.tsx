import { useSelector } from "react-redux"

export function Catalog() {

  const state = useSelector(state => state.email)

  console.log(state.email)

  return (
    <h1>Catalog</h1>
  )
}