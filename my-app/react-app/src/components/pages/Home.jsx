import React, { Component } from 'react'
import { renderMatches } from 'react-router-dom'
import Category from '../Category'
import HomeSection from '../HomeSection'

function Home() {
  return (
    <>
      <HomeSection />
      <Category />
    </>
  )
}

export default Home
