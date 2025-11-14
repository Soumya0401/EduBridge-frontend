// import React from 'react';
// import { useForm } from 'react-hook-form';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import { Link } from 'react-router-dom';

// function Contact() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//     reset,
//   } = useForm();

//   const onSubmit = async (data) => {
//     const contactInfo = {
//       name: data.name,
//       email: data.email,
//       phone: data.phone,
//       message: data.message,
//     };

//     try {
//       // await axios.post("/contact", contactInfo);
//       axios.post('http://localhost:4001/contact', formData);
//       toast.success("Message sent successfully!");
//       reset();
//     } catch (error) {
//       console.error("Submission error:", error);
//       toast.error("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center p-4">
//       {/* --- 1. NEW CONTACT-THEMED BACKGROUND IMAGE --- */}
//       <div
//         className="absolute inset-0 bg-cover bg-center filter blur-sm brightness-50"
//         style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop')" }}
//       ></div>
      
//       {/* --- 2. BACK BUTTON MOVED TO FAR LEFT --- */}
//       {/* This Link is now outside the centered container, so it positions to the screen's edge */}
//       <Link to="/" className="absolute top-0 left-0 m-4 md:m-8 text-white bg-black/30 hover:bg-black/50 px-4 py-2 rounded-lg transition-colors duration-300 flex items-center gap-2 z-20">
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
//           </svg>
          
//       </Link>
      
//       {/* Centered container for the form */}
//       <div className="relative z-10 w-full max-w-2xl">
//         <div className="bg-white/10 backdrop-blur-lg text-white p-8 border border-white/20 rounded-lg shadow-lg">
//           <form onSubmit={handleSubmit(onSubmit)} noValidate>
//             <h3 className="font-bold text-3xl mb-2 text-center">Contact Us</h3>
//             <p className="text-center mb-8">Send Us a Message!</p>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {/* Name */}
//                 <div className="space-y-2">
//                     <span>Name</span>
//                     <input type="text" placeholder="Enter your name" className="w-full px-3 py-2 border rounded-md outline-none bg-transparent border-white/30 focus:border-white" {...register("name", { required: true })} />
//                 </div>
//                 {/* Mobile Number */}
//                 <div className="space-y-2">
//                     <span>Mobile Number</span>
//                     <div className="flex items-center border rounded-md bg-transparent border-white/30 focus-within:border-white">
//                         <span className="px-3 text-white/70">+91</span>
//                         <input type="tel" placeholder="Enter your 10-digit number" className="w-full px-3 py-2 border-l border-white/30 bg-transparent outline-none" {...register("phone", { required: true, pattern: /^[0-9]{10}$/ })} />
//                     </div>
//                 </div>
//                 {/* Email */}
//                 <div className="space-y-2 md:col-span-2">
//                     <span>Email</span>
//                     <input type="email" placeholder="Enter your email" className="w-full px-3 py-2 border rounded-md outline-none bg-transparent border-white/30 focus:border-white" {...register("email", { required: true })} />
//                 </div>
//                 {/* Message */}
//                 <div className="space-y-2 md:col-span-2">
//                     <span>Message</span>
//                     <textarea placeholder="Type your message" className="w-full px-3 py-2 border rounded-md outline-none bg-transparent border-white/30 focus:border-white" rows="4" {...register("message", { required: true })} />
//                 </div>
//             </div>

//             {/* Submit Button */}
//             <div className="flex justify-end mt-6">
//               <button disabled={isSubmitting} className="bg-pink-500 text-white rounded-md px-6 py-2 hover:bg-pink-700 duration-300 disabled:bg-gray-400">
//                 {isSubmitting ? "Submitting..." : "Submit"}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;

import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const contactInfo = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
    };

    try {
      // --- START OF FIX ---
      // The variable being sent must match the one you created.
      // Changed 'formData' to 'contactInfo'.
      await axios.post('http://localhost:4001/contact', contactInfo);
      // --- END OF FIX ---

      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4">
      {/* --- 1. NEW CONTACT-THEMED BACKGROUND IMAGE --- */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm brightness-50"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop')" }}
      ></div>
      
      {/* --- 2. BACK BUTTON MOVED TO FAR LEFT --- */}
      {/* This Link is now outside the centered container, so it positions to the screen's edge */}
      <Link to="/" className="absolute top-0 left-0 m-4 md:m-8 text-white bg-black/30 hover:bg-black/50 px-4 py-2 rounded-lg transition-colors duration-300 flex items-center gap-2 z-20">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          
      </Link>
      
      {/* Centered container for the form */}
      <div className="relative z-10 w-full max-w-2xl">
        <div className="bg-white/10 backdrop-blur-lg text-white p-8 border border-white/20 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <h3 className="font-bold text-3xl mb-2 text-center">Contact Us</h3>
            <p className="text-center mb-8">Send Us a Message!</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                    <span>Name</span>
                    <input type="text" placeholder="Enter your name" className="w-full px-3 py-2 border rounded-md outline-none bg-transparent border-white/30 focus:border-white" {...register("name", { required: true })} />
                </div>
                {/* Mobile Number */}
                <div className="space-y-2">
                    <span>Mobile Number</span>
                    <div className="flex items-center border rounded-md bg-transparent border-white/30 focus-within:border-white">
                        <span className="px-3 text-white/70">+91</span>
                        <input type="tel" placeholder="Enter your 10-digit number" className="w-full px-3 py-2 border-l border-white/30 bg-transparent outline-none" {...register("phone", { required: true, pattern: /^[0-9]{10}$/ })} />
                    </div>
                </div>
                {/* Email */}
                <div className="space-y-2 md:col-span-2">
                    <span>Email</span>
                    <input type="email" placeholder="Enter your email" className="w-full px-3 py-2 border rounded-md outline-none bg-transparent border-white/30 focus:border-white" {...register("email", { required: true })} />
                </div>
                {/* Message */}
                <div className="space-y-2 md:col-span-2">
                    <span>Message</span>
                    <textarea placeholder="Type your message" className="w-full px-3 py-2 border rounded-md outline-none bg-transparent border-white/30 focus:border-white" rows="4" {...register("message", { required: true })} />
                </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end mt-6">
              <button disabled={isSubmitting} className="bg-pink-500 text-white rounded-md px-6 py-2 hover:bg-pink-700 duration-300 disabled:bg-gray-400">
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;