import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from '../main/main';
import Login from '../login/login';
import MyList from '../my-list/my-list';
import Review from '../review/review';
import Film from '../film/film';
import Player from '../player/player';
import NotFound from '../not-found/not-found';

const App = (props) => {
  const {title, genre, year} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={() => (
          <Main title={title} genre={genre} year={year} />
        )}
        />
        <Route path="/login" exact render={() => (
          <Login />
        )}
        />
        <Route path="/myList" exact render={() => (
          <MyList />
        )}
        />
        <Route path="/films/:id/review" exact render={() => (
          <Review title={title} />
        )}
        />
        <Route path="/films/:id" exact render={() => (
          <Film title={title} genre={genre} year={year} />
        )}
        />
        <Route path="/player/:id" exact render={() => (
          <Player title={title} />
        )}
        />

        <Route render={() => (
          <NotFound />
        )}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired
};

export default App;
