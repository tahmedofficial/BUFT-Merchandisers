
const BannerTitle = ({ title, description }) => {

    return (
        <div className="text-center py-16 space-y-3">
            <h1 className="text-4xl lg:text-5xl">{title}</h1>
            <h3 className="text-xl">{description}</h3>
        </div>
    );
};

export default BannerTitle;