import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import FILM_MOCK_DATA from './mocks/films.js';

const rootElement = document.querySelector(`#root`);

/* eslint-disable no-console */

console.log(FILM_MOCK_DATA);

window.data = FILM_MOCK_DATA;

const MockMovieCardData = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  released: 2014
};

const {title, genre, released} = MockMovieCardData;

ReactDOM.render(
    <App title={title} genre={genre} released={released} films={FILM_MOCK_DATA} />,
    rootElement
);
