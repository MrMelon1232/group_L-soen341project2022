import cors from 'cors'
import React from 'react'

const Products = () => {
  const [products, setProducts] = React.useState()

  React.useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])

  console.log(products)

  return (
    <div>
      <h1> products</h1>
    </div>
  )
}

export default Products
