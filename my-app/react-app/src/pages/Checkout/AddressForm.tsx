//https://github.com/mui/material-ui/blob/v5.6.2/docs/data/material/getting-started/templates/checkout/AddressForm.tsx
import { Button } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { useForm, useFormContext } from 'react-hook-form'
import HookFormCheckBox from '../../misc/HookFormCheckBox'
import HookFormTextInput from '../../misc/HookFormTextInput'

const AddressForm = () => {
  const { control } = useFormContext()

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <HookFormTextInput
            control={control}
            name="fullName"
            label="Full name"
          />
        </Grid>
        <Grid item xs={12}>
          <HookFormTextInput
            control={control}
            name="detailedAddress"
            label="Shipping Address"
          />
        </Grid>
        <Grid item xs={6}>
          <HookFormTextInput control={control} name="country" label="Country" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <HookFormTextInput
            control={control}
            name="province"
            label="Province/Territory"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <HookFormTextInput control={control} name="city" label="City" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <HookFormTextInput
            control={control}
            name="postalCode"
            label="Postal Code"
          />
        </Grid>
        <Grid item xs={12}>
          <HookFormCheckBox
            name="saveAddress"
            label="Save this as default address"
            control={control}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default AddressForm
