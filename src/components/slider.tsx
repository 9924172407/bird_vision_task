import React, { useState } from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ProductImageSliderProps } from '../types/product';

const ProductImageSlider: React.FC<ProductImageSliderProps> = ({ images }) => {
    const [slider, setSlider] = useState<Slider | null>(null);

    const settings: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        appendDots: () => (
            <div className='pt-7' style={{ display: 'flex', justifyContent: 'center' }}>
                {images.map((image, index) => (
                    <div key={index} onClick={() => slider?.slickGoTo(index)}>
                        <img src={image} alt={`Product Image ${index + 1}`} className='rounded-lg  p-2 m-2 h-20 w-20' />
                    </div>
                ))}
            </div>
        ),
    };

    return (
        <Slider ref={sliderRef => setSlider(sliderRef)} {...settings}>
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image} alt={`Product Image ${index + 1}`} />
                </div>
            ))}
        </Slider>
    );
};

export default ProductImageSlider;
