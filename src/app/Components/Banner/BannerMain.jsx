'use client'; // <-- If you're in an App Router component

import React from 'react';
import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Slider = dynamic(() => import('react-slick'), { ssr: false });

export default function BannerMain() {
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <>
            <div className='h-[964px] w-[1920px] bg-[#880808] relative overflow-hidden'>
                <div className='bg-[#A52A2A] border-0 rounded-full w-[1079px] h-[1079px] absolute left-[-156.98px] top-[-360px] rotate-[-14.55]'></div>
                <div className='bg-[#A52A2A] border-0 rounded-full w-[1312.52px] h-[1282.4px] left-[1534.2px] top-[300.96px] absolute rotate-[-52]'></div>
                <div className='flex'>
                    <div className='w-[211px] h-[48px] top-[51px] left-[65px] absolute text-white'>Restaurant</div>
                <div>
                    <input type="search" placeholder='Search...' className='w-[821px] h-[61px] top-[50px] left-[1039px] bg-[#FFFFFF] absolute rounded-b-md'/>
                </div>
                </div>
            </div>

            <Slider {...settings}>
                <div><h3 className="bg-gray-800 text-white p-8">Slide 1</h3></div>
                <div><h3 className="bg-gray-800 text-white p-8">Slide 2</h3></div>
                <div><h3 className="bg-gray-800 text-white p-8">Slide 3</h3></div>
            </Slider>
        </>
    )
}
