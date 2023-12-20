import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProductSlider from '../components/ProductSlider'
import data from "../utils/products.json";
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <ProductSlider data={data}/>
      <Footer/>
    </div>
  )
}

export default Home