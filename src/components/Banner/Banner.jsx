"use client";
import Navbar, { navItem } from "./Navbar";
import PageTitle from "../Components/PageTitle";
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