"use client";
import Link from "next/link";
import logo from "/public/images/logo.jpg";
import Image from "next/image";
import { navItem } from "../Banner/Navbar";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {

    return (
        <div className="bg-foreground text-white">
            <div className="border-b border-gray-400">
                <div className="flex justify-around py-12 md:w-5/6 mx-auto">
                    <div className="flex gap-4 items-center">
                        <Link className="border p-4 rounded-full text-xl hover:bg-white hover:text-foreground duration-500" href="https://www.facebook.com/bgmeauniversitybd">
                            <FaFacebookF />
                        </Link>
                        <h3 className="hidden lg:block">Facebook</h3>
                    </div>
                    <div className="flex gap-4 items-center">
                        <Link className="border p-4 rounded-full text-xl hover:bg-white hover:text-foreground duration-500" href="https://www.linkedin.com/school/bgmea-university-of-fashion-and-technology/">
                            <FaLinkedinIn />
                        </Link>
                        <h3 className="hidden lg:block">Linkedin</h3>
                    </div>
                    <div className="flex gap-4 items-center">
                        <Link className="border p-4 rounded-full text-xl hover:bg-white hover:text-foreground duration-500" href="https://x.com/BgmeaUniversity">
                            <FaXTwitter />
                        </Link>
                        <h3 className="hidden lg:block">X</h3>
                    </div>
                    <div className="flex gap-4 items-center">
                        <Link className="border p-4 rounded-full text-xl hover:bg-white hover:text-foreground duration-500" href="https://www.instagram.com/bgmeauniversity/">
                            <FaInstagram />
                        </Link>
                        <h3 className="hidden lg:block">Instagram</h3>
                    </div>
                </div>
            </div>
            <div className="md:w-5/6 mx-auto px-4 lg:px-0 pt-12">
                <div className="flex flex-col lg:flex-row gap-8 justify-around">
                    <div>
                        <Image className="rounded-2xl w-36" width="auto" height="auto" src={logo} alt="Stay connected with the BUFT Merchandising Club, your gateway to innovation and excellence in the fashion and textile industry. Join us for updates, events, and opportunities to grow your skills and network. Follow us on social media or reach out to collaborate and shape the future of merchandising. Explore, learn, and lead with BUFT Merchandising Club"></Image>
                        {/* <h3>CurveWear</h3> */}
                        <h3 className="lg:w-96 text-sm text-zinc-300 mt-5">We are a leading textile manufacturer specializing in high-quality fabrics and apparel for global markets. With a strong focus on precision, sustainability, and innovation, we strive to exceed industry standards. Our expertise lies in crafting tailored solutions to meet the unique needs of fashion brands worldwide. Partner with us for reliable service, exceptional quality, and a commitment to excellence in every thread</h3>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl font-medium">Links</h1>
                        {navItem?.map(item => <Link className="text-zinc-300" href={item.path} key={item.path}>{item.title}</Link>)}
                    </div>
                    <div className="flex flex-col gap-3">
                        <h1 className="text-3xl font-medium">Contact</h1>
                        <div className="flex items-center gap-3">
                            <span><MdEmail className="text-xl" /></span>
                            <h3 className="text-zinc-300">info@buft.edu.bd</h3>
                        </div>
                        <div className="flex items-center gap-3">
                            <span><FaPhoneSquareAlt className="text-xl" /></span>
                            <h3 className="text-zinc-300">+880 1810063355, 9606808080</h3>
                        </div>
                        <div className="flex items-center gap-3 w-80">
                            <span><FaLocationDot className="text-xl" /></span>
                            <h3 className="text-zinc-300">Nishatnagar, Turag, Dhaka 1230</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center py-16">
                <h3 className="px-3 text-zinc-300">Copyright © {new Date().getFullYear()} - All right reserved by BGMEA University of Fashion & Technology</h3>
            </div>
        </div>
    );
};

export default Footer;