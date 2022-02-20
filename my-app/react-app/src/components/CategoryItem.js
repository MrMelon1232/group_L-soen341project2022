import React from 'react';
import { Link } from 'react-router-dom';

function CategoryItem(props) {
  return (
    <>
      <li className='ctgs__item'>
        <Link className='ctgs__item__link' to={props.path}>
          <figure className='ctgs__item__pic-wrap' data-category={props.label}>
            <img
              className='ctgs__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='ctgs__item__info'>
            <h5 className='ctgs__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CategoryItem;