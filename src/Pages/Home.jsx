import React, { useState, useEffect } from 'react'
import { SimpleGrid, Box } from '@chakra-ui/react'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import Navbar2 from '../Components/Navbar2'
import Category from '../Components/category'
import Trending from '../Components/Trending'
import '../Css/Home.css'
function Home() {
    const [data, setData] = useState({});
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '593a518e59msh31aa9356440ad74p1853ffjsncc549ec7f34a',
            'X-RapidAPI-Host': 'amazon_data_extractor.p.rapidapi.com'
        }
    };
    useEffect(() => {
        fetch('https://amazon_data_extractor.p.rapidapi.com/search/Apple%20MacBook%20Pro?api_key=8045a19e2deb0a201d022a330d701576', options)
            .then(response => response.json())
            .then(response => setData(response))
            .catch(err => console.error(err));
    }, [])
    console.log(data.results);
    return (
        <div>
            <div style={{ display: 'absolute' }}>
                <Navbar />
                <Navbar2 />
            </div>

            <Hero />
            <Trending />
            <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} gap='30px' >
                <Box>
                    <img src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_945/v1673279793/DigitalCreative/2023/Homepage/wk2-1-11/After-hunt-sub.png" alt="" />
                </Box>
                <Box>
                    <img src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_945/v1673279793/DigitalCreative/2023/Homepage/wk2-1-11/BPS_saltwater-sub.png" alt="" />
                </Box>
            </SimpleGrid>
            <Category />
            <SimpleGrid columns={{ base: 3, md: 4, lg: 7 }} gap='30px' className='brands' >
                <Box>
                    <img src="https://assets.basspro.com/image/upload/f_auto,q_auto/v1667848670/DigitalCreative/Site-Elements/bps-logo-mobile.png" alt="" />
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
        </div >
    )
}

export default Home