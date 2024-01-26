import styled from "styled-components";

const WordInput = styled.input`

    padding: 0;
    margin: 0;
    box-sizing:border-box;
  
  
    height:55px;
    border: none;
    outline:none;
    font-size: 1em;
    font-weight: 500;
    padding: 0 7px;
    background: #393e46;
    transition: .3s ease;
    color: #4ecca3;
  

  .form-control:focus{
    box-shadow: inset 0 0 100px rgba(0,0,0,.2);
  }
  background-color: white;
  opacity:0.9;
  color: black;
  width: 30%;
`

export default function WordInputComponent(props){

    return(
        <>
            <WordInput onChange={props.handleTyping} className="form-control" type="text" placeholder="type to research"></WordInput>
        </>
    )
}