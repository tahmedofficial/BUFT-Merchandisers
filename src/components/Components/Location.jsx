
const Location = () => {

    const responsiveMap = {
        Overflow: "hidden",
        height: "350px",
        paddingBottom: "30%",
        position: "relative"
    }

    const responsiveMap2 = {
        border: 0,
        height: "100%",
        width: "100%",
        left: 0,
        top: 0,
        position: "absolute"
    }

    return (
        <div style={responsiveMap} className="border-[5px] border-btnColor">
            <iframe style={responsiveMap2} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.2543197773257!2d90.42453546533025!3d23.744914590675847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b86ed4c892b5%3A0x51affa195eb96a80!2s224%20North%20Shahjahanpur%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1781443358716!5m2!1sen!2sbd" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
};

export default Location;