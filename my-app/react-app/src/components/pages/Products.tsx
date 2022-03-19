import React from 'react'
// eslint-disable-next-line import/extensions
import { Product } from '../models/Product'

const Products = () => {
  const [products, setProducts] = React.useState<Product[]>([])

  React.useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])

  const addProducts = () => {
    setProducts((prevState) => [
      ...prevState,
      {
        id: prevState.length + 10,
        price: 15,
        name: 'a name',
        description: 'desc',
        category: 'category',
      },
    ])
  }

  console.log(products)

  return (
    <div>
      <h1> products</h1>
      <ul>
        {products.map((item, index) => (
          <li tabIndex={index}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
      <button onClick={addProducts} type="button">
        Add Products
      </button>
    </div>
  )
}

export default Products
