"use client";
import { stagger, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";
import { Sling as Hamburger } from 'hamburger-react';
import { navItem } from "./Navbar";
import Link from "next/link";

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
                ["nav", { transform: "translateX(-100%)" }, { at: "0.1" }]
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
            <nav className={isClosed ? "bg-black bg-opacity-80 absolute z-10 w-full md:w-80 md:rounded-r-lg h-full pl-5" : "hidden"}>
                <ul className="space-y-2 text-white">
                    <li className="mt-5 [transform-origin:-20px_50%]"><Hamburger size={20} toggled={isOpen} toggle={setOpen} /></li>
                    {navItem.map(item => <li onClick={() => setOpen(false)} className={item.path === pathName ? "border-b w-40" : ""} style={{ transformOrigin: '-20px 50%' }} key={item.path}>
                        <Link href={item.path}>{item.title}</Link>
                    </li>)}
                </ul>
            </nav>
        </div>
    );
};

export default MenuToggle;