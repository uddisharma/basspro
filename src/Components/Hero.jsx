import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Css/Hero.css';
// import { data } from "./data";
import { BiRightArrow } from 'react-icons/bi'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'
// import { ArrowBackIos, ArrowForwardIos } '@mui/icons-material';
var data = [

    {
        imgsrc: 'https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_1911/v1672956788/DigitalCreative/2023/Homepage/wk1-1-1/M2237_Homepage_Desktop.png'
    },
    {
        imgsrc: 'https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_1920/v1673277784/DigitalCreative/2023/Homepage/wk2-1-11/BPS_Homepage-winter.png'
    }
]
const PreviousBtn = (props) => {
    // console.log(props);
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <AiFillCaretLeft style={{ color: "blue", fontSize: "30px" }} />
        </div>
    );
};
const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <AiFillCaretRight style={{ color: "blue", fontSize: "30px" }} />
        </div>
    );
};

const Hero = () => {
    return (
        <div style={{ margin: "30px" }} className="carousel">
            {/* <h1>Basic carousel</h1> */}
            <Slider
                autoplay
                autoplaySpeed={2000}
                // dots
                initialSlide={2}
                infinite
                prevArrow={<PreviousBtn />}
                nextArrow={<NextBtn />}
                customPaging={(i) => {
                    return (
                        <div>
                            <img
                                src={data.imgsrc[i]}
                                alt=""
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    objectFit: "cover",
                                    borderRadius: "10px",
                                }}
                            />
                        </div>
                    );
                }}
                dotsClass="slick-dots custom-indicator"
            >
                {data.map((item) => (
                    <div >
                        <img src={item.imgsrc} alt="" style={{ width: "100%", height: "60vh" }} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Hero;