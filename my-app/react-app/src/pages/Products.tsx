import React from 'react'
import Catalog from '../components/Shopping/Catalog'
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
        id: prevState.length + 1,
        price: 15,
        name: 'a name',
        description: 'desc',
        category: 'category',
      },
    ])
  }

  return (
    <div>
      <h1> products</h1>
      <Catalog products={products} addProduct={addProducts} />
    </div>
  )
}

export default Products
