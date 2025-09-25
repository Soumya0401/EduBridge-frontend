import React from 'react';
import Home from './Home/Home';

import { Navigate, Route, Routes } from "react-router-dom";
import Service from './Service/Service';
import SignUp from './components/SignUp';
import { useAuth } from './context/AuthProvider';
import { Toaster } from 'react-hot-toast';
import Services from './components/Services.jsx';


function App() {
  const [authUser,setAuthUser]=useAuth()
  console.log(authUser);


  return(<>
  <div className="dark:bg-slate-900 dark:text-white">
 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/Services" element={authUser?<Service/>:<Navigate to = "/SignUp"/>}/>
  <Route path="/SignUp" element={<SignUp/>}/>
  
 </Routes>
 <Toaster/>
 </div>
  </>);
}

export default App;
