import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, useParams } from "react-router-dom";

import axios from "axios";
import styled from "styled-components";

export function FilmsList() {
  const [film, setFilm] = useState();
  let { filmsId } = useParams();
  useEffect(() => {
    axios.get(`https://swapi.dev/api/films/${filmsId}/`)
      .then((res) => {
        setFilm(res.data.results);
      });
  }, [setFilm]);


  return (
    <div>
      <Link to="/">Back</Link>
      <div>title: {film.title}</div>
      <div>director: {film.director}</div>
      <div>producer: {film.producer}</div>
      <div>release date: {film.release_date}</div>
    </div>
  );
}