import React, {useState} from 'react';
import {filmDataValidation, FilmTabType} from '../../const';
import FilmOverviewTab from '../film-overview-tab/film-overview-tab';
import FilmDetailsTab from '../film-details-tab/film-details-tab';
import FilmReviewsTab from '../film-reviews-tab/film-reviews-tab';

const getTabByType = (filmData, type = FilmTabType.OVERVIEW) => {
  switch (type) {
    case FilmTabType.OVERVIEW:
      return <FilmOverviewTab filmData={filmData} />;
    case FilmTabType.DETAILS:
      return <FilmDetailsTab filmData={filmData} />;
    case FilmTabType.REVIEWS:
      return <FilmReviewsTab filmData={filmData} />;
    default:
      return ``;
  }
};

const FilmTabs = ({filmData}) => {
  const [selectedTab, setSelectedTab] = useState(FilmTabType.OVERVIEW);

  const onMouseClick = (evt) => {
    evt.preventDefault();
    setSelectedTab(evt.target.textContent.toUpperCase());
  };

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          <li className={`movie-nav__item ${selectedTab === FilmTabType.OVERVIEW ? `movie-nav__item--active` : ``}`}>
            <a href="#" className="movie-nav__link" onClick={onMouseClick}>Overview</a>
          </li>
          <li className={`movie-nav__item ${selectedTab === FilmTabType.DETAILS ? `movie-nav__item--active` : ``}`}>
            <a href="#" className="movie-nav__link" onClick={onMouseClick}>Details</a>
          </li>
          <li className={`movie-nav__item ${selectedTab === FilmTabType.REVIEWS ? `movie-nav__item--active` : ``}`}>
            <a href="#" className="movie-nav__link" onClick={onMouseClick}>Reviews</a>
          </li>
        </ul>
      </nav>
      {getTabByType(filmData, selectedTab)}
    </div>
  );
};

FilmTabs.propTypes = {
  filmData: filmDataValidation,
};

export default FilmTabs;
