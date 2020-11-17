import React from "react";
import Winter from "../../assets/winter.jpg";
import Spring from "../../assets/spring.jpg";
import Summer from "../../assets/summer.jpg";
import Fall from "../../assets/fall.jpg";
import SliderContent from "./SliderContent";

export default function SliderCard() {
    const cards = [
        {
            name: "Winter",
            content: Winter
        },
        {
            name: "Spring",
            content: Spring
        },
        {
            name: "Summer",
            content: Summer
        },
        {
            name: "Fall",
            content: Fall
        }
    ]
    return (
        <div className="mainWrapper">
            <SliderContent cards={cards}/>
        </div>
    )
}