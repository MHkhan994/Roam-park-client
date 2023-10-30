import banner3_large from '../../assets/banner3-large.jpg'
import banner3_small from '../../assets/banner3-small.jpg'


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/effect-fade';

import { EffectFade } from 'swiper/modules';

const Banner = () => {
    return (
        <div className='rounded-lg'>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                modules={[EffectFade]}
                className="mySwiper lg:h-[55vh] h-[70vh] w-full"
            >
                <SwiperSlide className='relative max-h-[450px]'>
                    <img className='rounded-lg h-full w-full object-cover hidden lg:block' src={banner3_large} alt="" />
                    <img className='rounded-lg h-full lg:hidden w-full object-cover' src={banner3_small} alt="" />
                    <div className='absolute z-10 top-[20%] lg:top-0 h-full w-full flex items-center justify-center lg:justify-start lg:px-16 max-h-[500px]'>
                        <div className='space-y-3 bg-[#ffffff6b] backdrop-blur-sm p-4'>
                            <h1 className='text-5xl font-semibold text-gray-800'>Grab new <br></br> winter sales</h1>
                            <button className='pri-btn'>
                                shop now
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <img className='rounded-lg' src={banner3_large} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;