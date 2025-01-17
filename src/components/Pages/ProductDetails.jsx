import React from 'react';
import { productsData } from './Products';
import Image from 'next/image';

const ProductDetails = ({ product }) => {

    const { title, description, slug, img } = product;

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
                        <h3>Minimum order 10000</h3>
                        <h3>GSM: 150</h3>
                        <h3>Fabric: Knit</h3>
                        <h3>Button: 5</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;