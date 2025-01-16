import BolgDetails from '@/components/Pages/BolgDetails';
import img1 from "../../../../public/images/blogImg1.png";
import img2 from "../../../../public/images/blogImg2.png";
import img3 from "../../../../public/images/blogImg3.png";

export const blogs = [
    {
        date: "2 December 2024",
        img: img1,
        title: "The Role of Merchandisers in the Global Textile Industry",
        slug: "role-of-merchandisers-in-global-textile-industry",
        description: "The global textile industry is a dynamic and ever-evolving sector that plays a crucial role in the world economy. At the heart of this industry are the merchandisers, often referred to as the bridge between buyers and manufacturers. These skilled professionals ensure the seamless execution of orders, from the initial design to the final delivery. For companies like BUFT-Merchandisers, merchandisers are the backbone of operations, ensuring that every client’s needs are met with precision and professionalism."
    },
    {
        date: "5 January 2025",
        img: img2,
        title: "Sustainable Practices in Textile Merchandising: A Guide for the Future",
        slug: "sustainable-practices-in-textile-merchandising",
        description: "The textile industry has long been a cornerstone of global trade, providing essential products for everyday life and driving economic growth in many countries. However, with increasing awareness of environmental and social issues, sustainability has become a pressing concern for businesses worldwide. For companies like BUFT-Merchandisers, adopting sustainable practices is not just a moral responsibility but also a strategic necessity to remain competitive in the global market."
    },
    {
        date: "3 February 2025",
        img: img3,
        title: "Innovations Driving the Future of the Textile Industry",
        slug: "innovations-driving-future-of-textile-industry",
        description: "The textile industry, one of the oldest and most essential sectors in global commerce, is undergoing a profound transformation. Innovations in technology and sustainable practices are reshaping how textiles are produced, distributed, and consumed. For companies like BUFT-Merchandisers, embracing these innovations is crucial to staying ahead in a competitive and rapidly evolving market."
    }
];

const page = async ({ params }) => {

    const { blogTitle } = await params;
    const blog = blogs.find(blog => blog.slug === blogTitle);

    return (
        <div>
            <BolgDetails blog={blog}></BolgDetails>
        </div>
    );
};

export default page;