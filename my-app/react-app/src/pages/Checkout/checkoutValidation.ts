import * as yup from 'yup'

const validationSchema = yup.object({
  fullName: yup.string().required('Full name is required'),
  detailedAddress: yup.string().required('Address is required'),
  country: yup.string().required('Country is required'),
  postalCode: yup.string().required('Postal code is required'),
  city: yup.string().required('City is required'),
  province: yup.string().required('Province is required'),
})

export default validationSchema
