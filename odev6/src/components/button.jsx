import React from "react";
import styled from "styled-components";

const SearchButton = styled.button`
 
  appearance: none;
  background-color: transparent;
  border: 2px solid #1A1A1A;
  border-radius: 5px;
  box-sizing: border-box;
  color: #3B3B3B;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 16px;
  
  line-height: normal;
  min-height: 30px;
  min-width: 0;
  outline: none;
  padding: 16px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 15%;
  will-change: transform;
margin-bottom : 25px;

&:disabled{ 
  pointer-events: none;
}
 
&:hover{
  color: #fff;
  background-color: #1A1A1A;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);

}
&:active {
  box-shadow: none;
  transform: translateY(0);
}
`
export default function SearchButtonComponent(props){
    return(
        <SearchButton onClick={() => props.setWord(props.kelime)}>Search</SearchButton>
    )
}