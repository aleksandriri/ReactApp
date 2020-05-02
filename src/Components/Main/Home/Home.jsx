import React from 'react';
import style from './Home.module.css';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import slide_1 from './../../../img/slide-1.png'

const CarouselSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    swipeToSlide: true
};

const Home = () => {
    return (
        <div className={style.carousel}>
            <Carousel effect="fade" {...CarouselSettings} className={style.ant_carousel}>
                <div className={style.slick_slide}>
                    <img src={slide_1} alt="Slide 1"/>
                </div>
                <div className={style.slick_slide}>
                    <h3>2</h3>
                </div>
                <div className={style.slick_slide}>
                    <h3>3</h3>
                </div>
                <div className={style.slick_slide}>
                    <h3>4</h3>
                </div>
                <div className={style.slick_slide}>
                    <h3>4</h3>
                </div>
            </Carousel>
        </div>
    );
};

export default Home;