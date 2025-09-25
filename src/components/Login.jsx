import React from 'react';
import { Await, Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';
function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => { const userInfo={
        
        phoneNumber:data.phoneNumber,
        password:data.password,
    }
    await axios.post("https://edubridge-74c7.onrender.com/user/login" , userInfo )
    .then((res)=>{
        console.log(res.data)
        if(res.data){
            toast.success("Logged in successfully");
            document.getElementById("my_modal_3").close();
            setTimeout(()=>{
                
                window.location.reload();
                
         
               localStorage.setItem("Users", JSON.stringify(res.data.user));
            },1000)
        }
        
        
    })
    .catch((err)=>{
        if(err.response){
        console.log(err);
       toast.error("Error: " + err.response.data.message)
        setTimeout(()=>{}, 2000);
    }
    })}

    return ( 
        <>
        <div className='dark:bg-slate-900 dark:text-white dark:border'>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box dark:bg-slate-900 dark:text-white dark:border">
                    <div className="relative">
                        <Link 
                            to="/" 
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={() =>document.getElementById("my_modal_3").close() }>
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

                            {/* Password */}
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

                            {/* Button */}
                            <div className='flex justify-around mt-4'>
                                <button 
                                    type="submit"
                                    className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
                                >
                                    Login
                                </button>
                                <p>
                                    Not registered?{" "}
                                    <Link to="/SignUp" className='underline text-blue-500 cursor-pointer'>
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
