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
        title: "Merino Blazer - Navy",
        description: "This blazer is in fact knitted like a cardigan, from 100% extra fine merino wool in a half-Milano stitch for sturdiness",
        slug: "merino-blazer-navy",
    },
    {
        id: "2",
        img: img2,
        title: "Merino Shawl Neck Chunky Cardigan - Oatmeal",
        description: "Add a little extra luxury with our shawl neck jumper, crafted from 100% Merino wool",
        slug: "merino-shawl-neck-chunky-cardigan-oatmeal",
    },
    {
        id: "3",
        img: img3,
        title: "Merino Button Through Funnel Neck Cardigan - Navy",
        description: "This funnel-neck cardigan is a top contender for keeping you insulated and looking dapper, all at the same time",
        slug: "merino-button-through-funnel-neck-cardigan-navy",
    },
    {
        id: "4",
        img: img4,
        title: "Merino Zip Neck Jumper - Olive Green Melange",
        description: "This refined-yet-casual zip neck is crafted from pure, Woolmark-certified Merino wool",
        slug: "merino-zip-neck-jumper-olive-green-melange",
    },
    {
        id: "5",
        img: img5,
        title: "Merino Cardigan - Navy",
        description: "Pure Merino wool makes this cardigan a super-soft, slip it on over any work or weekend look for instant warmth",
        slug: "merino-cardigan-navy",
    },
    {
        id: "6",
        img: img6,
        title: "Merino Cardigan - Grey",
        description: "Pure Merino wool makes this cardigan a super-soft layer. Slip it on over any work or weekend",
        slug: "merino-cardigan-grey",
    },
    {
        id: "7",
        img: img7,
        title: "Merino Zip Neck Jumper - Burgundy",
        description: "This refined-yet-casual zip neck is crafted from pure, Woolmark-certified Merino wool",
        slug: "merino-zip-neck-jumper-burgundy",
    },
    {
        id: "8",
        img: img8,
        title: "Merino Roll Neck Jumper - Navy",
        description: "This refined-yet-casual roll neck is crafted from pure, Woolmark-certified Merino wool",
        slug: "merino-roll-neck-jumper-navy",
    },
];

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
