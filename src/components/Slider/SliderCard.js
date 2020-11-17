import React from "react";

export default function SliderCard({id,image, name}){
    return(
        <div id={id} className="card">
            <img src={image} alt={name} className="cardImage"/>
        </div>
    )
}