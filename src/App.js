import React from "react";
import Slider from "./components/Slider/Slider";
import './main.scss';
import Winter from "./assets/winter.jpg";
import Spring from "./assets/spring.jpg";
import Summer from "./assets/summer.jpg";
import Fall from "./assets/fall.jpg";

export const App = () => {

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
            <Slider items={cards}/>
        </div>
    )
}
