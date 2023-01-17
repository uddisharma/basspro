import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Css/Category.css'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'
import { useState } from 'react';
import { useEffect } from 'react';
var data = [
    {
        imgsrc: "https://assets.basspro.com/image/list/fn_select:jq:first(.%5b%5d%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/3037740.json?$Prod_PLPThumb$"
    },
    {
        imgsrc: 'https://assets.basspro.com/image/list/fn_select:jq:first(.%5b%5d%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/3443007.json?$Prod_PLPThumb$'
    },
    {
        imgsrc: "https://assets.basspro.com/image/list/fn_select:jq:first(.%5b%5d%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/3443007.json?$Prod_PLPThumb$"
    },
    {
        imgsrc: 'https://images.unsplash.com/photo-1599850929872-2dec3cbafd7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        imgsrc: "https://images.unsplash.com/photo-1599850929872-2dec3cbafd7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        imgsrc: 'https://images.unsplash.com/photo-1599850929872-2dec3cbafd7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        imgsrc: "https://images.unsplash.com/photo-1599850929872-2dec3cbafd7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        imgsrc: 'https://images.unsplash.com/photo-1599850929872-2dec3cbafd7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        imgsrc: "https://images.unsplash.com/photo-1599850929872-2dec3cbafd7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        imgsrc: 'https://images.unsplash.com/photo-1599850929872-2dec3cbafd7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },

]
let slidesToShow = 5;
const PreviousBtn = (props) => {
    console.log(props);
    const { className, onClick, currentSlide } = props;
    return (
        <>
            {currentSlide !== 0 && (
                <div className={className} onClick={onClick}>
                    <AiFillCaretLeft style={{ color: 'blue', fontSize: '30px' }} />
                </div>
            )}
        </>
    );
};
const NextBtn = (props) => {
    const { className, onClick, slideCount, currentSlide } = props;
    console.log(props);
    return (
        <>
            {currentSlide !== slideCount - slidesToShow && (
                <div className={className} onClick={onClick}>
                    <AiFillCaretRight style={{ color: 'blue', fontSize: '30px' }} />
                </div>
            )}
        </>
    );
};

const carouselProperties = {
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    slidesToShow: slidesToShow,
    slidesToScroll: 2,
    infinite: false,
    // slidesToScroll={3}
    responsive: [
        {
            breakpoint: 426,
            settings: {
                slidesToShow: 1,
                centerMode: false,
            },
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 3,
                centerMode: false,
            },
        },
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 4,
                centerMode: false,
                slidesToScroll: 2,
            },
        },
    ],
};

const Trending = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const updateWidth = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    if (width <= 426) {
        slidesToShow = 1;
    } else if (width > 426 && width <= 769) {
        slidesToShow = 3;
    } else if (width > 769 && width <= 1025) {
        slidesToShow = 4;
    } else {
        slidesToShow = 5;
    }

    return (
        <div style={{ margin: '30px' }} className='carousel'>
            {/* <h1>Basic carousel</h1> */}
            <Slider {...carouselProperties}>
                {data.map((item) => (
                    <Card item={item.imgsrc} />
                ))}
            </Slider>
        </div>
    );
};

const Card = ({ item }) => {
    return (
        <div className='cards' style={{ textAlign: 'center' }}>
            <img
                className='multi__image'
                src={item}
                alt=''
                style={{
                    width: '100%',
                    height: '170px',
                    objectFit: 'contain',
                    marginBottom: '10px',
                    // border: '2px solid red'
                }}
            />

        </div>
    );
};

export default Trending;