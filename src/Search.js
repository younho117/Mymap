import React, { useState } from "react";
import styled from "styled-components"
import Map from "./Map";

function SearchPlace() {
  const [inputText, setInputText] = useState("");
  const [place, setPlace] = useState("");

  function onChange(e) {
    setInputText(e.target.value);
  }

  function handleSubmit (e) {
    e.preventDefault();
    setPlace(inputText);
    setInputText("");
  }

  return (
    <>
    <Map searchPlace={place}></Map>
    <Searchcontents>
        <form className="inputForm" onSubmit={handleSubmit}>
            <input
                value = {inputText}
                id = "Search"
                placeholder="Search Place..."
                onChange={onChange}
            />
            <button type="submit">검색</button> 
            <div> <b>input text :</b> {inputText}</div>
            <div> <b>place :</b> {place} </div>
        </form>
    </Searchcontents>
    
     
    </>
  );
};

const Searchcontents = styled.div`
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    width:250px;
    margin:10px 0 30px 10px;
    padding:5px;
    overflow-y:auto;
    background:rgba(255, 255, 255, 0.7);
    z-index: 1;
    font-size:12px;
    border-radius: 10px;
`;

export default SearchPlace;