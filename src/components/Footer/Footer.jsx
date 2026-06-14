"use client";
import Link from "next/link";
import logo from "/public/images/trust-trade-logo.png";
import Image from "next/image";
import { navItem } from "../Banner/Navbar";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineFax, MdContactPhone } from "react-icons/md";


const Footer = () => {

    return (
        <div className="bg-thirdColor text-white">

            <div className="md:w-5/6 mx-auto px-4 lg:px-0 pt-24">
                <div className="flex flex-col lg:flex-row gap-8 justify-around">
                    <div>
                        <div>
                            <Image className="rounded-2xl w-36" width="auto" height="auto" src={logo} alt="Stay connected with the BUFT Merchandising Club, your gateway to innovation and excellence in the fashion and textile industry. Join us for updates, events, and opportunities to grow your skills and network. Follow us on social media or reach out to collaborate and shape the future of merchandising. Explore, learn, and lead with BUFT Merchandising Club"></Image>
                            <p className='font-semibold text-2xl mt-3'>Trust Trade International</p>
                        </div>
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
                            <h3 className="text-zinc-300">info@trusttradeintl.com</h3>
                        </div>
                        <div className="flex items-center gap-3">
                            <span><MdContactPhone className="text-xl" /></span>
                            <h3 className="text-zinc-300">+8802-222224659</h3>
                        </div>
                        <div className="flex items-center gap-3">
                            <span><MdOutlineFax className="text-xl" /></span>
                            <h3 className="text-zinc-300">+8802-9343628</h3>
                        </div>
                        <div className="flex items-center gap-3">
                            <span><FaPhoneSquareAlt className="text-xl" /></span>
                            <h3 className="text-zinc-300">+880 1711361268</h3>
                        </div>
                        <div className="flex items-center gap-3 w-80">
                            <span><FaLocationDot className="text-xl" /></span>
                            <h3 className="text-zinc-300">224/1 North Shahjahanpur, Shantinagar, Dhaka 1217, Bangladesh</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center py-16">
                <h3 className="px-3 text-zinc-300">Copyright © {new Date().getFullYear()} - All right reserved by Trust Trade International</h3>
            </div>
        </div>
    );
};

export default Footer;