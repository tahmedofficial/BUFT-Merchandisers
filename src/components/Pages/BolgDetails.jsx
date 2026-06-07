import Image from 'next/image';

const BolgDetails = ({ blog }) => {

    const { img, title, description, slug } = blog;
    return (
        <div className='lg:w-4/6 mx-auto py-20'>
            <div className='bg-white p-4'>
                <Image src={img} alt={slug}></Image>
            </div>
            <div className="space-y-5 pt-5">
                <h1 className="text-2xl text-black font-semibold">{title}</h1>
                <h3>{description}</h3>
            </div>
        </div>
    );
};

export default BolgDetails;