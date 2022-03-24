/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Link,
  Typography,
} from '@mui/material'
import React from 'react'
import imgbooks from '../images/books.jpg'
import imgcinema from '../images/cinema.jpg'
import imgclothes from '../images/clothes.jpg'
import imgelectronics from '../images/electronics.jpg'
import imgkids from '../images/kids.jpg'
import imgsports from '../images/sports.jpg'

const itemData = [
  {
    img: imgclothes,
    title: 'Clothes',
    link: '',
  },
  {
    img: imgelectronics,
    title: 'Electronics',
    link: '',
  },
  {
    img: imgcinema,
    title: 'Cinema',
    link: '',
  },
  {
    img: imgbooks,
    title: 'Books',
    link: '',
  },
  {
    img: imgkids,
    title: 'Kids',
    link: '',
  },
  {
    img: imgsports,
    title: 'Sports',
    link: '',
  },
]

const Home = () => (
  <div>
    <Typography textAlign="center" variant="h2">
      Welcome to Amabay
    </Typography>
    <ImageList
      sx={{ width: 'auto', height: 'auto' }}
      cols={3}
      gap={5}
      rowHeight={450}
      style={{ width: '100' }}
      variant="masonry"
    >
      {itemData.map((item) => (
        <Link href="#">
          <ImageListItem tabIndex={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format&`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar title={item.title} />
          </ImageListItem>
        </Link>
      ))}
    </ImageList>
  </div>
)

export default Home
