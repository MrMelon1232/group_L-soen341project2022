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
            <HomeCategories
              src="images/electronics.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Electronics"
              path="/services"
            />
            <HomeCategories
              src="images/health-beauty.jpg"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Health and Beauty"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Category
