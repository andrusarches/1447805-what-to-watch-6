import React, {useState} from 'react';
import {filmDataValidation, MORE_LIKE_THIS_MAX_CARD_COUNT} from '../../const';
import PropTypes from 'prop-types';
import MovieCardSmall from '../movie-card-small/movie-card-small';

const MoviesList = ({films, cardDisplayCount}) => {
  const [, setSelectedFilmId] = useState(null);
  let filmsToBeDisplayed = null;

  if (cardDisplayCount === MORE_LIKE_THIS_MAX_CARD_COUNT) {
    filmsToBeDisplayed = films.slice(0, cardDisplayCount);
  } else {
    filmsToBeDisplayed = films;
  }

  return (
    <div className="catalog__movies-list">
      {filmsToBeDisplayed.map((filmData) => (
        <MovieCardSmall key={filmData.id} filmData={filmData} setSelectedFilmId={setSelectedFilmId} />
      ))}
    </div>
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(
      filmDataValidation
  ).isRequired,
  cardDisplayCount: PropTypes.number.isRequired,
};

export default MoviesList;
