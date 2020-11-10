import React, {useState} from "react"
import Card from "./SliderCard";

const RadioButtons = ({onChange, currentElement}) => {
    return (
        <div className="radioButtonBox">
            {[0,1,2,3].map(index => (
                <input key={index} value={index} checked={currentElement === index} onChange={onChange} type="radio" className="radioButton" />
            ))}
        </div>
    )
}


export default function Slider({items}) {

    const [currentCard, setCurrentCard] = useState(0);
    const [itemAttrs, setItemAttrs] = useState(items[0]);

    const handleRadioChange = (event) => {
        setCurrentCard(parseInt(event.target.value));
        setItemAttrs(items[event.target.value]);
        console.log(items[event.target.value]);
    }
    const handleNextClick = () => {
        const next = (currentCard + 1) % items.length;
        setItemAttrs(items[next]);
        setCurrentCard(next);
    }
    const handleBackClick = () => {
        if(currentCard === 0) {
            setItemAttrs(items[3]);
            setCurrentCard(3);
        } else {
            const back = (currentCard - 1) % items.length;
            setItemAttrs(items[back]);
            setCurrentCard(back);
        }
    }

    return (
        <>
            <div className="sliderWrapper">
                <div className="leftBox buttonBox">
                    <button className="switchButton prevBtn" onClick={handleBackClick}>
                        Back
                    </button>
                </div>
                <div className="slider">
                    <div className="cardBox">
                        <Card image={itemAttrs.content} name={itemAttrs.name}/>
                        <Card image={itemAttrs.content} name={itemAttrs.name[1]}/>
                        <Card image={itemAttrs.content} name={itemAttrs.name[2]}/>
                        <Card image={itemAttrs.content} name={itemAttrs.name[3]}/>
                    </div>
                </div>
                <div className="rightBox buttonBox" onClick={handleNextClick}>
                    <button className="switchButton nextBtn">
                        Next
                    </button>
                </div>
            </div>
            <div className="radioWrapper">
                <RadioButtons onChange={handleRadioChange} currentElement={currentCard}/>
            </div>
        </>
    )
}