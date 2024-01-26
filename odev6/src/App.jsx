import React from "react"
import Navbar from "./components/navbar"
import { createGlobalStyle } from 'styled-components'
import WordObject from "./components/wordobject"
import { useState, useEffect } from "react"
import WordInputComponent from "./components/input"
import SearchButtonComponent from "./components/button"
const GlobalStyle = createGlobalStyle`
body{
  margin:0;
  background-color : #EDF3EA;
}`
//https://api.dictionaryapi.dev/api/v2/entries/en/<word>
function App() {
  const [searhedWord, setSearchedWord] = useState("");
  const [wordObject, setWordObject] = useState({});
  
  function handleTyping(e) {
    setSearchedWord(e.target.value);
  }

  function getTheWord() {
    console.log(searhedWord);
    getObjectFromApi(searhedWord);
  }
  

  async function getObjectFromApi(selam) {
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${selam}`);
      const data = await response.json();
      setWordObject(data);
      console.log(wordObject);
    } catch (error) {
      console.error("API :", error);
    }
  }
  

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Navbar></Navbar>
      <WordInputComponent
        handleTyping={handleTyping}
      ></WordInputComponent>
      <SearchButtonComponent
        setWord={getTheWord}
        kelime = {searhedWord}
      ></SearchButtonComponent>
      <WordObject
        _object={wordObject}
      ></WordObject>
    </>
  )
}

export default App
