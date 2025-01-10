import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useRef } from 'react';
import Image from 'next/image';
import bannerImg from "../../../public/images/banner-img.jpg"
import Button from './Button';
import Link from 'next/link';

const BannerTitle = () => {

    const swiperRef = useRef(null);

    const bannerContent = [
        {
            title: "Premium Textile Manufacturer for Global Brands",
            description: "Our factory specializes in delivering premium-quality textiles, catering to renowned global brands. With a focus on innovation and sustainability, we ensure every product meets the highest standards of excellence"
        },
        {
            title: "High-Quality Apparel for Leading Fashion Brands",
            description: "As a reliable supplier for international fashion leaders, we craft high-quality apparel and textiles designed to meet global standards. Partner with us for unmatched expertise and commitment"
        },
        {
            title: "Innovating Textile Manufacturing for Fashion Giants",
            description: "We combine craftsmanship with cutting-edge technology to produce world-class textiles for industry giants. We bring your fashion ideas to life"
        }
    ]

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
                        {
                            bannerContent.map((content, length) => <SwiperSlide key={length}>
                                <div>
                                    <div className="space-y-2">
                                        <h1 className="text-2xl">{content.title}</h1>
                                        <h3 className='text-sm'>{content.description}</h3>
                                    </div>
                                    <div className='py-5 hidden lg:block'>
                                        <Link href="/aboutUs"><Button text="About"></Button></Link>
                                    </div>
                                </div>
                            </SwiperSlide>)
                        }
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
                    {
                        bannerContent.map((content, length) => <SwiperSlide key={length}>
                            <div className='py-10'>
                                <div className="space-y-4">
                                    <h1 className="text-3xl lg:text-5xl">{content.title}</h1>
                                    <h3>{content.description}</h3>
                                </div>
                                <div className='mt-5'>
                                    <Link href="/aboutUs"><Button text="About"></Button></Link>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default BannerTitle;