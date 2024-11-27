import { Table } from '../index'
import { useCart } from '../../hooks/CartContext'

import { formatCurrency } from '../../utils/formatCurrency'
import {
  Container,
  ProductImage,
  ButtonGroup,
  TrashStyled,
  EmptyTrash,
} from './styles'

export const CartItems = () => {
  const { cartProducts, deleteProduct, increaseProduct, decreaseProduct } =
    useCart()

  return (
    <Container>
      {cartProducts.length ? (
        <Table.Root>
          <Table.Header>
            <Table.Tr>
              <Table.Th></Table.Th>
              <Table.Th>Itens</Table.Th>
              <Table.Th>Preço</Table.Th>
              <Table.Th>Quantidade</Table.Th>
              <Table.Th>Total</Table.Th>
              <Table.Th></Table.Th>
            </Table.Tr>
          </Table.Header>
          <Table.Tbody>
            {cartProducts.map((product) => (
              <Table.Tr key={product.id}>
                <Table.Td>
                  <ProductImage src={product.url} alt={product.name} />
                </Table.Td>
                <Table.Td>{product.name}</Table.Td>
                <Table.Td>{product.formatedPrice}</Table.Td>
                <Table.Td>
                  <ButtonGroup>
                    <button onClick={() => decreaseProduct(product.id)}>
                      −
                    </button>
                    <p>{product.quantity}</p>
                    <button onClick={() => increaseProduct(product.id)}>
                      +
                    </button>
                  </ButtonGroup>
                </Table.Td>
                <Table.Td>
                  {formatCurrency(product.quantity * product.price)}
                </Table.Td>
                <Table.Td>
                  <TrashStyled onClick={() => deleteProduct(product.id)} />
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table.Root>
      ) : (
        <EmptyTrash>Carrinho vazio!</EmptyTrash>
      )}
    </Container>
  )
}
