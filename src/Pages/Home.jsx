import React, { useState, useEffect } from 'react'
import { SimpleGrid, Box, Button } from '@chakra-ui/react'
import Hero from '../Components/Hero'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Navbar2 from '../Components/Navbar2'
import Category from '../Components/category'
import Trending from '../Components/Trending'
import Footer from '../Components/Footer'
import '../Css/Home.css'
function Home() {
    // const [data, setData] = useState({});
    // useEffect(() => {
    //     fetch('https://dummyjson.com/products/categories')
    //         .then(res => res.json())
    //         .then(json => setData(json));
    // }, [])
    // console.log(data);
    return (
        <div>
            <div style={{ display: 'absolute' }}>
                <Navbar />
                <Navbar2 />
            </div>

            <Hero />
            <h1 className='hot'>HOT THIS WEEK</h1>
            <Trending />
            <div className='exl'>
                <h1>CLUB MEMBER <span style={{ color: 'white' }}>EXCLUSIVE</span>  SAVING</h1>
                <p >SPECIAL SAVING FOR CLUB MEMBER</p>
            </div>
            <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} gap='30px' >
                <Box className='container'>
                    <img src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_945/v1673279793/DigitalCreative/2023/Homepage/wk2-1-11/After-hunt-sub.png" alt="" />
                    <h1 class="bottom-left">AFTER THE HUNT</h1>
                    <Button colorScheme='yellow' className='bottom' >SHOP NOW</Button>
                </Box>
                <Box className='container'>
                    <img src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_945/v1673279793/DigitalCreative/2023/Homepage/wk2-1-11/BPS_saltwater-sub.png" alt="" />
                    <h1 class="bottom-left">SALTY WATER</h1>
                    <Button colorScheme='yellow' className='bottom' >SHOP NOW</Button>
                </Box>
            </SimpleGrid>


            <h1 className='cat'>SHOP BY CATEGORY</h1>
            <Category />
            <div className='learn'>
                <img src="https://assets.basspro.com/image/upload/c_scale,f_auto,h_88,q_auto,w_1054/v1668626316/DigitalCreative/2022/Homepage/Black-Friday/low-price-title.png" alt="" />
            </div>
            <h1 className='cat'>OUR TOP BRANDS</h1>
            <SimpleGrid columns={{ base: 3, md: 4, lg: 7 }} gap='30px' className='brands'  >
                <Box>
                    <img src="https://assetshare.basspro.com/content/dam/bps-general-assets/web/site-elements/logos/images/under-armour/underarmour-black.svg" alt="" />
                </Box>
                <Box>
                    <img src="https://assetshare.basspro.com/content/dam/bps-general-assets/web/site-elements/logos/images/red-head/redhead-488.png" alt="" />
                </Box>
                <Box>
                    <img src="https://assetshare.basspro.com/content/dam/bps-general-assets/web/site-elements/logos/images/cabelas/cabelas-logo.svg" alt="" />
                </Box>
                <Box>
                    <img src="https://assetshare.basspro.com/content/dam/bps-general-assets/web/site-elements/logos/images/garmin/garmin.svg" alt="" />
                </Box>
                <Box>
                    <img src="https://assetshare.basspro.com/content/dam/bps-general-assets/web/site-elements/logos/images/columbia/columbia-blue.svg" alt="" />
                </Box>
                <Box>
                    <img src="https://assetshare.basspro.com/content/dam/bps-general-assets/web/site-elements/logos/images/vortex/vortex.svg" alt="" />
                </Box>
                <Box>
                    <img src="https://assetshare.basspro.com/content/dam/bps-general-assets/web/site-elements/logos/images/leupold/leupold-black-vertical.svg" alt="" />
                </Box>
            </SimpleGrid>

            <SimpleGrid columns={{ base: 2, md: 2, lg: 4 }} gap="30px" className="main-cont">
                <Box>
                    <img className='image' src="https://assetshare.basspro.com/content/dam/bps-general-assets/web/site-elements/home-page/club/images/card_BPS_classic-new.png" alt="" />
                </Box>
                <Box>
                    <p className='first'>SIGN UP TODAY AND EARN UP TO</p>
                    <h1 className='heading'>$50 <span className='grayline'>In <br /> CLUB <br /> Points </span> </h1>
                    <Button>Sign Up</Button>
                </Box>
                <Box>
                    <h2 className='heading2'>Club Member Sign In</h2> <hr />
                    <p className='second'>Manage your account online.</p>
                    <Button>Manage my account</Button>
                </Box>
                <Box>
                    <h2 className='heading2'>CLUB Member Offers</h2> <hr />
                    <p className='second'>Check out the latest perks and discounts for CLUB Members.</p>
                    <Button>Check Offers & Events</Button>
                </Box>

            </SimpleGrid>
            <Footer />
        </div >
    )
}

export default Home