import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import './Carousel.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

//images from /assets
import hongKongImg from '../../assets/hong_kong.jpg'
import makaoImg from '../../assets/macao.png'
import japanImg from '../../assets/japan.png'
import lasVegasImg from '../../assets/las_vegas.png'


export default function MyCarousel() {
  return (
    <Carousel>
        <div>
            <img src={hongKongImg} />
            <p className="legend">Honk Hong</p>
        </div>
        <div>
            <img src={makaoImg} />
            <p className="legend">Makao</p>
        </div>
        <div>
            <img src={japanImg} />
            <p className="legend">Japan</p>
        </div>
        <div>
            <img src={lasVegasImg} />
            <p className="legend">Las Vegas</p>
        </div>

    </Carousel>
  )
}
