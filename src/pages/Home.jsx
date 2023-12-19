import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProductSlider from '../components/ProductSlider'
import data from "../utils/products.json";

const Home = () => {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <ProductSlider data={data}/>
    </div>
  )
}

export default Home