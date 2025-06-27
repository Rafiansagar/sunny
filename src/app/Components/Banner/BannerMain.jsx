'use client'; // <-- If you're in an App Router component

import React, { useRef, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Slider = dynamic(() => import('react-slick'), { ssr: false });

export default function BannerMain() {
    
    const slider1 = useRef(null);
    const slider2 = useRef(null);

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);

    useEffect(() => {
        setNav1(slider1.current);
        setNav2(slider2.current);
    }, []);

    const mainSettings = {
        asNavFor: nav2,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: false,
    };

    const thumbSettings = {
        asNavFor: nav1,
        slidesToShow: 3,
        swipeToSlide: true,
        focusOnSelect: true,
        arrows: true,
        centerMode: false,
        centerPadding: '0px',
    };

    return (
        <>
            <style>
                {`
                    .hero-slider .slider-item {
                        position: relative;
                    }
                    .hero-slider .slider-item .layer-img {
                        position: absolute;
                        right: 80px;
                        bottom: 30px;
                        transition: all 0.3s;
                        transform: rotate(0deg) translate(0px);
                    }
                    .hero-slider .slider-item .layer-img img {
                        border-radius: 50%;
                    }
                    .hero-slider .slick-slide.slick-current .slider-item .layer-img {
                        animation: sliderLayerAnimation 1s alternate;
                    }
                    @keyframes sliderLayerAnimation {
                        0% {
                            transform: rotate(45deg) translate(120px, -400px);
                        }
                        100% {
                            transform: rotate(0deg) translate(0px);
                        }
                    }
            `}
            </style>
            <Slider className='hero-slider' {...mainSettings} ref={slider1}>
                <div className='slider-item h-[964px] w-[1920px] bg-[#880808] relative overflow-hidden'>
                    <div className='bg-[rgba(255,255,255,0.1)] border-0 rounded-full w-[1079px] h-[1079px] absolute left-[-156.98px] top-[-360px] rotate-[-14.55]'></div>
                    <div className='bg-[rgba(255,255,255,0.1)] border-0 rounded-full w-[1312.52px] h-[1282.4px] left-[1534.2px] top-[300.96px] absolute rotate-[-52]'></div>
                    <div className='flex'>
                        <div className='w-[211px] h-[48px] top-[51px] left-[65px] absolute text-white'>Restaurant</div>
                        <div>
                            <input type="search" placeholder='Search...' className='w-[821px] h-[61px] top-[50px] left-[1039px] bg-[#FFFFFF] absolute rounded-b-md'/>
                        </div>
                    </div>
                    <div className='layer-img'>
                        <img src="https://placehold.co/630x630" alt="" />
                    </div>
                </div>
                <div className='slider-item h-[964px] w-[1920px] bg-[#124767] relative overflow-hidden'>
                    <div className='bg-[rgba(0,0,0,0.1)] border-0 rounded-full w-[1079px] h-[1079px] absolute left-[-156.98px] top-[-360px] rotate-[-14.55]'></div>
                    <div className='bg-[rgba(0,0,0,0.1)] border-0 rounded-full w-[1312.52px] h-[1282.4px] left-[1534.2px] top-[300.96px] absolute rotate-[-52]'></div>
                    <div className='flex'>
                        <div className='w-[211px] h-[48px] top-[51px] left-[65px] absolute text-white'>Restaurant</div>
                        <div>
                            <input type="search" placeholder='Search...' className='w-[821px] h-[61px] top-[50px] left-[1039px] bg-[#FFFFFF] absolute rounded-b-md'/>
                        </div>
                    </div>
                    <div className='layer-img'>
                        <img src="https://placehold.co/630x630" alt="" />
                    </div>
                </div>
                <div className='slider-item h-[964px] w-[1920px] bg-[#923353] relative overflow-hidden'>
                    <div className='bg-[rgba(255,255,255,0.1)] border-0 rounded-full w-[1079px] h-[1079px] absolute left-[-156.98px] top-[-360px] rotate-[-14.55]'></div>
                    <div className='bg-[rgba(255,255,255,0.1)] border-0 rounded-full w-[1312.52px] h-[1282.4px] left-[1534.2px] top-[300.96px] absolute rotate-[-52]'></div>
                    <div className='flex'>
                        <div className='w-[211px] h-[48px] top-[51px] left-[65px] absolute text-white'>Restaurant</div>
                        <div>
                            <input type="search" placeholder='Search...' className='w-[821px] h-[61px] top-[50px] left-[1039px] bg-[#FFFFFF] absolute rounded-b-md'/>
                        </div>
                    </div>
                    <div className='layer-img'>
                        <img src="https://placehold.co/630x630" alt="" />
                    </div>
                </div>
            </Slider>
            <Slider {...thumbSettings} ref={slider2}>
                <div className='h-[100px] px-2'>
                    <img src="https://placehold.co/150x100" alt="Thumb 1" className="w-full h-full object-cover rounded-md" />
                </div>
                <div className='h-[100px] px-2'>
                    <img src="https://placehold.co/150x100" alt="Thumb 2" className="w-full h-full object-cover rounded-md" />
                </div>
                <div className='h-[100px] px-2'>
                    <img src="https://placehold.co/150x100" alt="Thumb 2" className="w-full h-full object-cover rounded-md" />
                </div>
            </Slider>
        </>
    )
}
