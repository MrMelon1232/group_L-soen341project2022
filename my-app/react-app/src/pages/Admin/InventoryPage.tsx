//From Learn to build an e-commerce store with .Net, React & Redux's tutorial
import { Edit, Delete } from '@mui/icons-material'
import {
  Typography,
  Button,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  CardMedia,
  Box,
} from '@mui/material'
import React from 'react'
import agent from '../../ApiCall/agent'
import { Product } from '../../models/Product'
import { useAppDispatch } from '../../store/configureStore'
import currencyFormat from '../../utils/currencyFormat'
import { removeProduct } from '../Products/catalogSlice'
import ProductForm from './ProductForm'

const InventoryPage = () => {
  const [products, setProducts] = React.useState<Product[]>([])
  const [loading, setLoading] = React.useState<boolean>()
  const dispatch = useAppDispatch()
  const [editMode, setEditMode] = React.useState<boolean>(false)
  const [selectedProduct, setSelectedProduct] = React.useState<
    Product | undefined
  >(undefined)
  const [target, setTarget] = React.useState(0)

  React.useEffect(() => {
    agent.Catalog.list()
      .then((listOfProducts) => setProducts(listOfProducts))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [editMode, target])

  function handleDeleteProduct(id: number) {
    setLoading(true)
    setTarget(id)
    agent.Admin.deleteProduct(id)
      .then(() => dispatch(removeProduct(id)))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }

  function handleSelectProduct(product: Product) {
    setSelectedProduct(product)
    setEditMode(true)
  }

  const cancelEdit = () => {
    if (selectedProduct) setSelectedProduct(undefined)
    setEditMode(false)
  }

  if (editMode)
    return <ProductForm product={selectedProduct} cancelEdit={cancelEdit} />

  const tryRequire = (path, folder) => {
    try {
      // eslint-disable-next-line import/no-dynamic-require, global-require
      return require(`../../images/${folder}/${path}`)
    } catch (err) {
      console.log('error occured', err)
      return null
    }
  }

  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <Typography sx={{ p: 2 }} variant="h4">
          Inventory
        </Typography>
        <Button
          onClick={() => setEditMode(true)}
          sx={{ m: 2 }}
          size="large"
          variant="contained"
        >
          Create
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="left">Product</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="center">Type</TableCell>
              <TableCell align="center">Category</TableCell>
              <TableCell align="center">Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow
                key={product.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {product.id}
                </TableCell>
                <TableCell align="left">
                  <Box display="flex" alignItems="center">
                    {product.name}
                    <CardMedia
                      component="img"
                      image={tryRequire(product.imgUrl, 'Catalog/Laptops')}
                      title={product.name}
                      sx={{
                        height: '50px',
                        width: 'auto',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                      }}
                    />
                  </Box>
                </TableCell>
                <TableCell align="right">
                  {currencyFormat(product.price)}
                </TableCell>
                <TableCell align="center">{product.category}</TableCell>
                <TableCell align="center">{product.description}</TableCell>
                <TableCell align="center">{product.quantity}</TableCell>
                <TableCell align="right">
                  <Button
                    onClick={() => handleSelectProduct(product)}
                    startIcon={<Edit />}
                  />
                  <Button
                    startIcon={<Delete />}
                    onClick={() => handleDeleteProduct(product.id)}
                    color="error"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default InventoryPage
