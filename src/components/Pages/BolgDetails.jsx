import Image from 'next/image';
import { CgProfile } from "react-icons/cg";
import { FaCalendarAlt } from "react-icons/fa";


const BolgDetails = ({ blog }) => {

    const { img, title, description, date, slug, writer } = blog;
    return (
        <div className='lg:w-4/6 mx-auto py-20'>
            <div className='bg-white p-4'>
                <Image src={img} alt={slug}></Image>
            </div>
            <div className="space-y-5 pt-5">
                <div className='flex items-center justify-around w-full bg-white p-4'>
                    <div className='flex items-center gap-2'>
                        <FaCalendarAlt className='text-primaryColor' />
                        <h3>{date}</h3>
                    </div>
                    <div className='flex items-center gap-2'>
                        <CgProfile className='text-primaryColor' />
                        <h3>{writer}</h3>
                    </div>
                </div>
                <h1 className="text-2xl text-black font-semibold">{title}</h1>
                <h3>{description}</h3>
            </div>
        </div>
    );
};

export default BolgDetails;