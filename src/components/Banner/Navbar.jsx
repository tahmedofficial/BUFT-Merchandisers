"use client";
import { Sling as Hamburger } from 'hamburger-react';
import { useState } from "react";
import MenuToggle from './MenuToggle';
import Link from 'next/link';
import Button from '../Components/Button';
import { usePathname } from 'next/navigation';
import logo from "../../images/BMC-logo-removebg.png";
import Image from 'next/image';


export const navItem = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "Events",
        description: "Discover upcoming events",
        path: "/events"
    },
    {
        title: "Blog",
        description: "Read our latest blogs",
        path: "/blog"
    },
    {
        title: "Gallery",
        description: "View our gallery",
        path: "/gallery"
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
        <div className='md:w-5/6 mx-auto bg-white py-1'>
            <div className='lg:hidden'>
                <MenuToggle isOpen={isOpen} setOpen={setOpen} pathName={pathName}></MenuToggle>
            </div>
            <div className="navbar">
                <div className="navbar-start">
                    <div className={isOpen ? "hidden text-black" : "lg:hidden text-black"}>
                        <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-10 text-lg">
                        {navItem.map(item => <li className={item.path === pathName ? "text-btnColor" : ""} key={item.path}><Link href={item.path}>{item.title}</Link></li>)}
                    </ul>
                </div>
                <div className='lg:hidden'>
                    <Image src={logo} width="80" height="auto" alt='Stay connected with the BUFT Merchandising Club, your gateway to innovation and excellence in the fashion and textile industry. Join us for updates, events, and opportunities to grow your skills and network. Follow us on social media or reach out to collaborate and shape the future of merchandising. Explore, learn, and lead with BUFT Merchandising Club'></Image>
                </div>
                <div className="navbar-end">
                    <Button text="Login"></Button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;