import React from "react";

export default function SliderCard({image, name}){
    return(
        <div id={id} className="card">
            <img src={image} alt={name} className="cardImage"/>
        </div>
    )
}