import React from 'react';
import {filmDataValidation} from '../../const';
import PropTypes from 'prop-types';
import {Link, useParams} from 'react-router-dom';
import AddReviewForm from '../add-review-form/add-review-form';

const AddReview = ({films}) => {
  const id = useParams().id;
  const selectedFilm = films.find((film) => film.id === id);

  const filmHref = `/films/${selectedFilm.id}`;
  const reviewHref = `/films/${selectedFilm.id}/review`;

  const {
    title,
    backgroundImage,
    posterImage,
    backgroundColor,
  } = selectedFilm;

  const style = {
    background: backgroundColor
  };

  return (
    <section className="movie-card movie-card--full" style={style}>
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={title + ` - Poster`} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to={filmHref}>{title}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to={reviewHref}>Add review</Link>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={posterImage} alt={title + ` - Poster`} width="218" height="327" />
        </div>
      </div>

      <AddReviewForm />

    </section>
  );
};

AddReview.propTypes = {
  films: PropTypes.arrayOf(
      filmDataValidation
  ).isRequired,
};

export default AddReview;
