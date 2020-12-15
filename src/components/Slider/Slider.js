import React, {useEffect, useRef, useState} from "react"
import Card from "./SliderCard";

const RadioButtons = ({slides, onChange, currentElement}) => {

    return (
        <div className="radioButtonBox">
            {slides.map(slide =>
                <input key={slide.id} value={slide.id} checked={currentElement === slide.id} onChange={onChange} type="radio"
                       className="radioButton"/>
            )}
        </div>
    )
}

export default function Slider(slides) {

    const cards = slides.slides;

    const [currentCard, setCurrentCard] = useState(0);
    const cardBox = useRef();
    const [startX,setStartX] = useState(null);
    const [diffX,setDiffX] = useState(0);
    const [shiftX,setShiftX] = useState(0);

    useEffect(() => {
        cardBox.current.style.marginLeft = -(cardBox.current.lastChild.getBoundingClientRect().width * (currentCard + 1)) + "px";
    }, [currentCard]);

    const handleRadioChange = (event) => {
        setCurrentCard(parseInt(event.target.value));
    }
    const handleNextClick = () => {
        if (currentCard === cards.length - 1) {
            setCurrentCard(0);
        } else {
            setCurrentCard(currentCard + 1);
        }
    }
    const handleBackClick = () => {
        if (currentCard === 0) {
            setCurrentCard(cards.length-1);
        } else {
            setCurrentCard(currentCard - 1);
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
                <div className="sliderWrapper__buttonBox">
                    <button className="sliderWrapper__button" onClick={handleBackClick}>
                        Back
                    </button>
                </div>
                <div className="sliderWrapper__contentBox">
                    <div ref={cardBox} onTouchStart={handleSwipeStart} onTouchMove={handleSwipeMove} onTouchEnd={handleSwipeEnd} className="sliderWrapper__contentSlidesBox">
                            <Card content={cards[cards.length-1].content} name={cards[cards.length-1].name}/>
                                {cards.map(card => (
                                    <Card
                                        key={card.id}
                                        content={card.content}
                                    />
                                ))}
                            <Card content={cards[0].content} name={cards[0].name}/>
                    </div>
                </div>
                <div className="sliderWrapper__buttonBox" onClick={handleNextClick}>
                    <button className="sliderWrapper__button">
                        Next
                    </button>
                </div>
            </div>
            <div className="radioWrapper">
                <RadioButtons slides={cards} onChange={handleRadioChange} currentElement={currentCard}/>
            </div>
        </>
    )
}