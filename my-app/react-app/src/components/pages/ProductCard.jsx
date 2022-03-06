import { Card, CardMedia, CardContent, Typography, CardActions, Button, CardHeader, Avatar} from '@mui/material'
import Product from "./Products"

interface Props{
    product: Product;
}


export default function ProductCard({product}: Props) {
  return (
     <Card >
         <CardHeader
         avatar = {
             <Avatar sx={{bgcolor: 'secondary.main'}}>
                 {product.name.charAt(0).toUpperCase}
             </Avatar>
         }
         title={product.name}
         titleTypographyProps={{
             sx: {fontWeight: 'bold', color: 'primary.main' }
         }}
         />
      <CardMedia
      sx={{height: 140, backgroundSize: 'contain', bgcolor: 'primary.light'}}
        component="img"
        height="140"
        backgroundSize = 'contain'
        bgcolor = 'primary.light'
        image="http://picsum.photos/200"
        title={product.name}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom color ='secondary' variant="h5" component="div">
         ${(product.price / 10).toFixed(2) }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.brand} / {product.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to cart</Button>
        <Button size="small">View</Button>
      </CardActions>
    </Card>
    
  )
}
