import { List, ListItem, ListItemText, Avatar } from '@mui/material';
import Button from '@mui/material/Button';
import ProductList from './ProductList'
import { Product } from './Products'


interface Props{
    products: Product[] ;
    addProduct: () => void;

}


export default function Catalog({products, addProduct}: Props)
{
    return(
        <>
        <ProductList products= {products}/>
        <Button variant='contained' onClick= {addProduct}>Add product</Button>

      </>
    )
}