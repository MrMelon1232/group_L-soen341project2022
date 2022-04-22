//From Learn to build an e-commerce store with .Net, React & Redux's tutorial
import { yupResolver } from '@hookform/resolvers/yup'
import { Typography, Grid, Paper, Box, Button } from '@mui/material'
import React from 'react'
import { useForm, FieldValues } from 'react-hook-form'
import agent from '../../ApiCall/agent'
import HookFormTextInput from '../../misc/HookFormTextInput'
import { Product } from '../../models/Product'
import { useAppDispatch } from '../../store/configureStore'
import { setProduct } from '../Products/catalogSlice'
import Dropzone from './Dropzone'
import validationSchema from './productValidation'

interface IProps {
  product?: Product
  cancelEdit: () => void
}

const ProductForm = ({ product, cancelEdit }: IProps) => {
  const {
    control,
    reset,
    handleSubmit,
    watch,
    formState: { isDirty, isSubmitting },
  } = useForm({
    mode: 'all',
    resolver: yupResolver(validationSchema),
  })
  const watchFile = watch('file', null)
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    if (product && !watchFile && !isDirty) reset(product)
    return () => {
      if (watchFile) URL.revokeObjectURL(watchFile.preview)
    }
  }, [product, reset, watchFile, isDirty])

  async function handleSubmitData(data: FieldValues) {
    try {
      let response: Product
      if (product) {
        response = await agent.Admin.updateProduct(data)
      } else {
        response = await agent.Admin.createProduct(data)
      }
      dispatch(setProduct(response))
      cancelEdit()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Box component={Paper} sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Product Details
      </Typography>
      <form onSubmit={handleSubmit(handleSubmitData)}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <HookFormTextInput
              control={control}
              name="name"
              label="Product name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <HookFormTextInput
              control={control}
              name="category"
              label="Category"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <HookFormTextInput control={control} name="type" label="Type" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <HookFormTextInput
              control={control}
              type="number"
              name="price"
              label="Price"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <HookFormTextInput
              control={control}
              name="quantity"
              type="number"
              label="Quantity in Stock"
            />
          </Grid>
          <Grid item xs={12}>
            <HookFormTextInput
              control={control}
              name="description"
              label="Description"
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="-between" alignItems="center">
              <Dropzone control={control} name="file" />
              {watchFile ? (
                <img
                  src={watchFile.preview}
                  alt="preview"
                  style={{ maxHeight: 200 }}
                />
              ) : (
                <img
                  src={product?.imgUrl}
                  alt={product?.name}
                  style={{ maxHeight: 200 }}
                />
              )}
            </Box>
          </Grid>
        </Grid>
        <Box display="flex" justifyContent="space-between" sx={{ mt: 3 }}>
          <Button onClick={cancelEdit} variant="contained" color="inherit">
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="success">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  )
}

export default ProductForm
