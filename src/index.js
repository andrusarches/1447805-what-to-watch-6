import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const rootElement = document.querySelector(`#root`);

const MockMovieCardData = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

const {title, genre, year} = MockMovieCardData;

ReactDOM.render(
    <App title={title} genre={genre} year={year} />,
    rootElement
);
