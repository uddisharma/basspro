import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Css/Category.css'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'
import { useState } from 'react';
import { useEffect } from 'react';
var data = [
    {
        imgsrc: "https://assets.basspro.com/image/list/fn_select:jq:first(.%5b%5d%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/3037740.json?$Prod_PLPThumb$",
        name: ' Cabelas Zoned Comfort Trac 2000 Gram Insulated Rubber Hunting Boots for Men',
        price: '$109.98 '
    },
    {
        imgsrc: 'https://assets.basspro.com/image/list/fn_select:jq:first(.%5b%5d%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/3443007.json?$Prod_PLPThumb$',
        name: 'RedHead Buffalo Creek Flannel Long-Sleeve Shirt for Men',
        price: '$109'
    },
    {
        imgsrc: "https://assets.basspro.com/image/list/fn_select:jq:first(.%5b%5d%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/2428284.json?$Prod_PLPThumb$",
        name: 'Natural Reflections Acid Wash Plaid Long-Sleeve Shirt',
        price: '$45'
    },
    {
        imgsrc: 'https://assets.basspro.com/image/list/fn_select:jq:first(.%5b%5d%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/3212765.json?$Prod_PLPThumb$',
        name: ' Cabelas Zoned Comfort Trac 2000 Gram Insulated Rubber Hunting Boots for Men',
        price: '$109.98 '
    },
    {
        imgsrc: "https://assets.basspro.com/image/list/fn_select:jq:first(.%5b%5d%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/3376495.json?$Prod_PLPThumb$",
        name: 'RedHead Buffalo Creek Flannel Long-Sleeve Shirt for Men',
        price: '$109'
    },
    {
        imgsrc: 'https://assets.basspro.com/image/list/fn_select:jq:first(.%5b%5d%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/3473540.json?$Prod_PLPThumb$',
        name: 'Natural Reflections Acid Wash Plaid Long-Sleeve Shirt',
        price: '$45'
    },
    {
        imgsrc: "https://assets.basspro.com/image/list/fn_select:jq:first(.%5b%5d%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/2593481.json?$Prod_PLPThumb$",
        name: ' Cabelas Zoned Comfort Trac 2000 Gram Insulated Rubber Hunting Boots for Men',
        price: '$109.98 '
    },
    {
        imgsrc: 'https://assets.basspro.com/image/list/fn_select:jq:first(.%5b%5d%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/3417444.json?$Prod_PLPThumb$',
        name: 'RedHead Buffalo Creek Flannel Long-Sleeve Shirt for Men',
        price: '$109'
    },
    {
        imgsrc: "https://assets.basspro.com/image/list/fn_select:jq:first(.%5B%5D%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/987953.json?$Prod_PLPThumb$",
        name: 'Natural Reflections Acid Wash Plaid Long-Sleeve Shirt',
        price: '$45'
    },
    {
        imgsrc: 'https://assets.basspro.com/image/list/fn_select:jq:first(.%5B%5D%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/2860377.json?$Prod_PLPThumb$',
        name: ' Cabelas Zoned Comfort Trac 2000 Gram Insulated Rubber Hunting Boots for Men',
        price: '$109.98 '
    },

]
let slidesToShow = 5;
const PreviousBtn = (props) => {
    // console.log(props);
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
    // console.log(props);

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
        <div key={Math.random + Math.random} style={{ margin: '30px' }} className='carousel'>
            {/* <h1>Basic carousel</h1> */}
            <Slider {...carouselProperties}>
                {data.map((item) => (
                    <Card item={item.imgsrc} name={item.name} price={item.price} />
                ))}
            </Slider>
        </div>
    );
};

const Card = ({ item, name, price }) => {
    return (
        <div key={Math.random + Math.random} className='cards' style={{ textAlign: 'center' }}>
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
            <h3 className='card' >{name}</h3>
            <h4 className='card2'> Price from {price}</h4>
        </div>
    );
};

export default Trending;