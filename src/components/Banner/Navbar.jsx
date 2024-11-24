"use client";
import { Sling as Hamburger } from 'hamburger-react';
import { useState } from "react";
import MenuToggle from './MenuToggle';
import Link from 'next/link';
import Button from '../Components/Button';


export const navItem = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "Events",
        path: "/events"
    },
    {
        title: "Blog",
        path: "/blog"
    },
    {
        title: "Gallery",
        path: "/gallery"
    },
    {
        title: "About Us",
        path: "/aboutUs"
    }
]

const Navbar = () => {

    const [isOpen, setOpen] = useState(false)


    return (
        <div>
            <div className='lg:hidden'>
                <MenuToggle isOpen={isOpen} setOpen={setOpen} navItem={navItem}></MenuToggle>
            </div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className={isOpen ? "hidden" : "lg:hidden"}>
                        <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-5">
                        {navItem.map(item => <li key={item.path}><Link href={item.path}>{item.title}</Link></li>)}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Button text="Login"></Button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;