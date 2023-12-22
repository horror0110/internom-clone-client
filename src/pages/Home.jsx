import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProductSlider from '../components/ProductSlider'
import data from "../utils/products.json";
import Footer from '../components/Footer';
import PrintCompany from '../components/PrintCompany';
import Authors from '../components/Authors';

const Home = () => {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <PrintCompany/>
      <ProductSlider data={data}/>
      <Authors/>
      <Footer/>
    </div>
  )
}

export default Home