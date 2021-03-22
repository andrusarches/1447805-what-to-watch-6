import React from 'react';
import {filmDataValidation} from '../../const';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from '../main/main';
import Login from '../login/login';
import MyList from '../my-list/my-list';
import AddReview from '../add-review/add-review';
import Film from '../film/film';
import Player from '../player/player';
import NotFound from '../not-found/not-found';

const App = (props) => {
  const {title, genre, released, films} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={() => (
          <Main title={title} genre={genre} released={released} films={films} />
        )}
        />
        <Route path="/login" exact render={() => (
          <Login />
        )}
        />
        <Route path="/myList" exact render={() => (
          <MyList films={films} />
        )}
        />
        <Route path="/films/:id/review" exact render={() => (
          <AddReview films={films} />
        )}
        />
        <Route path="/films/:id" exact render={() => (
          <Film films={films} />
        )}
        />
        <Route path="/player/:id" exact render={() => (
          <Player films={films} />
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
  released: PropTypes.number.isRequired,
  films: PropTypes.arrayOf(filmDataValidation).isRequired,
};

export default App;
