import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material'
import React, { Component } from 'react'
import imgbooks from '../../images/books.jpg'
import imgcinema from '../../images/cinema.jpg'
import imgclothes from '../../images/clothes.jpg'
import imgelectronics from '../../images/electronics.jpg'
import imgkids from '../../images/kids.jpg'
import imgsports from '../../images/sports.jpg'

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
    title: 'Music, Movies & TV Shows',
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
    <h1>Welcome to Amabay </h1>
    <ImageList
      sx={{ width: 'auto', height: 'auto' }}
      cols={3}
      rowHeight={450}
      style={{ width: '100' }}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format&`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar title={item.title} />
        </ImageListItem>
      ))}
    </ImageList>
  </div>
)

export default Home
