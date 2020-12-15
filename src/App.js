import React, {useEffect, useRef, useState} from "react";
import './main.scss';
import Slider from "./components/Slider/Slider";
import Winter from "./assets/winter.jpg";
import Spring from "./assets/spring.jpg";
import Summer from "./assets/summer.jpg";
import Fall from "./assets/fall.jpg";
import Car from "./assets/car.jpg";
import Car2 from "./assets/car2.jpg";

export const App = () => {

    const cards = [
        {
            id: 0,
            name: "Winter",
            content: <img src={Winter} alt={name}/>
        },
        {
            id: 1,
            name: "Spring",
            content: <h1>Hello world</h1>
        },
        {
            id: 2,
            name: "Summer",
            content: <img src={Summer} alt={name}/>
        },
        {
            id: 3,
            name: "Fall",
            content: <img src={Fall} alt={name}/>
        },
        {
            id: 4,
            name: "Car1",
            content: <img src={Car} alt={name}/>
        },
        {
            id: 5,
            name: "Car2",
            content: <img src={Car2} alt={name}/>
        }
        ]

    return (
        <div className="mainWrapper">
            <Slider slides={cards}/>
        </div>
    )
}
