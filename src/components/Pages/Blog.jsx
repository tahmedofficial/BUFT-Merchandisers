import { blogs } from "@/app/blog/[blogTitle]/page";
import Image from "next/image";
import Button from "../Components/Button";
import Link from "next/link";
import { FaCalendarAlt } from "react-icons/fa";

const Blog = () => {



    return (
        <div className="space-y-10 lg:py-20">
            {
                blogs.map(blog => <div key={blog.title}>
                    <Link href={`/blog/${blog.slug}`}>
                        <div className="shadow-lg p-6 rounded-lg">
                            <div>
                                <Image className="bg-white p-4 lg:h-[600px]" src={blog.img} alt={blog.title}></Image>
                            </div>
                            <div className="space-y-2 lg:w-5/6 pt-5">
                                <div className="flex gap-2 items-center">
                                    <FaCalendarAlt className="text-xl text-primaryColor" />
                                    <h2>{blog.date}</h2>
                                </div>
                                <h1 className="text-2xl lg:text-4xl text-black hover:text-primaryColor duration-300">{blog.title}</h1>
                                <div className="pt-2">
                                    <Button text="Read More"></Button>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>)
            }
        </div>
    );
};

export default Blog;