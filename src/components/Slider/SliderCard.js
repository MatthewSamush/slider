import React from "react";

export default function SliderCard({image, name}){
    return(
        <div className="card">
            <img src={image} alt={name} className="cardImage"/>
        </div>
    )
}