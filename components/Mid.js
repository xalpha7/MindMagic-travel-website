import { SliderData } from './SliderData'
import { useState, useEffect } from 'react';

const Mid = () => {

    const [current, setCurrent] = useState(0);
    const length = SliderData.length;

    useEffect(() => {
        setInterval(() => {
            if (current === length - 1) {
                setCurrent(0)
            } else {
                setCurrent(current + 1);
            }
        }, 300000)
    }, [current])

    if (!Array.isArray(SliderData) || SliderData.length <= 0) {
        // return null if there is no data in the sliderimage.js
        return null;
    }

    return (
        <>
            <div className="mid">
                <div className="mid-writings">
                    <p>Travelling is a brutallity. It forces you to trust strangers and lose sight of all that familiar comforts of home and friends.</p> 
                    <p> You constantly off balance. Nothing id yourexcept the essential things. Air, Sleep, Dream, Sea, the Sky-all the tending towards the eternal or what we imagine of it ...</p>
                    <p> - Ceaser Pavese </p>

                </div>
                <div className='mid-img'>
                    {SliderData.map((slide, index) => {
                        return (
                            <div className={index === current ? 'slide active' : 'slide'}>
                                { index === current && (<img src={slide.image} alt="travel" className='image' />)}

                            </div>
                        );
                    })}
                </div>

            </div>
        </>
    );
}

export default Mid;