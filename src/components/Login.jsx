// import React from 'react';
// import { Await, Link } from 'react-router-dom';
// import { useForm } from "react-hook-form";
// import axios from 'axios';
// import toast from 'react-hot-toast';
// function Login() {
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//     } = useForm();

//     const onSubmit = async (data) => { const userInfo={

//         phoneNumber:data.phoneNumber,
//         password:data.password,
//     }
//     await axios.post("https://edubridge-74c7.onrender.com/user/login" , userInfo )
//     .then((res)=>{
//         console.log(res.data)
//         if(res.data){
//             toast.success("Logged in successfully");
//             document.getElementById("my_modal_3").close();
//             setTimeout(()=>{

//                 window.location.reload();

//                localStorage.setItem("Users", JSON.stringify(res.data.user));
//             },1000)
//         }

//     })
//     .catch((err)=>{
//         if(err.response){
//         console.log(err);
//        toast.error("Error: " + err.response.data.message)
//         setTimeout(()=>{}, 2000);
//     }
//     })}

//     return (
//         <>
//         <div className='dark:bg-slate-900 dark:text-white dark:border'>
//             <dialog id="my_modal_3" className="modal">
//                 <div className="modal-box dark:bg-slate-900 dark:text-white dark:border">
//                     <div className="relative">
//                         <Link
//                             to="/"
//                             className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//                             onClick={() =>document.getElementById("my_modal_3").close() }>
//                             ✕
//                         </Link>
//                         <h3 className="font-bold text-lg">Login</h3>

//                         <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
//                             {/* Phone */}
//                             <div className="mt-4 space-y-2">
//                                 <span>Phone No.:</span>
//                                 <br />
//                                 <input
//                                     type="tel"
//                                     placeholder='Enter Your Phone Number'
//                                     className="dark:bg-slate-900 dark:text-white dark:border w-80 px-3 py-1 border rounded-md outline-none"
//                                     {...register("phoneNumber", { required: true })}
//                                 />
//                                 <br />
//                                 {errors.phoneNumber && (
//                                     <span className="text-sm text-red-500">
//                                         This field is required
//                                     </span>
//                                 )}
//                             </div>

//                             {/* Password */}
//                             <div className="mt-4 space-y-2">
//                                 <span>Password:</span>
//                                 <br />
//                                 <input
//                                     type="password"
//                                     placeholder='Enter Your Password'
//                                     className="dark:bg-slate-900 dark:text-white dark:border w-80 px-3 py-1 border rounded-md outline-none"
//                                     {...register("password", { required: true })}
//                                 />
//                                 <br />
//                                 {errors.password && (
//                                     <span className="text-sm text-red-500">
//                                         This field is required
//                                     </span>
//                                 )}
//                             </div>

//                             {/* Button */}
//                             <div className='flex justify-around mt-4'>
//                                 <button
//                                     type="submit"
//                                     className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
//                                 >
//                                     Login
//                                 </button>
//                                 <p>
//                                     Not registered?{" "}
//                                     <Link to="/SignUp" className='underline text-blue-500 cursor-pointer'>
//                                         SignUp
//                                     </Link>
//                                 </p>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </dialog>

//         </div>
//         </>
//     );
// }

// export default Login;

// import React from 'react';
// import { Await, Link, useNavigate } from 'react-router-dom'; // Added useNavigate to imports
// import { useForm } from "react-hook-form";
// import axios from 'axios';
// import toast from 'react-hot-toast';

// function Login() {
//     // useNavigate is usually not needed here since we are using <Link> for navigation,
//     // but the programmatic modal close is crucial.
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//     } = useForm();

//     const onSubmit = async (data) => {
//         const userInfo = {
//             phoneNumber: data.phoneNumber,
//             password: data.password,
//         }
//         await axios.post("https://edubridge-74c7.onrender.com/user/login" , userInfo )
//         .then((res)=>{
//             console.log(res.data)
//             if(res.data){
//                 toast.success("Logged in successfully");
//                 document.getElementById("my_modal_3").close();
//                 setTimeout(()=>{
//                     // NOTE: Use React Router's useNavigate for navigation, not window.location.reload(),
//                     // unless you specifically need a full page refresh.
//                     window.location.reload();
//                     localStorage.setItem("Users", JSON.stringify(res.data.user));
//                 },1000)
//             }
//         })
//         .catch((err)=>{
//             if(err.response){
//                 console.log(err);
//                 toast.error("Error: " + err.response.data.message)
//                 setTimeout(()=>{}, 2000);
//             }
//         })}

//     return (
//         <>
//         <div className='dark:bg-slate-900 dark:text-white dark:border'>
//             <dialog id="my_modal_3" className="modal">
//                 <div className="modal-box dark:bg-slate-900 dark:text-white dark:border">
//                     <div className="relative">
//                         <Link
//                             to="/"
//                             className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//                             onClick={() =>document.getElementById("my_modal_3").close() }>
//                             ✕
//                         </Link>
//                         <h3 className="font-bold text-lg">Login</h3>

//                         <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
//                             {/* Phone */}
//                             <div className="mt-4 space-y-2">
//                                 <span>Phone No.:</span>
//                                 <br />
//                                 <input
//                                     type="tel"
//                                     placeholder='Enter Your Phone Number'
//                                     className="dark:bg-slate-900 dark:text-white dark:border w-80 px-3 py-1 border rounded-md outline-none"
//                                     {...register("phoneNumber", { required: true })}
//                                 />
//                                 <br />
//                                 {errors.phoneNumber && (
//                                     <span className="text-sm text-red-500">
//                                         This field is required
//                                     </span>
//                                 )}
//                             </div>

//                             {/* Password */}
//                             <div className="mt-4 space-y-2">
//                                 <span>Password:</span>
//                                 <br />
//                                 <input
//                                     type="password"
//                                     placeholder='Enter Your Password'
//                                     className="dark:bg-slate-900 dark:text-white dark:border w-80 px-3 py-1 border rounded-md outline-none"
//                                     {...register("password", { required: true })}
//                                 />
//                                 <br />
//                                 {errors.password && (
//                                     <span className="text-sm text-red-500">
//                                         This field is required
//                                     </span>
//                                 )}
//                             </div>

//                             {/* Button */}
//                             <div className='flex justify-around mt-4'>
//                                 <button
//                                     type="submit"
//                                     className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
//                                 >
//                                     Login
//                                 </button>
//                                 <p>
//                                     Not registered?{" "}
//                                     {/* FIX APPLIED HERE: Added onClick handler to close the modal before navigating */}
//                                     <Link
//                                         to="/SignUp"
//                                         className='underline text-blue-500 cursor-pointer'
//                                         onClick={() => document.getElementById("my_modal_3").close()}
//                                     >
//                                         SignUp
//                                     </Link>
//                                 </p>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </dialog>

//         </div>
//         </>
//     );
// }

// export default Login;

// import React from 'react';
// import { Await, Link, useNavigate } from 'react-router-dom';
// import { useForm } from "react-hook-form";
// import axios from 'axios';
// import toast from 'react-hot-toast';

// function Login() {
//     // You can remove Await from imports as it's not being used here.
//     const navigate = useNavigate(); // Added navigate hook for better routing

//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//     } = useForm();

//     const onSubmit = async (data) => {
//         const userInfo = {
//             phoneNumber: data.phoneNumber,
//             password: data.password,
//         }
//         await axios.post("https://edubridge-74c7.onrender.com/user/login" , userInfo )
//         .then((res)=>{
//             console.log(res.data)
//             if(res.data){
//                 toast.success("Logged in successfully");

//                 // 🔑 CRITICAL FIX: Store the authentication token separately!
//                 // Assuming your backend sends the token in res.data.token
//                 localStorage.setItem("token", res.data.token);

//                 // Store user details (as you were doing)
//                 localStorage.setItem("Users", JSON.stringify(res.data.user));

//                 // Close the modal
//                 document.getElementById("my_modal_3").close();

//                 // Use setTimeout to allow the toast to show briefly
//                 setTimeout(()=>{
//                     // Use navigate('/dashboard') if you want a clean history,
//                     // or window.location.reload() for a full page state reset (as you currently prefer).
//                     window.location.reload();
//                 },1000)
//             }
//         })
//         .catch((err)=>{
//             if(err.response){
//                 console.log(err);
//                 toast.error("Error: " + err.response.data.message)
//                 // You don't need a setTimeout here unless you're waiting for something specific
//             } else {
//                 toast.error("An unexpected error occurred.")
//             }
//         })
//     }

//     return (
//         // ... (rest of your component's JSX remains the same)
//         <>
//         <div className='dark:bg-slate-900 dark:text-white dark:border'>
//             <dialog id="my_modal_3" className="modal">
//                 <div className="modal-box dark:bg-slate-900 dark:text-white dark:border">
//                     <div className="relative">
//                         <Link
//                             to="/"
//                             className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//                             onClick={() =>document.getElementById("my_modal_3").close() }>
//                             ✕
//                         </Link>
//                         <h3 className="font-bold text-lg">Login</h3>

//                         <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
//                             {/* Phone */}
//                             <div className="mt-4 space-y-2">
//                                 <span>Phone No.:</span>
//                                 <br />
//                                 <input
//                                     type="tel"
//                                     placeholder='Enter Your Phone Number'
//                                     className="dark:bg-slate-900 dark:text-white dark:border w-80 px-3 py-1 border rounded-md outline-none"
//                                     {...register("phoneNumber", { required: true })}
//                                 />
//                                 <br />
//                                 {errors.phoneNumber && (
//                                     <span className="text-sm text-red-500">
//                                         This field is required
//                                     </span>
//                                 )}
//                             </div>

//                             {/* Password */}
//                             <div className="mt-4 space-y-2">
//                                 <span>Password:</span>
//                                 <br />
//                                 <input
//                                     type="password"
//                                     placeholder='Enter Your Password'
//                                     className="dark:bg-slate-900 dark:text-white dark:border w-80 px-3 py-1 border rounded-md outline-none"
//                                     {...register("password", { required: true })}
//                                 />
//                                 <br />
//                                 {errors.password && (
//                                     <span className="text-sm text-red-500">
//                                         This field is required
//                                     </span>
//                                 )}
//                             </div>

//                             {/* Button */}
//                             <div className='flex justify-around mt-4'>
//                                 <button
//                                     type="submit"
//                                     className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
//                                 >
//                                     Login
//                                 </button>
//                                 <p>
//                                     Not registered?{" "}
//                                     <Link
//                                         to="/SignUp"
//                                         className='underline text-blue-500 cursor-pointer'
//                                         onClick={() => document.getElementById("my_modal_3").close()}
//                                     >
//                                         SignUp
//                                     </Link>
//                                 </p>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </dialog>

//         </div>
//         </>
//     );
// }

// export default Login;

// import { Await, Link, useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import toast from "react-hot-toast";
// import constant from "../utils/constant";

// function Login() {
//   // You can remove Await from imports as it's not being used here.
//   const navigate = useNavigate(); // Added navigate hook for better routing

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     const userInfo = {
//       phoneNumber: data.phoneNumber,
//       password: data.password,
//     };
//     //  await axios.post("https://edubridge-74c7.onrender.com/user/login" , userInfo )
//     await axios
//       .post(constant.apiUrl + "/user/login", userInfo)
//       .then((res) => {
//         console.log(constant.apiUrl + "/user/login");
//         console.log(res.data);
//         if (res.data) {
//           toast.success("Logged in successfully");

//           // 🔑 CRITICAL FIX: Store the authentication token separately!
//           // Assuming your backend sends the token in res.data.token
//           localStorage.setItem("token", res.data.token);

//           // Store user details (as you were doing)
//           localStorage.setItem("Users", JSON.stringify(res.data.user));

//           // Close the modal
//           document.getElementById("my_modal_3").close();

//           // Use setTimeout to allow the toast to show briefly
//           setTimeout(() => {
//             // 🔄 CHANGE APPLIED HERE: Using navigate('/dashboard') instead of window.location.reload()
//             // The 'replace: true' option ensures the user cannot hit the back button to return to the login page.
//             navigate("/dashboard", { replace: true });
//           }, 1000);
//         }
//       })
//       .catch((err) => {
//         console.log("Error is ", err);
//         if (err.response) {
//           console.log(err);
//           toast.error("Error: " + err.response.data.message);
//           // You don't need a setTimeout here unless you're waiting for something specific
//         } else {
//           toast.error("An unexpected error occurred.");
//         }
//       });
//   };

//   return (
//     // ... (rest of your component's JSX remains the same)
//     <>
//       <div className="dark:bg-slate-900 dark:text-white dark:border">
//         <dialog id="my_modal_3" className="modal">
//           <div className="modal-box dark:bg-slate-900 dark:text-white dark:border">
//             <div className="relative">
//               <Link
//                 to="/"
//                 className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//                 onClick={() => document.getElementById("my_modal_3").close()}
//               >
//                 ✕
//               </Link>
//               <h3 className="font-bold text-lg">Login</h3>

//               <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
//                 {/* Phone */}
//                 <div className="mt-4 space-y-2">
//                   <span>Phone No.:</span>
//                   <br />
//                   <input
//                     type="tel"
//                     placeholder="Enter Your Phone Number"
//                     className="dark:bg-slate-900 dark:text-white dark:border w-80 px-3 py-1 border rounded-md outline-none"
//                     {...register("phoneNumber", { required: true })}
//                   />
//                   <br />
//                   {errors.phoneNumber && (
//                     <span className="text-sm text-red-500">
//                       This field is required
//                     </span>
//                   )}
//                 </div>

//                 {/* Password */}
//                 <div className="mt-4 space-y-2">
//                   <span>Password:</span>
//                   <br />
//                   <input
//                     type="password"
//                     placeholder="Enter Your Password"
//                     className="dark:bg-slate-900 dark:text-white dark:border w-80 px-3 py-1 border rounded-md outline-none"
//                     {...register("password", { required: true })}
//                   />
//                   <br />
//                   {errors.password && (
//                     <span className="text-sm text-red-500">
//                       This field is required
//                     </span>
//                   )}
//                 </div>

//                 {/* Button */}
//                 <div className="flex justify-around mt-4">
//                   <button
//                     type="submit"
//                     className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
//                   >
//                     Login
//                   </button>
//                   <p>
//                     Not registered?{" "}
//                     <Link
//                       to="/SignUp"
//                       className="underline text-blue-500 cursor-pointer"
//                       onClick={() =>
//                         document.getElementById("my_modal_3").close()
//                       }
//                     >
//                       SignUp
//                     </Link>
//                   </p>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </dialog>
//       </div>
//     </>
//   );
// }

//export default Login;


import { Link, useNavigate } from "react-router-dom"; 
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import constant from "../utils/constant";

function Login() {
  const navigate = useNavigate(); // We still use navigate for other things

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      phoneNumber: data.phoneNumber,
      password: data.password,
    };
    
    await axios
      .post(constant.apiUrl + "/user/login", userInfo)
      .then((res) => {
        console.log(constant.apiUrl + "/user/login");
        console.log(res.data);
        if (res.data) {
          toast.success("Logged in successfully");

          // Store the token
          localStorage.setItem("token", res.data.token);

          // Store user details
          localStorage.setItem("Users", JSON.stringify(res.data.user));

          // Close the modal
          document.getElementById("my_modal_3").close();

          // Use setTimeout to allow the toast to show briefly
          setTimeout(() => {
            // 🔄 CHANGE APPLIED HERE
            // This forces a full page reload to the dashboard,
            // which solves the problem in your App.jsx.
            window.location.href = "/dashboard";
          }, 1000);
        }
      })
      .catch((err) => {
        console.log("Error is ", err);
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        } else {
          toast.error("An unexpected error occurred.");
        }
      });
  };

  return (
    // ... (Your JSX remains exactly the same, no changes needed here)
    <>
      <div className="dark:bg-slate-900 dark:text-white dark:border">
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box dark:bg-slate-900 dark:text-white dark:border">
            <div className="relative">
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => document.getElementById("my_modal_3").close()}
              >
                ✕
              </Link>
              <h3 className="font-bold text-lg">Login</h3>

              <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                {/* Phone */}
                <div className="mt-4 space-y-2">
                  <span>Phone No.:</span>
                  <br />
                  <input
                    type="tel"
                    placeholder="Enter Your Phone Number"
                    className="dark:bg-slate-900 dark:text-white dark:border w-80 px-3 py-1 border rounded-md outline-none"
                    {...register("phoneNumber", { required: true })}
                  />
                  <br />
                  {errors.phoneNumber && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>

                {/* Password */}
                <div className="mt-4 space-y-2">
                  <span>Password:</span>
                  <br />
                  <input
                    type="password"
                    placeholder="Enter Your Password"
                    className="dark:bg-slate-900 dark:text-white dark:border w-80 px-3 py-1 border rounded-md outline-none"
                    {...register("password", { required: true })}
                  />
                  <br />
                  {errors.password && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>

                {/* Button */}
                <div className="flex justify-around mt-4">
                  <button
                    type="submit"
                    className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
                  >
                    Login
                  </button>
                  <p>
                    Not registered?{" "}
                    <Link
                      to="/SignUp"
                      className="underline text-blue-500 cursor-pointer"
                      onClick={() =>
                        document.getElementById("my_modal_3").close()
                      }
                    >
                      SignUp
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
