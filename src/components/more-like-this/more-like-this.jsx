import React from 'react';
import PropTypes from 'prop-types';
import {filmDataValidation, MORE_LIKE_THIS_MAX_CARD_COUNT} from '../../const';
import MoviesList from '../movies-list/movies-list';

const MoreLikeThis = ({films, genre, selectedFilmId}) => {
  const recommendedFilms = films.filter((film) => (film.genre === genre) && (film.id !== selectedFilmId));

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <MoviesList films={recommendedFilms} cardDisplayCount={MORE_LIKE_THIS_MAX_CARD_COUNT} />
    </section>
  );
};

MoreLikeThis.propTypes = {
  films: PropTypes.arrayOf(
      filmDataValidation
  ).isRequired,
  genre: PropTypes.string.isRequired,
  selectedFilmId: PropTypes.string.isRequired,
};

export default MoreLikeThis;
