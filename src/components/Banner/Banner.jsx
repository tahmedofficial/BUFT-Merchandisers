"use client";
import Image from "next/image";
import Navbar, { navItem } from "./Navbar";
import logo from "../../images/BMC-logo-removebg.png"
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import PageTitle from "../Components/PageTitle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BannerTitle from "../Components/BannerTitle";


const Banner = () => {

    const pathName = usePathname();

    return (
        <div>
            <div className="hidden lg:block">
                <div className="grid grid-cols-3 items-center py-6">
                    <div className="flex items-center gap-8 justify-center">
                        <h2 className="text-btnColor">Follow us —</h2>
                        <div className="flex gap-3 items-center">
                            <Link href="https://www.facebook.com/buftmerchandisingclub">
                                <FaFacebookF className="hover:text-btnColor duration-300 text-xl" />
                            </Link>
                            <Link href="https://www.linkedin.com/company/buft-merchandising-club/">
                                <FaLinkedinIn className="hover:text-btnColor duration-300 text-xl" />
                            </Link>
                            <Link href="">
                                <FaXTwitter className="hover:text-btnColor duration-300 text-xl" />
                            </Link>
                            <Link href="https://www.instagram.com/buft.bmc/">
                                <FaInstagram className="hover:text-btnColor duration-300 text-xl" />
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Image src={logo} width="200" height="auto" alt="Stay connected with the BUFT Merchandising Club, your gateway to innovation and excellence in the fashion and textile industry. Join us for updates, events, and opportunities to grow your skills and network. Follow us on social media or reach out to collaborate and shape the future of merchandising. Explore, learn, and lead with BUFT Merchandising Club"></Image>
                    </div>
                    <div className="flex justify-center">
                        <div className="bg-gray-600 h-16 w-16 rounded-full flex items-center justify-center text-white">
                            <h3>p</h3>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar></Navbar>
            {pathName === "/" ? <BannerTitle title="Home" description="Explore our platform"></BannerTitle> : undefined}

            {navItem.map(item => <div key={item.path}>
                {item.path === pathName ? <div>
                    {item.path === "/" ? undefined : <PageTitle title={item.title} description={item.description}></PageTitle>}
                </div> : undefined}
            </div>)}
        </div>
    );
};

export default Banner;