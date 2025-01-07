"use client";
import { stagger, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";
import { Sling as Hamburger } from 'hamburger-react';
import logo from "/public/images/logo.jpg"
import { navItem } from "./Navbar";
import Link from "next/link";
import Image from "next/image";


const useMenuAnimation = (isOpen) => {

    const [scope, animate] = useAnimate();

    useEffect(() => {
        const menuAnimations = isOpen
            ? [
                [
                    "nav",
                    { transform: "translateX(-0%)" },
                    { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 }
                ],
                [
                    "li",
                    { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
                    { delay: stagger(0.05), at: "-0.1" }
                ]
            ]
            : [
                [
                    "li",
                    { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
                    { delay: stagger(0.05, { from: "last" }), at: "<" }
                ],
                ["nav", { transform: "translateX(-120%)" }, { at: "0.1" }]
            ];

        animate([
            [
                "path.top",
                { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
                { at: "<" }
            ],
            ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
            [
                "path.bottom",
                { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
                { at: "<" }
            ],
            ...menuAnimations
        ]);
    }, [isOpen, animate]);

    return scope;
}

const MenuToggle = ({ isOpen, setOpen, pathName }) => {

    const [isClosed, setClosed] = useState(false)
    const scope = useMenuAnimation(isOpen);

    useEffect(() => {
        const timer = setTimeout(() => {
            setClosed(true);
        }, 900);

        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            clearTimeout(timer);
            document.body.classList.remove("overflow-hidden");
        };

    }, [isOpen]);

    return (
        <div ref={scope}>
            <nav className={isClosed ? "bg-foreground absolute z-10 w-full h-full px-5" : "hidden"}>
                <div className="relative">
                    <div className="flex justify-center py-14">
                        <Image src={logo} width="150" height="auto" alt='Stay connected with the BUFT Merchandising Club, your gateway to innovation and excellence in the fashion and textile industry. Join us for updates, events, and opportunities to grow your skills and network. Follow us on social media or reach out to collaborate and shape the future of merchandising. Explore, learn, and lead with BUFT Merchandising Club'></Image>
                    </div>
                    <div className="absolute top-16 text-white bg-btnColor">
                        <Hamburger size={24} toggled={isOpen} toggle={setOpen} />
                    </div>
                </div>
                <ul className="space-y-2 text-white">
                    {navItem.map(item => <li onClick={() => setOpen(false)} className={item.path === pathName ? "bg-btnColor py-2 px-3" : ""} style={{ transformOrigin: '-20px 50%' }} key={item.path}>
                        <Link href={item.path}>{item.title}</Link>
                    </li>)}
                </ul>
            </nav>
        </div>
    );
};

export default MenuToggle;