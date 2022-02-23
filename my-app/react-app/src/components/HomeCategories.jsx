import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

function HomeCategories(props) {
  return (
    <li className="categories__item">
      <Link to className="categories__item__link" ro={props.path}>
        <figure
          className="categories__item__pic-wrap"
          data-category={props.label}
        >
          <img
            className="categories__item__pic"
            src={props.src}
            alt="Technology"
          />
        </figure>
        <div className="categories__item__info">
          <h5 className="categories__item__text">{props.text}</h5>
        </div>
      </Link>
    </li>
  )
}

HomeCategories.propTypes = {
  path: PropTypes.string,
  src: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.string,
}

export default HomeCategories
