import Image from 'next/image';
import React from 'react';

const BolgDetails = ({ blog }) => {

    const { img, title, description, date, slug } = blog;
    return (
        <div>
            <div>
                <Image className='h-96' src={img} alt={slug}></Image>
            </div>
            <div className="space-y-2 lg:w-5/6 pt-5">
                <h3>{date}</h3>
                <h1 className="text-2xl text-black font-semibold">{title}</h1>
                <h3>{description}</h3>
            </div>
        </div>
    );
};

export default BolgDetails;