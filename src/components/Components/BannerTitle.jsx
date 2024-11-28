import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useRef } from 'react';
import Image from 'next/image';
import bannerImg from "../../../public/images/banner-img.jpg"
import Button from './Button';

const BannerTitle = () => {

    const swiperRef = useRef(null);

    return (
        <div className="text-center space-y-3 text-white">
            <div className='relative lg:hidden'>
                <div>
                    <Image className='w-full' src={bannerImg} width="auto" height="auto" alt='Dare to dream bigger with BUFT Merchandising Club. From cutting-edge learning to exclusive networking, this is where ambition meets opportunity'></Image>
                </div>
                <div className='absolute top-0 bg-[#00000060] w-full h-full pt-4'>
                    <Swiper
                        ref={swiperRef}
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        navigation={false}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div>
                                <div className="space-y-2">
                                    <h1 className="text-2xl">Rise Above, Reach Beyond</h1>
                                    <h3 className='text-sm'>Dare to dream bigger with BUFT Merchandising Club. From cutting-edge learning to exclusive networking, this is where ambition meets opportunity</h3>
                                </div>
                                <div className='py-5'>
                                    <Button text="About"></Button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className='space-y-2'>
                                    <h1 className="text-2xl">Your Gateway to Global Impact</h1>
                                    <h3 className='text-sm'>Join a community that turns ideas into reality. At BUFT Merchandising Club, we empower visionaries to excel and leave a mark in the global textile and apparel industry</h3>
                                </div>
                                <div className='py-5'>
                                    <Button text="About"></Button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className='space-y-2'>
                                    <h1 className="text-2xl">Where Passion Meets Opportunity</h1>
                                    <h3 className='text-sm'>Discover a community that fuels your ambition. Dive into events, workshops, and endless learning with BUFT Merchandising Club</h3>
                                </div>
                                <div className='py-5'>
                                    <Button text="About"></Button>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className='hidden lg:block py-16'>
                <Swiper
                    ref={swiperRef}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='py-10'>
                            <div className="space-y-4">
                                <h1 className="text-3xl lg:text-5xl">Rise Above, Reach Beyond</h1>
                                <h3>Dare to dream bigger with BUFT Merchandising Club. From cutting-edge learning to exclusive networking, this is where ambition meets opportunity</h3>
                            </div>
                            <div className='mt-5'>
                                <Button text="About"></Button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="py-10">
                            <div className='space-y-4'>
                                <h1 className="text-3xl lg:text-5xl">Your Gateway to Global Impact</h1>
                                <h3>Join a community that turns ideas into reality. At BUFT Merchandising Club, we empower visionaries to excel and leave a mark in the global textile and apparel industry</h3>
                            </div>
                            <div className='mt-5'>
                                <Button text="About"></Button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="py-10">
                            <div className='space-y-4'>
                                <h1 className="text-3xl lg:text-5xl">Where Passion Meets Opportunity</h1>
                                <h3>Discover a community that fuels your ambition. Dive into events, workshops, and endless learning with BUFT Merchandising Club</h3>
                            </div>
                            <div className='mt-5'>
                                <Button text="About"></Button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default BannerTitle;