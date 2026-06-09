"use client";
import { Sling as Hamburger } from 'hamburger-react';
import { useState } from "react";
import MenuToggle from './MenuToggle';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from "/public/images/trust-trade-logo.png";
import Image from 'next/image';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";


export const navItem = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "Sourcing & Apparel",
        description: "Our latest items",
        path: "/products"
    },
    {
        title: "Industrial Chemicals",
        description: "Get our services",
        path: "/chemicals"
    },
    {
        title: "About Us",
        description: "About our club",
        path: "/aboutUs"
    },
    {
        title: "Contact",
        description: "Get in touch",
        path: "/contactUs"
    }
]


const Navbar = () => {

    const [isOpen, setOpen] = useState(false);
    const pathName = usePathname();


    return (
        <div className='bg-white'>
            <div className='md:w-5/6 mx-auto text-primaryColor py-1'>
                <div className='lg:hidden'>
                    <MenuToggle isOpen={isOpen} setOpen={setOpen} pathName={pathName}></MenuToggle>
                </div>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className={isOpen ? "hidden text-primaryColor" : "lg:hidden text-primaryColor"}>
                            <Hamburger size={22} toggled={isOpen} toggle={setOpen} />
                        </div>
                        <div className='hidden lg:block'>
                            <Image className='m-auto' src={logo} width="80" height="auto" alt='Trust trade logo'></Image>
                            <p className='text-lg font-semibold'>Trust Trade International</p>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="flex gap-10 text-lg">
                            {navItem.map(item => <li className={item.path === pathName ? "text-seondaryColor px-2" : "hover:bg-white hover:text-thirdColor duration-300 px-2 rounded-lg"} key={item.path}><Link href={item.path}>{item.title}</Link></li>)}
                        </ul>
                    </div>
                    <div className='lg:hidden'>
                        <Image src={logo} width="80" height="auto" alt='Stay connected with the BUFT Merchandising Club, your gateway to innovation and excellence in the fashion and textile industry. Join us for updates, events, and opportunities to grow your skills and network. Follow us on social media or reach out to collaborate and shape the future of merchandising. Explore, learn, and lead with BUFT Merchandising Club'></Image>
                        <p className='ml-3 font-semibold text-lg'>Trust Trade International</p>
                    </div>
                    <div className="navbar-end">
                        <div className="hidden lg:block py-2">
                            <div className='text-thirdColor mt-2'>
                                <div className="flex items-center gap-3">
                                    <span><MdEmail className="text-xl" /></span>
                                    <h3>info@trusttrade.com</h3>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span><FaPhoneSquareAlt className="text-xl" /></span>
                                    <h3>+880 1763374567</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;