import React from 'react'
import banner from "../../public/Banner.jpg";

function Banner() {
  return (
  <>
  <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
    <div className="w-full md:order-1 order-2 md:w-1/2 mt-12 md:mt-35">
    <div className="space-y-8">
    <h1 className="text-2xl md:text-7xl font-bold">Opening
    Doors to {" "}
    <span className="text-pink-500">Education for All!</span></h1>
    
    <p className="text-sm md:text-xl"> EduBridge is more than just a platform; it's a lifeline for children in need. Designed for families of migratory laborers, daily wage workers, and underserved communities, EduBridge connects them to nearby government schools, NGOs, and learning centers offering free education and skill development.

        With features like GPS-based school discovery, one-tap contact, and multilingual support, we ensure that no child is left behind. Whether it's enrolling in a school, finding vocational training, or accessing free learning resources, EduBridge is here to make education accessible, inclusive, and transformative.

          Empower a child, enrich a future—start the journey with EduBridge today!</p>
         
<label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
</div>
<button className=" mt-6 btn btn-active btn-secondary">Get Started </button>
</div>  
    <div className="w-full order-1 md:w-1/2">
    <img
            src={banner}
            className="md:w-[800px] md:h-[550px] md:ml-12 mt-7 md:mt-12 "
            alt=""
          />
    </div>
  </div>
  </>
  );
}

export default Banner
