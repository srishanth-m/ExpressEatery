import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import Card from '../components/Card'
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <Card/>
      <Footer/>
    </div>
  )
}

export default Home
