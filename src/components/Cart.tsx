import { useSelector } from "react-redux"

export function Cart() {

  const state = useSelector(state => state)

  console.log(state)

  return (
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preco</th>
          <th>Quantidade</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>

      </tbody>
    </table>
  );
}