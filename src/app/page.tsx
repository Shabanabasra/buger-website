import React from "react";
import Navbar from "../app/components/Navbar";
import Carousel from "./components/Carousel";
import Progressor from "./components/Progressor";
import ProductList from "./components/Buggerlist";
import Banner from "./components/Banner";
import Offer from "./components/offer";
import Card from "./components/Card";;
import Resveration from "./components/Reservation";
import Footer from "./components/Footer"
import Buggerlist from "./components/Buggerlist";
import Menu from "./components/Menuitem";


export default function App() {
  return (
    <div className="bg-gradient-to-r from-black to-grey-700 min-h-screen" >
   <Navbar/>
   <Carousel/>
   <Progressor/>
   <Buggerlist/>
   <Banner/>
   <ProductList/>
    <Menu/>
   <Offer/>
   <Card/>
   <Resveration />
   <Footer/>


    </div>
  )
}