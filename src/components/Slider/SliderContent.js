import React, {useEffect, useState} from "react"
import Card from "./SliderCard";

const RadioButtons = ({onChange, currentElement}) => {
    return (
        <div className="radioButtonBox">
            {[0, 1, 2, 3].map(index => (
                <input key={index} value={index} checked={currentElement === index} onChange={onChange} type="radio"
                       className="radioButton"/>
            ))}
        </div>
    )
}


export default function SliderContent({cards}) {
    const [currentCard, setCurrentCard] = useState(0);
    const [loop,setLoop] = useState(false);
    const [slideSpeed,setSlideSpeed] = useState("all 0.5s");
    useEffect(() => {
                document.getElementById("cardBox").style.marginLeft = -(document.getElementsByClassName("card").item(0).clientWidth * (currentCard + 1)) + "px";
                document.getElementById("cardBox").style.transition = slideSpeed;
    }, [currentCard]);
    useEffect(() => {
            document.getElementById("cardBox").style.marginLeft = -(document.getElementsByClassName("card").item(0).clientWidth * (currentCard + 1)) + "px";
            document.getElementById("cardBox").style.transition = slideSpeed;
        return setLoop(false);
    },[loop]);

    const handleRadioChange = (event) => {
        setCurrentCard(parseInt(event.target.value));
    }
    const handleNextClick = () => {
        if (currentCard === cards.length-1) {
            setCurrentCard(currentCard+1)
            setLoop(true);
            setTimeout(()=>{
                setSlideSpeed("all 0.0s");
                return setCurrentCard(0);
            },501);
            setSlideSpeed("all 0.5s");
        } else {
            setCurrentCard(currentCard + 1);
            setSlideSpeed("all 0.5s");
        }
    }
    const handleBackClick = () => {
        if (currentCard === 0) {
            setCurrentCard(currentCard-1)
            setLoop(true);
            setTimeout(()=>{
                setSlideSpeed("all 0.0s");
                setCurrentCard(3);
            },501);
            setSlideSpeed("all 0.5s");
        } else {
            setCurrentCard(currentCard - 1);
            setSlideSpeed("all 0.5s");
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
                    <div id="cardBox" className="cardBox">
                        <Card image={cards[3].content}/>
                        <Card image={cards[0].content}/>
                        <Card image={cards[1].content}/>
                        <Card image={cards[2].content}/>
                        <Card image={cards[3].content}/>
                        <Card image={cards[0].content}/>
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