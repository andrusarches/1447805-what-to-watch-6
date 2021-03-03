import React from 'react';

import Footer from '../footer/footer';

const NotFound = () => {
  return (
    <div className="page-content" style={{minHeight: `100vh`}}>
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="main.html" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>
      </header>
      <h1 style={{margin: `auto`, textAlign: `center`, marginTop: `30vh`, marginBottom: `30vh`}}>404 Not Found</h1>
      <Footer />
    </div>
  );
};

export default NotFound;
