import React, {useState} from 'react';
import {filmDataValidation} from '../../const';
import PropTypes from 'prop-types';
import MovieCardSmall from '../movie-card-small/movie-card-small';

const MoviesList = ({films}) => {
  const [, setSelectedFilmId] = useState(null);

  return (
    <div className="catalog__movies-list">
      {films.map((filmData) => (
        <MovieCardSmall key={filmData.id} filmData={filmData} setSelectedFilmId={setSelectedFilmId} />
      ))}
    </div>
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(
      filmDataValidation
  ).isRequired,
};

export default MoviesList;
