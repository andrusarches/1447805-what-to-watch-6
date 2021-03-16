import React from 'react';
import PropTypes from 'prop-types';
import filmDataValidation from '../../const';
import {Link, useHistory} from 'react-router-dom';

const MovieCardSmall = ({filmData, setSelectedFilmId}) => {
  const href = `/films/${filmData.id}`;
  const history = useHistory();

  const onMouseClick = () => {
    history.push(href);
  };

  const onMouseEnter = () => {
    setSelectedFilmId(filmData.id);
  };

  return (
    <article onMouseEnter={() => onMouseEnter()} className="small-movie-card catalog__movies-card">
      <div onClick={onMouseClick} className="small-movie-card__image">
        <img src={filmData.previewImage} alt={filmData.title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={href}>{filmData.title}</Link>
      </h3>
    </article>
  );
};

MovieCardSmall.propTypes = {
  filmData: filmDataValidation,
  setSelectedFilmId: PropTypes.func.isRequired,
};

export default MovieCardSmall;
