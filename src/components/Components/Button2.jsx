import React from 'react';

const Button2 = ({ text }) => {
    return (
        <button className="relative px-8 h-10 font-semibold text-black hover:text-white bg-white overflow-hidden group rounded-md duration-300 active:scale-90">
            <span className="absolute inset-0 w-full h-full bg-foreground transition-all duration-300 scale-0 group-hover:scale-100 origin-center"></span>
            <span className="relative">{text}</span>
        </button>
    );
};

export default Button2;