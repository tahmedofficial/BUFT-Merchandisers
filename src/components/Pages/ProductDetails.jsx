import React from 'react';
import Image from 'next/image';

const ProductDetails = ({ product }) => {

    const { title, description, slug, img, minimumOrder, exportMarkets, fabricType } = product;

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='md:p-20'>
                <Image className='rounded-lg' width="auto" height="auto" src={img} alt={slug}></Image>
            </div>
            <div className='py-10 md:py-20'>
                <div className='space-y-3'>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl'>{title}</h1>
                    <h3>{description}</h3>
                    <div className='space-y-2'>
                        <h3>Minimum order {minimumOrder}</h3>
                        <h3>Fabric: {fabricType}</h3>
                        <h3>Export: {exportMarkets}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;