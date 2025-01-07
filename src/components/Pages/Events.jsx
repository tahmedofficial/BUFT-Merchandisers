"use client";
import Image from "next/image";
import img1 from "../../../public/images/eventimg1.jpg";
import img2 from "../../../public/images/eventimg2.jpg";
import img3 from "../../../public/images/eventimg3.webp";
import Button from "../Components/Button";
import { useState } from "react";

const Events = () => {

    const [borderId, setBorderId] = useState("");

    const eventData = [
        {
            id: "1",
            img: img1,
            title: "Mastering the Art of Apparel Merchandising: A Professional Summit",
            description: "Dive into the world of apparel merchandising with this exclusive event tailored for aspiring and established professionals. Gain valuable insights from industry leaders, discover sustainable practices, and learn how to navigate global market dynamics effectively.",
        },
        {
            id: "2",
            img: img2,
            title: "Innovative Trends in Fashion Merchandising: 2024 Showcase",
            description: "Discover cutting-edge techniques and emerging trends in fashion merchandising. Engage with experts, network with peers, and explore the innovations shaping the industry's future.",
        },
        {
            id: "3",
            img: img3,
            title: "Sustainability in Apparel Merchandising: A Green Future",
            description: "Learn how to integrate sustainability into apparel merchandising practices. Join industry leaders as they share insights on eco-friendly strategies and market dynamics.",
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
                            <Image id={index + 1} className="lg:h-72 w-full object-cover" src={event.img} width="auto" height="auto" alt={event.description} />
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
                    <div className={`h-1 duration-300 ${event.id === borderId ? "bg-btnColor" : "bg-white"}`}></div>
                </div>
            ))}
        </div>
    );
};

export default Events;
