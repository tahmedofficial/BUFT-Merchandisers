import { productsData } from "@/app/products/[productName]/page";
import Image from "next/image";

const Gallery = () => {

    return (
        <div className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:py-20">
            {
                productsData.map(product => <div key={product.id}>
                    <Image className="rounded-lg" height="auto" width="auto" src={product.img} alt={product.slug}></Image>
                </div>)
            }
        </div>
    );
};

export default Gallery;