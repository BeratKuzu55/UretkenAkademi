import React from "react";

export default function Sepet(props) {

    const sepet = props.sepetARR;
    console.log(props.sepetARR);
    console.log(sepet);
    const sepet_toplami = () => {
        var toplam = 0;
        for (let i = 0; i < sepet.length; i++) {
            toplam += sepet[i].price;
        }
        console.log(toplam);
        return toplam;
    }
    return (
        <>
        <div className="">
            <h1 className="">Sepet</h1>
            <h1>Sepet Toplami : {sepet_toplami()}</h1>
        </div>
        </>
    )
}