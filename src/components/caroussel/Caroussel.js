import React, {useEffect} from "react";
import Slider from "react-slick";

const Caroussel = ({items = []}) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 250,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay : true
    };

    return <Slider {...settings}>
            {items.map((item, i) =>  <img
                key={i}
                height="100"
                width="250"
                alt=""
                className="border-blue-400 mb-2"
                src={item}
            />)}
    </Slider>
}
export default Caroussel;
