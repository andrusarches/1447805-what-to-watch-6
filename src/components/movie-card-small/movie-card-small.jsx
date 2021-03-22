import React, {useRef, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {filmDataValidation, PLAYER_DELAY_IN_MS} from '../../const';
import {Link, useHistory} from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';

const MovieCardSmall = ({filmData, setSelectedFilmId}) => {
  const href = `/films/${filmData.id}`;
  const history = useHistory();

  const [isPlaying, setPlaying] = useState(null);
  const videoPlayerRef = useRef();
  const playerTimeoutRef = useRef();

  const onMouseClick = () => {
    history.push(href);
  };

  const onMouseEnter = () => {
    setSelectedFilmId(filmData.id);
    playerTimeoutRef.current = setTimeout(() => {
      setPlaying(true);
    }, PLAYER_DELAY_IN_MS);
  };

  const onMouseLeave = () => {
    setPlaying(false);
    window.clearTimeout(playerTimeoutRef.current);
  };

  useEffect(() => {
    if (isPlaying === null) {
      return () => {};
    }

    if (isPlaying) {
      videoPlayerRef.current.play();
    } else {
      videoPlayerRef.current.load();
    }

    return () => {
      setPlaying(false);
      window.clearTimeout(playerTimeoutRef.current);
      playerTimeoutRef.current = null;
    };
  }, [isPlaying]);

  return (
    <article onMouseEnter={() => onMouseEnter()} onMouseLeave={() => onMouseLeave()} className="small-movie-card catalog__movies-card">
      <div onClick={onMouseClick} className="small-movie-card__image">
        <VideoPlayer filmData={filmData} videoPlayerRef={videoPlayerRef} />
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
