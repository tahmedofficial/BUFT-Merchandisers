const Button = ({ text }) => {
    return (
        <button className="relative px-8 h-10 font-semibold text-white bg-foreground overflow-hidden group rounded-md duration-300 active:scale-90">
            <span className="absolute inset-0 w-full h-full bg-btnColor transition-all duration-300 scale-0 group-hover:scale-100 origin-center"></span>
            <span className="relative">{text}</span>
        </button>
    );
};

export default Button;