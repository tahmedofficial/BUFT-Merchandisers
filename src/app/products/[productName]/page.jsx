import ProductDetails from '@/components/Pages/ProductDetails';
import img1 from "../../../../public/images/products/img1.avif"
import img2 from "../../../../public/images/products/img2.png"
import img3 from "../../../../public/images/products/corporate.png"
import img4 from "../../../../public/images/products/swter.png"
import img5 from "../../../../public/images/products/sports.png"
import img6 from "../../../../public/images/products/denim.jpg"
import img7 from "../../../../public/images/products/women.jpg"
import img8 from "../../../../public/images/products/knit.avif"
import img9 from "../../../../public/images/products/woven.jpeg"
import img10 from "../../../../public/images/products/oem.png"

export const productsData = [
    {
        id: "1",
        img: img1,
        title: "T-Shirt Manufacturing",
        description: "High-quality custom T-shirts made from premium cotton, polyester, or blended fabrics. Available in various colors, sizes, GSM, and printing options including screen print, DTG, embroidery, and heat transfer. Suitable for brands, corporate uniforms, and promotional campaigns.",
        slug: "t-shirt-manufacturing",
        minimumOrder: "1000 Pieces",
        exportMarkets: "Worldwide",
        fabricType: "As Per Buyer's Requirement"
    },
    {
        id: "2",
        img: img2,
        title: "Polo Shirt Production",
        description: "Premium polo shirts manufactured with breathable fabrics and durable stitching. Customize fabric type, color, logo embroidery, buttons, and sizing according to your brand requirements.",
        slug: "polo-shirt-production",
        minimumOrder: "1000 Pieces",
        exportMarkets: "Worldwide",
        fabricType: "As Per Buyer's Requirement"
    },
    {
        id: "3",
        img: img3,
        title: "Corporate Uniform Manufacturing",
        description: "Professional uniforms designed for offices, hotels, restaurants, security services, and industrial workers. Custom branding, fabric selection, and bulk production available.",
        slug: "corporate-uniform-anufacturing",
        minimumOrder: "200 Pieces",
        exportMarkets: "Worldwide",
        fabricType: "As Per Buyer's Requirement"
    },
    {
        id: "4",
        img: img4,
        title: "Hoodie & Sweatshirt Manufacturing",
        description: "Custom hoodies and sweatshirts produced with high-quality fleece and cotton fabrics. Available in pullover and zip-up styles with custom printing and embroidery options.",
        slug: "hoodie-sweatshirt-manufacturing",
        minimumOrder: "700 Pieces",
        exportMarkets: "Worldwide",
        fabricType: "As Per Buyer's Requirement"
    },
    {
        id: "5",
        img: img5,
        title: "Sportswear Manufacturing",
        description: "Performance sportswear including jerseys, shorts, tracksuits, and activewear. Moisture-wicking fabrics, sublimation printing, and full customization available for teams and brands.",
        slug: "sportswear-manufacturing",
        minimumOrder: "200 Pieces",
        exportMarkets: "Worldwide",
        fabricType: "As Per Buyer's Requirement"
    },
    {
        id: "6",
        img: img6,
        title: "Denim Jeans Production",
        description: "Manufacture premium denim jeans with custom washes, fits, stitching patterns, and branding. Suitable for fashion brands seeking reliable bulk production.",
        slug: "denim-jeans-production",
        minimumOrder: "700 Pieces",
        exportMarkets: "Worldwide",
        fabricType: "As Per Buyer's Requirement"
    },
    {
        id: "7",
        img: img7,
        title: "Women's Fashion Apparel Manufacturing",
        description: "Production of dresses, tops, skirts, blouses, and fashion garments with customizable fabrics, trims, and finishing according to your design specifications.",
        slug: "women-fsashion-apparel-manufacturing",
        minimumOrder: "1000 Pieces",
        exportMarkets: "Worldwide",
        fabricType: "As Per Buyer's Requirement"
    },
    {
        id: "8",
        img: img8,
        title: "Knitwear Manufacturing",
        description: "Expert manufacturing of knit garments including T-shirts, polo shirts, tank tops, and casual wear. High-quality knitting, dyeing, and finishing services available.",
        slug: "knitwear-manufacturing",
        minimumOrder: "1000 Pieces",
        exportMarkets: "Worldwide",
        fabricType: "As Per Buyer's Requirement"
    },
    {
        id: "9",
        img: img9,
        title: "Woven Garment Manufacturing",
        description: "Professional production of woven shirts, trousers, shorts, and uniforms. Precision cutting, stitching, and quality control ensure excellent product standards.",
        slug: "woven-garment-manufacturing",
        minimumOrder: "1000 Pieces",
        exportMarkets: "Worldwide",
        fabricType: "As Per Buyer's Requirement"
    },
    {
        id: "10",
        img: img10,
        title: "OEM & ODM Garment Services",
        description: "End-to-end garment manufacturing services for global brands. From concept development and sample creation to mass production and worldwide export support.",
        slug: "oem-odm-garment-services",
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
