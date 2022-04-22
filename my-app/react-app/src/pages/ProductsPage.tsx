import React from 'react'
import agent from '../ApiCall/agent'
import Catalog from '../components/Shopping/Catalog'
import { Product } from '../models/Product'
import { useAppDispatch, useAppSelector } from '../store/configureStore'
import { fetchProductsAsync, productSelectors } from './Products/catalogSlice'

const ProductsPage = () => {
  //const [products, setProducts] = React.useState<Product[]>([])
  const products = useAppSelector(productSelectors.selectAll)
  const dispatch = useAppDispatch()
  const { productsLoaded } = useAppSelector((state) => state.catalog)
  const [loading, setLoading] = React.useState<boolean>()

  React.useEffect(() => {
    if (!productsLoaded) dispatch(fetchProductsAsync())
  }, [dispatch, productsLoaded])

  return (
    <div>
      <h1> products</h1>
      <Catalog products={products} />
    </div>
  )
}

export default ProductsPage
