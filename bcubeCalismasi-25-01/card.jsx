import React, { useState } from "react";

export default function Card(props){

    return(
        <>
            <div className="m-5 ">
                <img className="w-auto w-2/4" src={props.source} alt="" />
                <div className="">
                    <h3>{props.name}</h3>
                    <h1>{props.price}</h1>
                </div>
                <button onClick={()=>props.sepeteEkle(props.productID)} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Sepete Ekle</button>
            </div>
        </>
    )

}