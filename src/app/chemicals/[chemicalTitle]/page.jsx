import BolgDetails from '@/components/Pages/BolgDetails';
import img1 from "../../../../public/images/Effluent-Treatment.jpeg";
import img2 from "../../../../public/images/RO Membrane Cleaning.jpg";
import img3 from "../../../../public/images/boiler-water-treatment-chemicals.jpg";
import img4 from "../../../../public/images/Chemcial-Cleaning.jpg";

export const chemicals = [
    {
        img: img1,
        title: "Industrial Effluent Water Treatment Chemicals",
        slug: "industrial-effluent-water-treatment-chemicals",
        description: "Our effluent water treatment chemicals are designed to effectively remove contaminants, reduce pollution levels, and ensure compliance with environmental regulations. These solutions improve wastewater quality, enhance treatment efficiency, and support sustainable water management across various industries."
    },
    {
        img: img2,
        title: "RO Membrane Cleaning & Treatment Solutions",
        slug: "ro-membrane-cleaning-treatment-solutions",
        description: "Protect and optimize your RO systems with our advanced membrane treatment solutions. Our products help prevent scaling, fouling, and microbial growth, extending membrane life, improving water quality, and reducing operational costs."
    },
    {
        img: img3,
        title: "Advanced Boiler Water Treatment Chemicals",
        slug: "advanced-boiler-water-treatment-chemicals",
        description: "Maintain peak boiler performance with our specialized water treatment chemicals. Designed to control corrosion, scale formation, and oxygen-related damage, our solutions improve energy efficiency, reduce maintenance requirements, and extend equipment lifespan."
    },
    {
        img: img4,
        title: "Industrial Cleaning & Maintenance Chemical Solutions",
        slug: "industrial-cleaning-maintenance-chemical-solutions",
        description: "Our cleaning and maintenance chemicals provide effective solutions for removing dirt, grease, scale, deposits, and other contaminants from industrial equipment and systems. Regular use helps maintain operational efficiency, reduce downtime, and extend the life of critical assets."
    }
];

const page = async ({ params }) => {

    const { chemicalTitle } = await params;
    const blog = chemicals.find(chemical => chemical.slug === chemicalTitle);

    return (
        <div>
            <BolgDetails blog={blog}></BolgDetails>
        </div>
    );
};
export default page;