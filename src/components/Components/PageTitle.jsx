import React from 'react';

const PageTitle = ({ title, description }) => {
    return (
        <div className="text-center py-16 space-y-3 lg:text-white">
            <h1 className="text-4xl lg:text-5xl">{title}</h1>
            <h3 className="text-xl">{description}</h3>
        </div>
    );
};

export default PageTitle;