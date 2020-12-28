import React, { useState, useEffect, useCallback } from "react";
import "./style.css";
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import { People } from './components/PeopleComponent/People';
import { Person } from './components/PersonComponent/Person';
import { FilmsList } from './components/FilmsListComponent/Films-List';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <People />
        </Route>
        <Route path="/:personId">
          <Person>
          </Person>
        </Route>
        <Route path="/">
          <FilmsList />
        </Route>
      </Switch>
    </Router>
  );
}
