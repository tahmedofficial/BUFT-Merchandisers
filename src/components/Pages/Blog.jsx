"use client";
import { blogs } from "@/app/blog/[blogTitle]/page";
import Image from "next/image";
import Button from "../Components/Button";
import Link from "next/link";
import { FaCalendarAlt } from "react-icons/fa";

const Blog = () => {

    const handleMouseEnter = (event) => {
        const image = event.currentTarget.querySelector("img");
        image.style.transform = "scale(1.03)";
        image.style.transition = "transform 0.3s ease";
    }

    const handleMouseLeave = (e) => {
        const image = e.currentTarget.querySelector("img");
        image.style.transform = "scale(1)";
    };

    return (
        <div className="lg:grid grid-cols-3 gap-5 lg:py-20">
            <div className="col-span-2 space-y-10">
                {
                    blogs.map(blog => <div key={blog.title}>
                        <Link href={`/blog/${blog.slug}`}>
                            <div className="shadow-lg p-5 rounded-lg">
                                <div className="bg-white p-4">
                                    <div className="overflow-hidden group">
                                        <Image className="lg:h-[600px] transition-transform duration-300 group-hover:scale-105" src={blog.img} alt={blog.title}></Image>
                                    </div>
                                </div>
                                <div className="space-y-2 lg:w-5/6 pt-5">
                                    <div className="flex gap-2 items-center">
                                        <FaCalendarAlt className="text-xl text-primaryColor" />
                                        <h2>{blog.date}</h2>
                                    </div>
                                    <h1 className="text-2xl lg:text-4xl text-black hover:text-primaryColor duration-300">
                                        {blog.title}
                                    </h1>
                                    <div className="pt-2">
                                        <Button text="Read More"></Button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>)
                }
            </div>
            <div className="bg-white hidden lg:block">
                {
                    blogs.map(blog => <div key={blog.slug}>
                        <Link href={`/blog/${blog.slug}`}>
                            <div className="grid gap-3 grid-cols-3 p-4">
                                <div className="col-span-1">
                                    <Image className="bg-background p-2" src={blog.img} alt={blog.slug}></Image>
                                </div>
                                <div className="col-span-2 space-y-3">
                                    <div className="flex gap-2 items-center">
                                        <FaCalendarAlt className="text-primaryColor" />
                                        <h2>{blog.date}</h2>
                                    </div>
                                    <h1 className="text-black hover:text-primaryColor duration-300">{blog.title}</h1>
                                </div>
                            </div>
                        </Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Blog;