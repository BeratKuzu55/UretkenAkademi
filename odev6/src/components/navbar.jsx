import React, { useEffect, useState } from "react";
import WordInputComponent from "./input";
import styled from 'styled-components';
import SearchButtonComponent from "./button";

const NavbarDiv = styled.div`
background-color:#C2C9BF;
margin:0;
`;

export default function Navbar(props){


    return(
        <>
            <NavbarDiv>
                <h1>Dictionary Eng</h1>
                <ul>
                    <li>selam</li>
                </ul>
            </NavbarDiv>
        </>
    )
}