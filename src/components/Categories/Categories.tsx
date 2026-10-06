import './Categories.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    route: '/phones',
    title: 'Mobile phones',
    description: 'Find your everyday companion',
    image: 'img/phones/apple-iphone-14-pro/spaceblack/00.webp',
    className: 'phones',
  },
  {
    route: '/tablets',
    title: 'Tablets',
    description: 'More room for work and play',
    image: 'img/tablets/apple-ipad-pro-11-2021/spacegray/00.webp',
    className: 'tablets',
  },
  {
    route: '/accessories',
    title: 'Accessories',
    description: 'The details that complete your setup',
    image: 'img/accessories/apple-watch-series-6/space-gray/00.webp',
    className: 'accessories',
  },
];

export const Categories: React.FC = () => (
  <section className="categories container" aria-labelledby="categories-title">
    <h2 className="categories__title" id="categories-title">
      Shop by category
    </h2>
    <div className="categories__box">
      {categories.map(category => (
        <Link
          key={category.route}
          className={`categories__card categories__card--${category.className}`}
          to={category.route}
        >
          <div className="categories__image-frame">
            <img
              className="categories__image"
              src={category.image}
              alt=""
              loading="lazy"
            />
            <span className="categories__arrow" aria-hidden="true">
              ↗
            </span>
          </div>
          <h3 className="categories__card-title">{category.title}</h3>
          <p className="categories__description">{category.description}</p>
        </Link>
      ))}
    </div>
  </section>
);
