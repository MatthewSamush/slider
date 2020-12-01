import React, {useEffect, useRef, useState} from "react"
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

export default function SliderContent({children}) {

    const [currentCard, setCurrentCard] = useState(0);
    const [loop, setLoop] = useState(false);
    const [slideSpeed, setSlideSpeed] = useState("all 0.5s");
    const cardBox = useRef(null);
    const [startX,setStartX] = useState(null);
    const [diffX,setDiffX] = useState(0);
    const [shiftX,setShiftX] = useState(0)

    useEffect(() => {
        cardBox.current.style.marginLeft = -(document.getElementsByClassName("card").item(0).clientWidth * (currentCard + 1)) + "px";
        cardBox.current.style.transition = slideSpeed;
    }, [currentCard]);
    useEffect(() => {
        cardBox.current.style.marginLeft = -(document.getElementsByClassName("card").item(0).clientWidth * (currentCard + 1)) + "px";
        cardBox.current.style.transition = slideSpeed;
        return setLoop(false);
    }, [loop]);

    const handleRadioChange = (event) => {
        setCurrentCard(parseInt(event.target.value));
        setSlideSpeed("all 0.5s");
    }
    const handleNextClick = () => {
        if (currentCard === children.length - 1) {
            setCurrentCard(currentCard + 1)
            setLoop(true);
            setTimeout(() => {
                setSlideSpeed("all 0.0s");
                return setCurrentCard(0);
            }, 500);
            setSlideSpeed("all 0.5s");
        } else {
            setCurrentCard(currentCard + 1);
            setSlideSpeed("all 0.5s");
        }
    }
    const handleBackClick = () => {
        if (currentCard === 0) {
            setCurrentCard(currentCard - 1)
            setLoop(true);
            setTimeout(() => {
                setSlideSpeed("all 0.0s");
                setCurrentCard(3);
            }, 500);
            setSlideSpeed("all 0.5s");
        } else {
            console.log(children);
            setCurrentCard(currentCard - 1);
            setSlideSpeed("all 0.5s");
        }
    };

    const handleSwipeStart = (event) => {
        setStartX(event.touches[0].clientX);
    }
    const handleSwipeMove = (event) => {
        setDiffX(event.touches[0].clientX);
        if(startX-diffX === 50 || -50) {
            setShiftX(startX-diffX);
        }
    }

    const handleSwipeEnd = () => {
        if(shiftX >= 50){
            handleNextClick();
            setShiftX(0);
        } else if (shiftX<= -50){
            handleBackClick();
            setShiftX(0);
        } else if (shiftX===startX){
            return;
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
                    <div ref={cardBox} onTouchStart={handleSwipeStart} onTouchMove={handleSwipeMove} onTouchEnd={handleSwipeEnd} className="cardBox">
                        <Card image={children[3].content} name={children[3].name}/>
                        <Card image={children[0].content} name={children[0].name}/>
                        <Card image={children[1].content} name={children[1].name}/>
                        <Card image={children[2].content} name={children[2].name}/>
                        <Card image={children[3].content} name={children[3].name}/>
                        <Card image={children[0].content} name={children[0].name}/>
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