import * as yup from 'yup'

const validationSchema = yup.object({
  name: yup.string().required(),
  category: yup.string().required(),
  type: yup.string().required(),
  price: yup.number().required().moreThan(25),
  quantity: yup.number().required().min(0),
  description: yup.string().required(),
  file: yup.mixed(),
})

export default validationSchema
