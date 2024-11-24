
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
        <div style={responsiveMap} className="border-[5px] border-btnColor my-12">
            <iframe style={responsiveMap2} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1824.0682503172982!2d90.36063034774641!3d23.884777898233423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c393782983bb%3A0x497bb1b7c3630bd0!2sBGMEA%20University%20of%20Fashion%20%26%20Technology%20(BUFT)!5e0!3m2!1sen!2sbd!4v1732461148886!5m2!1sen!2sbd" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
};

export default Location;