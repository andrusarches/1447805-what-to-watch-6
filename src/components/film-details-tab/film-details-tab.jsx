import React from 'react';
import {filmDataValidation, MINUTES_IN_HOUR} from '../../const';

const getActorsList = (actor) => {
  return (
    <React.Fragment key={actor}>
      {actor} <br />
    </React.Fragment>
  );
};

const getHumanizedRunTime = (runTimeInMinutes) => {
  const hours = Math.floor(+runTimeInMinutes / MINUTES_IN_HOUR);
  const minutes = +runTimeInMinutes - hours * MINUTES_IN_HOUR;

  return (hours === 0 ? `${minutes.toString()}m` : `${hours}h ${minutes.toString().padStart(2, 0)}m`);
};

const FilmDetailsTab = ({filmData}) => {
  const {
    director,
    starring,
    runTime,
    genre,
    released,
  } = filmData;

  return (
    <>
      <div className="movie-card__text movie-card__row">
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">{director}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <span className="movie-card__details-value">
              {starring.map((actor) => getActorsList(actor))}
            </span>
          </p>
        </div>
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">{getHumanizedRunTime(runTime)}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">{genre}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">{released}</span>
          </p>
        </div>
      </div>
    </>
  );
};

FilmDetailsTab.propTypes = {
  filmData: filmDataValidation,
};

export default FilmDetailsTab;
