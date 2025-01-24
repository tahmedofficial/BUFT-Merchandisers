import ProductDetails from '@/components/Pages/ProductDetails';
import img1 from "../../../../public/images/products/ac1.jpg"
import img2 from "../../../../public/images/products/ac2.jpg"
import img3 from "../../../../public/images/products/ac3.jpg"
import img4 from "../../../../public/images/products/ac4.jpg"
import img5 from "../../../../public/images/products/ac5.jpg"
import img6 from "../../../../public/images/products/ac6.jpg"
import img7 from "../../../../public/images/products/ac7.jpg"
import img8 from "../../../../public/images/products/ac8.jpg"

export const productsData = [
    {
        id: "1",
        img: img1,
        title: "Cotton Blazer - Navy",
        description: "A classic white shirt made from premium cotton, offering unmatched comfort and elegance for all occasions.",
        slug: "cotton-shirt-white",
    },
    {
        id: "2",
        img: img2,
        title: "Linen Trousers - Beige",
        description: "These breathable linen trousers combine style and comfort, perfect for summer outings or casual gatherings.",
        slug: "linen-trousers-beige",
    },
    {
        id: "3",
        img: img3,
        title: "Wool Overcoat - Charcoal",
        description: "Crafted from 100% wool, this overcoat provides superior warmth and a refined look during colder months.",
        slug: "wool-overcoat-charcoal",
    },
    {
        id: "4",
        img: img4,
        title: "Leather Belt - Brown",
        description: "A durable leather belt with a sleek design, suitable for both formal and casual wear.",
        slug: "leather-belt-brown",
    },
    {
        id: "5",
        img: img5,
        title: "Silk Scarf - Red",
        description: "A luxurious silk scarf in vibrant red, adding a touch of elegance to any outfit.",
        slug: "silk-scarf-red",
    },
    {
        id: "6",
        img: img6,
        title: "Denim Jacket - Blue",
        description: "This timeless denim jacket offers a versatile and rugged look, perfect for layering in any season.",
        slug: "denim-jacket-blue",
    },
    {
        id: "7",
        img: img7,
        title: "Canvas Sneakers - Grey",
        description: "Comfortable and stylish canvas sneakers, designed for everyday wear with a minimalist aesthetic.",
        slug: "canvas-sneakers-grey",
    },
    {
        id: "8",
        img: img8,
        title: "Casual Watch - Black",
        description: "A sleek black watch with a modern design, blending functionality and style seamlessly.",
        slug: "casual-watch-black",
    },
]

const page = async ({ params }) => {

    const { productName } = await params

    const product = productsData.find(product => product.slug === productName)

    return (
        <div>
            <ProductDetails product={product} />
        </div>
    );
};

export default page;
