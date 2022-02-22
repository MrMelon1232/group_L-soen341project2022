import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import React from 'react'
import '../App.css'
import './HomeSection.css'

function HomeSection() {
  return (
    <div className="home-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>
        Ama<mark className="Bay">Bay</mark>
      </h1>
      <p>Buying and selling has never been easier</p>
      <div className="home-btns">
        <Stack spacing={2} direction="row">
          <Button variant="contained" size="large" href="">
            SIGN UP
          </Button>
          <Button variant="Outlined" size="large" href="">
            LOG IN
          </Button>
        </Stack>
      </div>
    </div>
  )
}

export default HomeSection
