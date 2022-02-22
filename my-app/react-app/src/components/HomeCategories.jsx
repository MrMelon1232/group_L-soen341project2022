import React from 'react'
import { Link } from 'react-router-dom'
import './HomeCategories.css'

function HomeCategories() {
  return (
    <li className="categories__item">
      <Link to className="categories__item__link">
        <figure className="categories__item__pic-wrap">
          <img
            src="/images/img-home.jpg"
            alt="Technology"
            className="categories__item__pic"
          />
        </figure>
        <div className="categories__item__info">
          <h5 className="categories__item__text">hello</h5>
        </div>
      </Link>
    </li>
  )
}

export default HomeCategories
