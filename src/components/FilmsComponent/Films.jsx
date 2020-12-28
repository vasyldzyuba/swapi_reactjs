import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

export function Films({ filmLinks }) {
  const [films, setFilms] = useState([]);
  useEffect(() => {


    Promise.all(
      filmLinks.map(async (link) => {
        const response = await axios.get(link);
        return response.data;
      })
    ).then((result) => setFilms(result));

  }, [filmLinks]);


  const toFilm = useCallback((films, index) => <FilmsListItem title={films.title} id={index + 1} key={index + 1} />);
  if (!films) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <WrappedList>Films: </WrappedList>
      <WrappedList>{films.map(toFilm)}</WrappedList>
    </div>
  );
}
const Wrapper = styled.div`
padding: 10px;
cursor: pointer;
color: black;
&:hover {
  background-color: gray;
  color: white;
}
`;
const WrappedList = styled.div`
margin: 0 auto;
  padding: 10px;
  cursor: pointer;
  color: black;
  width: 100%;
  text-align: center;
    font-size: 20px;
    font-family: cursive;
  &:hover {
    background-color: gray;
    color: white;
  }
`;

function FilmsListItem({ title, id }) {

  return (
    <Wrapper>{title}</Wrapper>
  );
}