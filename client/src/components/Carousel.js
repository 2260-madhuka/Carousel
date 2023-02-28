import React, { useEffect, useState } from 'react'
import './Carousel.css';

function Carousel(props) {

    const [carouselData, setCarouselData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3600/api/carousel')
            .then(results => results.json())
            .then(data => {
                setCarouselData(data)
                console.log(data, 'madhuka')
            });
    }, []);

    return (

        <div className="slider">
            {carouselData.map((item, index) => {
                return (
                    <div key={index}>
                        <div className="slide" >
                            <img
                                src={item.image}
                            />

                            <h1 className='titleStyle'>{item.title}</h1>
                            <h2 className='SubTitleStyle'>{item.subTitle}</h2>
                        </div>
                        <button className="btn btn-next"></button>
                        <button className="btn btn-prev"></button>
                    </div>
                )
            })}

        </div>

    )
}

export default Carousel