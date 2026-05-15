import React, { useEffect } from 'react'
import HomeBanner from '../components/Home/HomeBanner'
import HomeContent from '../components/Home/HomeContent'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'
import { scrollToSection } from '../common/utills'

const Home = () => {

    const location = useLocation();
    useEffect(() => {
      const { search } = location;
      if (search) {
        const params = new URLSearchParams(search);
        const target = params.get('section');
        if (target) {
          setTimeout(() => scrollToSection(target), 100);
          return;
        }
      }
      window.scroll(0, 0);
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