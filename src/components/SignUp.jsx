import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
// Login component is no longer needed here as the modal is handled globally
import toast from 'react-hot-toast';
import axios from 'axios';

function SignUp() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            phoneNumber: data.phoneNumber,
            password: data.password,
            userType: data.userType, 
        };
        await axios.post("https://edubridge-74c7.onrender.com/user/signup", userInfo)
            .then((res) => {
                if (res.data) {
                    toast.success("Signup Successful!");
                    navigate("/");
                    localStorage.setItem("Users", JSON.stringify(res.data.user));
                }
            }).catch((err) => {
                if (err.response) {
                    toast.error("Error: " + err.response.data.message);
                }
            });
    };

    // This function handles the navigation and opens the modal
    const handleLoginClick = () => {
        navigate("/"); // First, go back to the homepage
        // Use a short delay to ensure the navigation happens before the modal opens
        setTimeout(() => {
            const loginModal = document.getElementById("my_modal_3");
            if (loginModal) {
                loginModal.showModal();
            }
        }, 100);
    };

    return (
        <div 
            className="relative flex h-screen items-center justify-center bg-cover bg-center"
            // --- FIX APPLIED HERE: Corrected the background image URL ---
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop')" }}
        >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

            <div className="relative z-10 w-full max-w-2xl p-8 space-y-4 bg-white/10 border border-white/20 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white">✕</Link>
                    <h3 className="font-bold text-2xl text-white text-center">Create Your Account</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mt-4">
                        {/* Name */}
                        <div className='space-y-2'>
                            <span className="text-white">Name</span>
                            <input type="text" placeholder='Enter your fullname' className='w-full px-3 py-2 border rounded-md outline-none bg-transparent text-white border-white/30 focus:border-white' {...register("fullname", { required: true })} />
                            {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        
                        {/* Phone Number */}
                        <div className='space-y-2'>
                            <span className="text-white">Phone Number</span>
                            <input type="tel" placeholder='Enter your phone number' className='w-full px-3 py-2 border rounded-md outline-none bg-transparent text-white border-white/30 focus:border-white' {...register("phoneNumber", { required: true })} />
                            {errors.phoneNumber && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        
                        {/* Password */}
                        <div className='space-y-2'>
                            <span className="text-white">Password</span>
                            <input type="password" placeholder='Enter your password' className='w-full px-3 py-2 border rounded-md outline-none bg-transparent text-white border-white/30 focus:border-white' {...register("password", { required: true })} />
                            {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        {/* Role */}
                        <div className='space-y-2'>
                            <span className="text-white">Role</span>
                            <select
                                className='w-full px-3 py-2 border rounded-md outline-none bg-slate-800/50 text-white border-white/30 focus:border-white'
                                {...register("userType", { required: "Please select a role" })}
                            >
                                <option value="">Select your role</option>
                                <option value="student">Student</option>
                                <option value="teacher">Teacher</option>
                                <option value="school">School/NGO</option>
                            </select>
                            {errors.userType && <span className='text-sm text-red-500'>{errors.userType.message}</span>}
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className='flex justify-between items-center mt-6'>
                        <p className="text-white">Have an account?{" "}
                            <button
                                type="button"
                                className='underline text-blue-400 cursor-pointer'
                                onClick={handleLoginClick} // Use the new handler function
                            >
                                Login
                            </button>
                        </p>
                        <button type="submit" className='bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200'>Signup</button>
                    </div>
                </form>
            </div>
            {/* The Login component is no longer rendered here to prevent issues */}
        </div>
    );
}

export default SignUp;


