import React from 'react'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Footer from '../components/Footer'
import list from "../../public/list.json"

function Service() {
    
  return (
   <>
   <Navbar/>
   <div className=" min-h-screen">
    <Services/>
   </div>

   <Footer/>

   </>
  )
}

export default Service
