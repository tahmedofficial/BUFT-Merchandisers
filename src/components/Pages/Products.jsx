"use client";
import Image from "next/image";
import Button from "../Components/Button";
import { useState } from "react";
import Link from "next/link";
import { productsData } from "@/app/products/[productName]/page";

const Products = () => {

    const [borderId, setBorderId] = useState("");

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
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-20 lg:py-20">
            {productsData.map((product, index) => (
                <div key={product.id} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <Link href={`/products/${product.slug}`}>
                        <div className="flex flex-col h-full bg-white p-5">
                            <div className="overflow-hidden rounded-lg mb-6">
                                <Image id={index + 1} className="w-full object-cover" src={product.img} width="auto" height="auto" alt={product.description} />
                            </div>
                            <div className="flex flex-col gap-10 mt-6 flex-grow text-center">
                                <div className="space-y-5">
                                    <h1 className="text-xl font-medium">{product.title}</h1>
                                    <h3>{product.description}</h3>
                                </div>
                                <div className="mt-auto pb-12">
                                    <Button text="View Details" />
                                </div>
                            </div>
                        </div>
                        <div className={`h-1 duration-300 ${product.id === borderId ? "bg-foreground" : "bg-white"}`}></div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Products;