import React from 'react';
import PropTypes from 'prop-types';
import {Link, useParams, useHistory} from 'react-router-dom';
import FilmTabs from '../film-tabs/film-tabs';
import MoreLikeThis from '../more-like-this/more-like-this';
import {filmDataValidation} from '../../const';

import Footer from '../footer/footer';

const Film = ({films}) => {
  const id = useParams().id;
  const selectedFilm = films.find((film) => film.id === id);
  const {
    title,
    genre,
    released,
    backgroundImage,
    posterImage,
    backgroundColor,
  } = selectedFilm;

  const style = {
    background: backgroundColor
  };

  const playerHref = `/player/${selectedFilm.id}`;
  const reviewHref = `/films/${selectedFilm.id}/review`;
  const history = useHistory();

  const onMouseClickPlay = () => {
    history.push(playerHref);
  };

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full" style={style}>
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>

              <div className="movie-card__buttons">
                <button onClick={onMouseClickPlay} className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <Link className="btn movie-card__button" to={reviewHref}>Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={posterImage} alt={selectedFilm.title + ` - poster`} width="218" height="327" />
            </div>

            <FilmTabs filmData={selectedFilm} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <MoreLikeThis films={films} genre={genre} selectedFilmId={id} />
        <Footer />
      </div>
    </React.Fragment>
  );
};

Film.propTypes = {
  films: PropTypes.arrayOf(
      filmDataValidation
  ).isRequired,
};

export default Film;
