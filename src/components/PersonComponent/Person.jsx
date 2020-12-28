import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import { Films } from '../FilmsComponent/Films';
import Divider from '@material-ui/core/Divider';


export function Person(props) {
  const [person, setPerson] = useState();
  const [filmLinks, setfilmLinks] = useState([]);
  let { personId } = useParams();

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/${personId}/`)
      .then((res) => {
        setPerson(res.data);
        setfilmLinks(res.data.films);
      });
  }, [setPerson, setfilmLinks]);

  if (!person) {
    return <Wrapper>Loading...</Wrapper>;
  }

  return (

    <div>
      <Link to="/"><Back>Back</Back></Link>
      <Divider />
      <Wrapper>Name: {person.name}</Wrapper>
      <Divider />
      <Wrapper>Gender: {person.gender}</Wrapper>
      <Divider />
      <Wrapper>Height: {person.height}</Wrapper>
      <Divider />
      <Wrapper>Hair Colour: {person.hair_color}</Wrapper>
      <Divider />
      <Wrapper>Mass: {person.mass}</Wrapper>
      <Divider />
      <Wrapper>Skin Color: {person.skin_color}</Wrapper>
      <Divider />
      <Wrapper>Eye Color: {person.eye_color}</Wrapper>
      <Divider />
      <Wrapper>Birth Year: {person.birth_year}</Wrapper>
      <Divider />
      <Wrapper>Homeworld: <a rel="stylesheet" href={`${person.homeworld}`}>{person.homeworld}</a></Wrapper>
      <Divider />
      <Films filmLinks={filmLinks} key={person.height} />
    </div>
  );
}
const Back = styled.div`
margin: 0 auto;
  padding: 10px;
  cursor: pointer;
  color: black;
  width: 100%;
  text-align: center;
    font-size: 20px;
    font-family: cursive;
  &:hover {
    background-color: grey;
    color: red;
  }
`;

const Wrapper = styled.div`
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
