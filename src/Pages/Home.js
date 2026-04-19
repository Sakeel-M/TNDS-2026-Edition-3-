import React, { useEffect } from 'react'
import HomeBanner from '../components/Home/HomeBanner'
import HomeContent from '../components/Home/HomeContent'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'

const Home = () => {
    
    const location = useLocation();
    useEffect(() => {
      const { search } = location;
      if (!search) {
        window.scroll(0, 0);
      }
    }, []);

  return (
    <div className=''>
        <Navbar/>
        <HomeBanner/>
        <HomeContent/>
        <Footer/>
    </div>
  )
}

export default Home