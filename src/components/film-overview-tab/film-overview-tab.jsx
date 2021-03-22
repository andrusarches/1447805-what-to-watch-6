import React from 'react';
import {filmDataValidation} from '../../const';

const getRatingHumanized = (rating) => {
  switch (true) {
    case (rating === 10):
      return `Awesome`;
    case (rating >= 8 && rating < 10):
      return `Very good`;
    case (rating >= 5 && rating < 8):
      return `Good`;
    case (rating >= 3 && rating < 5):
      return `Normal`;
    default:
      return `Bad`;
  }
};

const FilmOverviewTab = ({filmData}) => {
  const {
    rating,
    scoresCount,
    description,
    director,
    starring,
  } = filmData;

  const starringString = starring.join(`, `);

  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating.toString().replace(`.`, `,`)}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getRatingHumanized(rating)}</span>
          <span className="movie-rating__count">{scoresCount === 1 ? `${scoresCount} rating` : `${scoresCount} ratings`}</span>
        </p>
      </div>
      <div className="movie-card__text">
        <p>{description}</p>
        <p className="movie-card__director"><strong>Director: {director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {starringString}</strong></p>
      </div>
    </>
  );
};

FilmOverviewTab.propTypes = {
  filmData: filmDataValidation,
};

export default FilmOverviewTab;
