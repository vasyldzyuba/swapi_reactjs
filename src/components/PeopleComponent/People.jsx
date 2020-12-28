import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';


export function People() {
  const [people, setPeople] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  function getSearchResults() {
    const results = !searchTerm
      ? people
      : people.filter(person =>
        person.name.toString().toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );
    setPeople(results);
  }

  useEffect(() => {
    !searchTerm ? axios.get('https://swapi.dev/api/people/')
      .then((res) => {
        setPeople(res.data.results);
      }) : getSearchResults();
  }, [setPeople, searchTerm]);




  return (
    <SearchWrapper className="text_field_container">
      <TextField id="outlined-basic" label="Search by person name" variant="outlined" type="text"
        className="search_input"
        value={searchTerm}
        onChange={handleChange} />

      <div>{people.map((per, index) => {
        const urlArr = per.url.split("/");
        const id = urlArr[urlArr.length - 2];
        return (
          <Link to={`/${id}`} key={id}><Wrapper>{per.name}</Wrapper><Divider /></Link>);
      })}</div>
    </SearchWrapper>
  );
}

const SearchWrapper = styled.div`
text-align: center;
`

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
    background-color: skyblue;
    color: white;
  }
`;