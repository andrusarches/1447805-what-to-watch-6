import React from 'react';
import {filmDataValidation} from '../../const';
import PropTypes from 'prop-types';

import MoviesList from '../movies-list/movies-list';
import Footer from '../footer/footer';

const MyList = ({films}) => {
  const filmsFavorite = films.filter((filmData) => filmData.isFavorite);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="main.html" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <MoviesList films={filmsFavorite}/>
      </section>

      <Footer />
    </div>
  );
};

MyList.propTypes = {
  films: PropTypes.arrayOf(
      filmDataValidation
  ).isRequired,
};

export default MyList;
