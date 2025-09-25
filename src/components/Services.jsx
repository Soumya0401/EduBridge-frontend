import React, { useEffect, useState } from 'react'
import { Await, Link } from "react-router-dom";
import Cards from './Cards';
import list from "../../public/list.json"
import axios from 'axios';
function Services() {
  const [book,setBook]=useState([])
  useEffect(()=>{
    const getBook = async()=>{
      try {
       const res = await axios.get("https://edubridge-74c7.onrender.com/book")
       console.log(res.data)
       setBook(res.data)
      } catch (error) {
        console.log(error)
        
      }
    }
    getBook();
  },[])
  return (
    <>
    .
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div  className="mt-28 items-center justify-center text-center dark:bg-slate-900 dark:text-white ">
        <h1 className="text-2xl  md:text-4xl">Some ways you can become a {" "}
        <span className="text-pink-500"> change maker</span></h1>

        <h1 className="text-2xl mt-3 md:text-4xl">Any skill you bring, we shall {" "}
        <span className="text-pink-500"> Accomodate</span></h1>
        <p className="mt-12">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum iure impedit itaque deleniti quibusdam ex excepturi natus ipsum ullam reiciendis fugit nesciunt, quasi quidem tenetur facilis velit harum, magni nam facere cum doloremque molestias. Accusamus nesciunt odio tempora ipsam temporibus laudantium deserunt placeat! Soluta ducimus aut quae debitis earum, eius rerum itaque molestias perferendis adipisci, eos asperiores eligendi cupiditate mollitia natus omnis laborum ab sapiente neque obcaecati sint. Rerum, excepturi, deleniti in sequi dignissimos assumenda labore quidem totam aperiam ratione ullam ad fugiat ea aliquid minus iste enim quo voluptatum accusamus sit eius. Earum voluptatibus placeat vero, eos quae deleniti!</p>
        
     
      <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
      </div >
      

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
      
      {
        book.map((item)=>(
          <Cards key={item.id} item={item}/>
        ))
      }
      </div>
    </div>
    
    </>
  )
}

export default Services
