import React from 'react'
import './Category.css'
import HomeCategories from './HomeCategories'

function Category() {
  return (
    <div className="categories">
      <h1>PRODUCTS - CATEGORIES</h1>
      <div className="categories__container">
        <div className="categories__wrapper">
          <ul className="categories__items">
            <HomeCategories />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Category
