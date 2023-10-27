import banner3 from '../../assets/banner3-large.jpg'

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
                className="mySwiper h-[55vh] w-full"
            >
                <SwiperSlide className='relative max-h-[500px]'>
                    <img className='rounded-lg h-full' src={banner3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded-lg' src={banner3} alt="" />
                </SwiperSlide>
                <div className='absolute z-10 top-0 h-full w-full flex items-center px-16 max-h-[500px]'>
                    <div className='space-y-3'>
                        <h1 className='text-5xl font-semibold text-gray-800'>Grab new <br></br> winter sales</h1>
                        <button className='pri-btn'>
                            shop now
                        </button>
                    </div>
                </div>
            </Swiper>
        </div>
    );
};

export default Banner;