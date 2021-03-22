import React from 'react';
import PropTypes from 'prop-types';
import {filmDataValidation} from '../../const';

const VideoPlayer = ({filmData, videoPlayerRef}) => {

  return (
    <video
      ref={videoPlayerRef}
      poster={filmData.previewImage}
      src={filmData.previewVideoLink}
      width="100%"
      height="100%"
      preload="none"
      muted
      loop
    />
  );
};

VideoPlayer.propTypes = {
  filmData: filmDataValidation,
  videoPlayerRef: PropTypes.object.isRequired,
};

export default VideoPlayer;
