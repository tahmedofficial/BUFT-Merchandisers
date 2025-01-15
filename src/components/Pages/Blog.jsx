import { blogs } from "@/app/blog/[blogTitle]/page";
import Image from "next/image";

const Blog = () => {



    return (
        <div className="space-y-10 lg:py-10">
            {
                blogs.map(blog => <div key={blog.title}>
                    <div className="grid lg:grid-cols-2 gap-5">
                        <div>
                            <Image className="rounded-xl h-96" src={blog.img} alt={blog.title}></Image>
                        </div>
                        <div className="space-y-2">
                            <h2>{blog.date}</h2>
                            <h1 className="text-2xl text-black font-semibold">{blog.title}</h1>
                            <h3>{blog.description}</h3>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Blog;