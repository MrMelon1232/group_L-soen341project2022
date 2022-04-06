import React from 'react'
import agent from '../ApiCall/agent'
import Catalog from '../components/Shopping/Catalog'
import { Product } from '../models/Product'

const ProductsPage = () => {
  const [products, setProducts] = React.useState<Product[]>([])
  const [loading, setLoading] = React.useState<boolean>()

  React.useEffect(() => {
    agent.Catalog.list()
      .then((listOfProducts) => setProducts(listOfProducts))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
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

export default ProductsPage
