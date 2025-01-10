"use client";
import Image from "next/image";
import Navbar, { navItem } from "./Navbar";
import profileImg from "/public/images/profile-img.webp";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import PageTitle from "../Components/PageTitle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BannerTitle from "../Components/BannerTitle";
import { useEffect, useState } from "react";


const Banner = () => {

    const pathName = usePathname();
    const [showImgBg, setShowImgBg] = useState(false);

    const parallaxStyle = {
        backgroundImage: `url("/images/banner-img.jpg")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        animation: 'bgZoom 10s infinite alternate',
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setShowImgBg(true);
            } else {
                setShowImgBg(false);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div style={showImgBg ? parallaxStyle : undefined}>
            <div className="lg:bg-black lg:bg-opacity-30">
                <div className="hidden lg:block">
                    <div className="flex justify-around py-20">
                        <div className="flex items-center gap-8 justify-center">
                            <h2 className="text-btnColor">Follow us —</h2>
                            <div className="flex gap-3 items-center text-white">
                                <Link href="https://www.facebook.com/buftmerchandisingclub">
                                    <FaFacebookF className="hover:text-btnColor duration-300 text-xl" />
                                </Link>
                                <Link href="https://www.linkedin.com/company/buft-merchandising-club/">
                                    <FaLinkedinIn className="hover:text-btnColor duration-300 text-xl" />
                                </Link>
                                <Link href="http://preview.themeforest.net/item/lamaro-yacht-club-wordpress-theme/full_screen_preview/23080232?_ga=2.59328554.64200146.1732307708-1977593532.1732307708">
                                    <FaXTwitter className="hover:text-btnColor duration-300 text-xl" />
                                </Link>
                                <Link href="https://www.instagram.com/buft.bmc/">
                                    <FaInstagram className="hover:text-btnColor duration-300 text-xl" />
                                </Link>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <Image className="rounded-full w-14 h-14" src={profileImg} width="auto" height="auto" alt="profile picture"></Image>
                        </div>
                    </div>
                </div>
                <Navbar></Navbar>
                {pathName === "/" ? <BannerTitle></BannerTitle> : undefined}

                {navItem.map(item => <div key={item.path}>
                    {item.path === pathName ? <div>
                        {item.path === "/" ? undefined : <PageTitle title={item.title} description={item.description}></PageTitle>}
                    </div> : undefined}
                </div>)}
            </div>
        </div>
    );
};

export default Banner;