import './Hero.scss';
import React from 'react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => (
  <section className="hero container" aria-labelledby="hero-title">
    <div className="hero__main">
      <div className="hero__copy">
        <p className="hero__eyebrow">Nice Gadgets / Everyday essentials</p>
        <h2 className="hero__title" id="hero-title">
          Find your next
          <br />
          everyday upgrade.
        </h2>
        <p className="hero__description">
          Phones, tablets and accessories. Explore the details, compare your
          favourites and find the right fit.
        </p>
        <Link className="hero__button" to="/phones">
          Explore phones <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <div className="hero__showcase">
        <span className="hero__collection">In focus</span>
        <img
          className="hero__phone"
          src="img/phones/apple-iphone-14-pro/spaceblack/00.webp"
          alt="Apple iPhone 14 Pro in Space Black"
          width="600"
          height="600"
          fetchPriority="high"
        />
        <p className="hero__caption">
          <span>iPhone 14 Pro</span>
          <span>Space Black</span>
        </p>
      </div>
    </div>
    <nav className="hero__links" aria-label="Shop collections">
      <Link className="hero__link" to="/phones">
        <span className="hero__link-number" aria-hidden="true">
          01
        </span>
        <span>Mobile phones</span>
        <span aria-hidden="true">↗</span>
      </Link>
      <Link className="hero__link" to="/tablets">
        <span className="hero__link-number" aria-hidden="true">
          02
        </span>
        <span>Tablets</span>
        <span aria-hidden="true">↗</span>
      </Link>
      <Link className="hero__link" to="/accessories">
        <span className="hero__link-number" aria-hidden="true">
          03
        </span>
        <span>Accessories</span>
        <span aria-hidden="true">↗</span>
      </Link>
    </nav>
  </section>
);
