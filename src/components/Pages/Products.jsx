"use client";
import Image from "next/image";
import img1 from "../../../public/images/products/ac1.jpg";
import img2 from "../../../public/images/products/ac2.jpg";
import img3 from "../../../public/images/products/ac3.jpg";
import img4 from "../../../public/images/products/ac4.jpg";
import img5 from "../../../public/images/products/ac5.jpg";
import img6 from "../../../public/images/products/ac6.jpg";
import img7 from "../../../public/images/products/ac7.jpg";
import img8 from "../../../public/images/products/ac8.jpg";
import Button from "../Components/Button";
import { useState } from "react";


const Products = () => {

    const [borderId, setBorderId] = useState("");

    const eventData = [
        {
            id: "1",
            img: img1,
            title: "Merino Blazer - Navy",
            description: "This blazer is in fact knitted like a cardigan, from 100% extra fine merino wool in a half-Milano stitch for sturdiness",
        },
        {
            id: "2",
            img: img2,
            title: "Merino Shawl Neck Chunky Cardigan - Oatmeal",
            description: "Add a little extra luxury with our shawl neck jumper, crafted from 100% Merino wool",
        },
        {
            id: "3",
            img: img3,
            title: "Merino Button Through Funnel Neck Cardigan - Navy",
            description: "This funnel-neck cardigan is a top contender for keeping you insulated and looking dapper, all at the same time",
        },
    ];

    const handleMouseEnter = (e) => {
        const image = e.currentTarget.querySelector("img");
        image.style.transform = "scale(1.1)";
        image.style.transition = "transform 0.3s ease";
        setBorderId(image.id);
    };

    const handleMouseLeave = (e) => {
        const image = e.currentTarget.querySelector("img");
        image.style.transform = "scale(1)";
        setBorderId("");
    };

    return (
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-20">
            {eventData.map((event, index) => (
                <div key={event.id} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <div className="flex flex-col h-full bg-white p-5">
                        <div className="overflow-hidden rounded-lg mb-6">
                            <Image id={index + 1} className="w-full object-cover" src={event.img} width="auto" height="auto" alt={event.description} />
                        </div>
                        <div className="flex flex-col gap-10 mt-6 flex-grow text-center">
                            <div className="space-y-5">
                                <h1 className="text-xl font-medium">{event.title}</h1>
                                <h3>{event.description}</h3>
                            </div>
                            <div className="mt-auto pb-12">
                                <Button text="View Details" />
                            </div>
                        </div>
                    </div>
                    <div className={`h-1 duration-300 ${event.id === borderId ? "bg-foreground" : "bg-white"}`}></div>
                </div>
            ))}
        </div>
    );
};

export default Products;