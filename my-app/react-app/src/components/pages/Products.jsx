import { Container } from '@mui/material';
import { CssBaseline } from '@mui/material';
import Typography from '@mui/material/Typography';
import React, { Component, useEffect, useState } from 'react';
import { renderMatches } from 'react-router-dom'
import Catalog from './Catalog'


function Products() {
  const [products, setProducts] = useState([
    {name: 'product1', price: 100.00},
    {name: 'product2', price: 200.00},
  ]);

  useEffect(() => {
    fetch('http://localhost:3000/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])

  function addProduct() {
    setProducts(prevState => [
      ...prevState,
      {
        id: prevState.length+ 101,
        name: 'product' + (prevState.length + 1),
        price: prevState.length * 100 + 100,
        brand: 'some brand',
        description: 'some desc',
        pictureUrl: 'http://picsum.photos/200'
      }])
      }


  return (
   <>
      <Container>
      <Catalog products= {products} addProduct ={addProduct} />
      </Container>
     
      
    </>
  )
}

export default Products