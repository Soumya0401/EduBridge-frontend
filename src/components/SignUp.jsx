import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Login from './Login.jsx'
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

function SignUp() {
    const location=useLocation();
        const from=location.state?.from?.pathname || "/";
        const navigate=useNavigate()
     const {
            register,
            handleSubmit,
            formState: { errors },
        } = useForm();
    
        const onSubmit = async (data) => {
            const userInfo={
                fullname:data.fullname,
                phoneNumber:data.phoneNumber,
                password:data.password,
            }
            await axios.post("https://edubridge-74c7.onrender.com/user/signup" , userInfo )
            .then((res)=>{
                console.log(res.data)
                if(res.data){
                    toast.success("Sign up successfully");
                    navigate(from, {replace: true});
                }
                localStorage.setItem("Users", JSON.stringify(res.data.user));
                
            })
            .catch((err)=>{
                if(err.response){
                console.log(err);
                toast.error("Error: " + err.response.data.message);
            }
            })
         
        };
    
  return (
   <>
    <div>
    <div className=' flex h-screen items-center justify-center  dark:bg-slate-900 dark:text-white'>
   <div className="w-[600px] ">
  <div className="modal-box dark:bg-slate-900 dark:text-white dark:border">
    <form onSubmit={handleSubmit(onSubmit)}  method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    
    <h3 className="font-bold text-lg">SignUp</h3>
    {/* name */}
    <div  className="mt-4 space-y-2">
        <span>Name : </span>
        <br />
        <input type="text" 
        placeholder='Enter Your Full Name'
        className=" dark:bg-slate-900 dark:text-white dark:border w-80 px-3 py-1 border rounded-md outline-none"
        {...register("fullname", { required: true })} />
         <br />
                                {errors.fullname && (
                                    <span className="text-sm text-red-500">
                                        This field is required
                                    </span>
                                )}
    </div>
    {/* phone */}
    <div className="mt-4 space-y-2">
                                <span>Phone No.:</span>
                                <br />
                                <input 
                                    type="tel"
                                    placeholder='Enter Your Phone Number'
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

    {/* password */}
    <div className="mt-4 space-y-2">
                                <span>Password:</span>
                                <br />
                                <input 
                                    type="password" 
                                    placeholder='Enter Your Password'
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
    {/* button */}
    <div className='flex justify-around mt-4'>
        <button 
        type='submit'
         className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">SignUp</button>
        <p className='text-xl'>Have Account?
            <button
             className='underline text-blue-500 cursor-pointer'
             onClick={()=>document.getElementById('my_modal_3').showModal()}
             >Login</button>{" "}
             <Login/>
        </p>

    </div>
    </form>
  </div>
  
</div>
   </div>
    </div>
   </>
  )
}

export default SignUp
