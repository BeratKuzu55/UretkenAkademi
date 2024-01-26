import React from "react";
import styled from "styled-components";

export default function WordObject(props){

    const obj = props._object;
    //console.log(props._object)
    const jsonObject = obj[0];
    const hey = JSON.stringify(jsonObject)
    //console.log(hey);
    return(
        <>
            <p>merhaba {obj[0]}</p>
        </>
    )
}