// // // // import React, { useRef } from 'react';
// // // // import { Navigate, Route, Routes, useLocation } from "react-router-dom";
// // // // import { useAuth } from './context/AuthProvider';
// // // // import { Toaster } from 'react-hot-toast';

// // // // // Import all your components
// // // // import Home from './Home/Home';
// // // // import Services from './components/Services';
// // // // import SignUp from './components/SignUp';
// // // // import Navbar from './components/Navbar';
// // // // import Contact from './components/Contact';
// // // // import About from './components/About';
// // // // import StudentResources from './components/StudentResources';
// // // // import TeacherResources from './components/TeacherResources'; 
// // // // import SchoolResources from './components/SchoolResources';

// // // // function App() {
// // // //   const [authUser] = useAuth();

// // // //   // --- REMOVED --- The ref for the Contact modal is no longer needed.
// // // //   // const contactModalRef = useRef(null);
// // // //   const aboutModalRef = useRef(null); // Kept for the About modal

// // // //   const location = useLocation();
  
// // // //   const noNavbarPaths = ['/student-resources', '/teacher-resources', '/school-ngo-resources', '/contact'];

// // // //   return (
// // // //     <>
// // // //       {!noNavbarPaths.includes(location.pathname) && (
// // // //         // --- REMOVED --- The contactModalRef prop is no longer passed to Navbar.
// // // //         <Navbar aboutModalRef={aboutModalRef} />
// // // //       )}

// // // //       <div className="dark:bg-slate-900 dark:text-white">
// // // //         <Routes>
// // // //           <Route path="/" element={<Home />} />
// // // //           <Route
// // // //             path="/services"
// // // //             element={authUser ? <Services /> : <Navigate to="/signup" />}
// // // //           />
          
// // // //           {/* --- ADDED --- This is the new route for your Contact page. */}
// // // //           <Route path="/contact" element={<Contact />} />
          
// // // //           <Route
// // // //             path="/student-resources"
// // // //             element={authUser ? <StudentResources /> : <Navigate to="/signup" />}
// // // //           />
// // // //           <Route
// // // //             path="/teacher-resources"
// // // //             element={authUser ? <TeacherResources /> : <Navigate to="/signup" />}
// // // //           />
// // // //           <Route
// // // //             path="/school-resources"
// // // //             element={authUser ? <SchoolResources /> : <Navigate to="/signup" />}
// // // //           />
        
// // // //           <Route path="/signup" element={<SignUp />} />
// // // //         </Routes>
// // // //         <Toaster />
// // // //       </div>

// // // //       {/* --- REMOVED --- The Contact component is now handled by the router above. */}
// // // //       {/* <Contact ref={contactModalRef} /> */}
// // // //       <About ref={aboutModalRef} />
// // // //     </>
// // // //   );
// // // // }export default App;

// // // import React, { useRef } from 'react';
// // // import { Navigate, Route, Routes, useLocation } from "react-router-dom";
// // // import { useAuth } from './context/AuthProvider';
// // // import { Toaster } from 'react-hot-toast';

// // // // --- ADDED --- Import the new components for protected routing
// // // import ProtectedRoute from './components/ProtectedRoute';
// // // import Unauthorized from './components/Unauthorized'; // We will create this next

// // // // Import all your page components
// // // import Home from './Home/Home';
// // // import Services from './components/Services';
// // // import SignUp from './components/SignUp';
// // // import Navbar from './components/Navbar';
// // // import Contact from './components/Contact';
// // // import About from './components/About';
// // // import StudentResources from './components/StudentResources';
// // // // import TeacherResources from './components/TeacherResources'; 
// // // // import SchoolResources from './components/SchoolResources';

// // // // function App() {
// // // //   const [authUser] = useAuth();
// // // //   const aboutModalRef = useRef(null);
// // // //   const location = useLocation();
// // // //   const noNavbarPaths = ['/student-resources', '/teacher-resources', '/school-resources', '/contact', '/unauthorized','/SignUp'];

// // // //   return (
// // // //     <>
// // // //       {!noNavbarPaths.includes(location.pathname) && (
// // // //         <Navbar aboutModalRef={aboutModalRef} />
// // // //       )}

// // // //       <div className="dark:bg-slate-900 dark:text-white">
// // // //         <Routes>
// // // //           {/* --- Public Routes --- */}
// // // //           <Route path="/" element={<Home />} />
// // // //           <Route path="/signup" element={<SignUp />} />
// // // //           <Route path="/contact" element={<Contact />} />
// // // //           <Route path="/unauthorized" element={<Unauthorized />} />
// // // //            <Route path="/about" element={<About />} />

// // // //           {/* --- Routes for any logged-in user --- */}
// // // //           <Route
// // // //             path="/services"
// // // //             element={authUser ? <Services /> : <Navigate to="/signup" />}
// // // //           />
          
// // // //           {/* --- Role-Protected Routes --- */}

// // // //           Student-only routes
// // // //           <Route element={<ProtectedRoute allowedRoles={['student']} />}>
// // // //             <Route path="/student-resources" element={<StudentResources />} />
// // // //           </Route>

// // // //           {/* Teacher-only routes */}
// // // //           <Route element={<ProtectedRoute allowedRoles={['teacher']} />}>
// // // //             <Route path="/teacher-resources" element={<TeacherResources />} />
// // // //           </Route>

// // // //           {/* School/NGO-only routes */}
// // // //           <Route element={<ProtectedRoute allowedRoles={['school', 'ngo']} />}>
// // // //             <Route path="/school-resources" element={<SchoolResources />} />
// // // //           </Route>

// // // //         </Routes>
// // // //         <Toaster />
// // // //       </div>
      
// // // //       <About ref={aboutModalRef} />
// // // //     </>
// // // //   );
// // // // }export default App;


// // // import React, { useRef } from 'react';
// // // import { Navigate, Route, Routes, useLocation } from "react-router-dom";
// // // import { useAuth } from './context/AuthProvider';
// // // import { Toaster } from 'react-hot-toast';

// // // // --- ADDED --- Import the new components for protected routing
// // // import ProtectedRoute from './components/ProtectedRoute';
// // // import Unauthorized from './components/Unauthorized'; // We will create this next

// // // // Import all your page components
// // // import Home from './Home/Home';
// // // import Services from './components/Services';
// // // import SignUp from './components/SignUp';
// // // import Navbar from './components/Navbar';
// // // import Contact from './components/Contact';
// // // import About from './components/About';
// // // import StudentResources from './components/StudentResources';
// // // import TeacherResources from './components/TeacherResources'; 
// // // import SchoolResources from './components/SchoolResources';

// // // // --- ADDED --- Import ChatApp
// // //  import ChatApp from './components/chat';

// // // function App() {
// // //   const [authUser] = useAuth();
// // //   const aboutModalRef = useRef(null);
// // //   const location = useLocation();
// // //   // Added /SignUp to this list
// // //   const noNavbarPaths = ['/student-resources', '/teacher-resources', '/school-resources', '/contact', '/unauthorized','/SignUp', '/chat'];

// // //   return (
// // //     <>
// // //       {!noNavbarPaths.includes(location.pathname) && (
// // //         <Navbar aboutModalRef={aboutModalRef} />
// // //       )}

// // //       <div className="dark:bg-slate-900 dark:text-white">
// // //         <Routes>
// // //           {/* --- Public Routes --- */}
// // //           <Route path="/" element={<Home />} />
// // //           <Route path="/signup" element={<SignUp />} />
// // //           <Route path="/contact" element={<Contact />} />
// // //           <Route path="/unauthorized" element={<Unauthorized />} />
// // //           {/* Removed /about route to keep it as a modal */}

// // //           {/* --- Routes for any logged-in user --- */}
// // //           <Route
// // //             path="/services"
// // //             element={authUser ? <Services /> : <Navigate to="/signup" />}
// // //           />
          
// // //           {/* --- Role-Protected Routes --- */}

// // //           {/* Student-only routes */}
// // //           <Route element={<ProtectedRoute allowedRoles={['student']} />}>
// // //             <Route path="/student-resources" element={<StudentResources />} />
// // //           </Route>

// // //           {/* Teacher-only routes */}
// // //           <Route element={<ProtectedRoute allowedRoles={['teacher']} />}>
// // //             <Route path="/teacher-resources" element={<TeacherResources />} />
// // //           </Route>

// // //           {/* School/NGO-only routes */}
// // //           <Route element={<ProtectedRoute allowedRoles={['school', 'ngo']} />}>
// // //             <Route path="/school-resources" element={<SchoolResources />} />
// // //           </Route>

// // //           {/* Chat route for all logged-in users */}
// // //           <Route element={<ProtectedRoute allowedRoles={['student', 'teacher', 'school', 'ngo']} />}>
// // //             <Route path="/chat" element={<ChatApp />} />
// // //           </Route>

// // //         </Routes>
// // //         <Toaster />
// // //       </div>
      
// // //       {/* This renders the About modal */}
// // //       <About ref={aboutModalRef} />
// // //     </>
// // //   );
// // // }
// // // export default App;


// // import React, { useRef } from 'react';
// // import { Navigate, Route, Routes, useLocation } from "react-router-dom";
// // import { useAuth } from './context/AuthProvider';
// // import { Toaster } from 'react-hot-toast';

// // // Import all your components
// // import ProtectedRoute from './components/ProtectedRoute';
// // import Unauthorized from './components/Unauthorized';
// // import Home from './Home/Home';
// // import Services from './components/Services';
// // import SignUp from './components/SignUp';
// // import Navbar from './components/Navbar';
// // import Contact from './components/Contact';
// // import About from './components/About';
// // import StudentResources from './components/StudentResources';
// // import TeacherResources from './components/TeacherResources'; 
// // import SchoolResources from './components/SchoolResources';
// // import ChatApp from './components/chat'; // Assuming you added Chat

// // function App() {
// //   const [authUser] = useAuth();
// //   const aboutModalRef = useRef(null);
// //   const location = useLocation();
// //   // Removed student-resources from this list so the navbar shows
// //   const noNavbarPaths = ['/teacher-resources', '/school-resources', '/contact', '/unauthorized', '/SignUp'];

// //   return (
// //     <>
// //       {!noNavbarPaths.includes(location.pathname) && (
// //         <Navbar aboutModalRef={aboutModalRef} />
// //       )}

// //       <div className="dark:bg-slate-900 dark:text-white">
// //         <Routes>
// //           {/* --- Public Routes --- */}
// //           <Route path="/" element={<Home />} />
// //           <Route path="/signup" element={<SignUp />} />
// //           <Route path="/contact" element={<Contact />} />
// //           <Route path="/unauthorized" element={<Unauthorized />} />
          
// //           {/* --- FIX: MOVED STUDENT RESOURCES HERE --- */}
// //           {/* This route is now public and accessible to everyone */}
// //           <Route path="/student-resources" element={<StudentResources />} />

// //           {/* --- Routes for any logged-in user --- */}
// //           <Route
// //             path="/services"
// //             element={authUser ? <Services /> : <Navigate to="/signup" />}
// //           />
          
// //           {/* --- Role-Protected Routes --- */}

// //           {/* Student-only routes (now empty) */}
// //           <Route element={<ProtectedRoute allowedRoles={['student']} />}>
// //             {/* The /student-resources route was removed from here */}
// //           </Route>

// //           {/* Teacher-only routes */}
// //           <Route element={<ProtectedRoute allowedRoles={['teacher']} />}>
// //             <Route path="/teacher-resources" element={<TeacherResources />} />
// //           </Route>

// //           {/* School/NGO-only routes */}
// //           <Route element={<ProtectedRoute allowedRoles={['school', 'ngo']} />}>
// //             <Route path="/school-resources" element={<SchoolResources />} />
// //           </Route>

// //           {/* Chat route (for all logged-in users) */}
// //           <Route element={<ProtectedRoute allowedRoles={['student', 'teacher', 'school', 'ngo']} />}>
// //             <Route path="/chat" element={<ChatApp />} />
// //           </Route>

// //         </Routes>
// //         <Toaster />
// //       </div>
      
// //       <About ref={aboutModalRef} />
// //     </>
// //   );
// // }
// // export default App;

// import React, { useRef } from 'react';
// import { Navigate, Route, Routes, useLocation } from "react-router-dom";
// import { useAuth } from './context/AuthProvider';
// import { Toaster } from 'react-hot-toast';

// // Import all your components
// import ProtectedRoute from './components/ProtectedRoute';
// import Unauthorized from './components/Unauthorized';
// import Home from './Home/Home';
// import Services from './components/Services';
// import SignUp from './components/SignUp';
// import Navbar from './components/Navbar';
// import Contact from './components/Contact';
// import About from './components/About';
// import StudentResources from './components/StudentResources';
// import TeacherResources from './components/TeacherResources'; 
// import SchoolResources from './components/SchoolResources';
// import ChatApp from './components/chat'; // Assuming you added Chat

// function App() {
//   const [authUser] = useAuth();
//   const aboutModalRef = useRef(null);
//   const location = useLocation();
//   // Removed student-resources from this list so the navbar shows
//   const noNavbarPaths = ['/teacher-resources', '/school-resources', '/contact', '/unauthorized', '/SignUp'];

//   return (
//     <>
//       {!noNavbarPaths.includes(location.pathname) && (
//         <Navbar aboutModalRef={aboutModalRef} />
//       )}

//       <div className="dark:bg-slate-900 dark:text-white">
//         <Routes>
//           {/* --- Public Routes --- */}
//           <Route path="/" element={<Home />} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/unauthorized" element={<Unauthorized />} />
          
//           {/* --- FIX: MOVED STUDENT RESOURCES HERE --- */}
//           {/* This route is now public and accessible to everyone */}
//           <Route path="/student-resources" element={<StudentResources />} />

//           {/* --- Routes for any logged-in user --- */}
//           <Route
//             path="/services"
//             element={authUser ? <Services /> : <Navigate to="/signup" />}
//           />
          
//           {/* --- Role-Protected Routes --- */}

//           {/* Student-only routes (now empty) */}
//           <Route element={<ProtectedRoute allowedRoles={['student']} />}>
//             {/* The /student-resources route was removed from here */}
//           </Route>

//           {/* Teacher-only routes */}
//           <Route element={<ProtectedRoute allowedRoles={['teacher']} />}>
//             <Route path="/teacher-resources" element={<TeacherResources />} />
//           </Route>

//           {/* School/NGO-only routes */}
//           <Route element={<ProtectedRoute allowedRoles={['school', 'ngo']} />}>
//             <Route path="/school-resources" element={<SchoolResources />} />
//           </Route>

//           {/* Chat route (for all logged-in users) */}
//           <Route element={<ProtectedRoute allowedRoles={['student', 'teacher', 'school', 'ngo']} />}>
//             <Route path="/chat" element={<ChatApp />} />
//           </Route>

//         </Routes>
//         <Toaster />
//       </div>
      
//       <About ref={aboutModalRef} />
//     </>
//   );
// }
// export default App;

// import React, { useRef } from 'react';
// import { Navigate, Route, Routes, useLocation } from "react-router-dom";
// import { useAuth } from './context/AuthProvider';
// import { Toaster } from 'react-hot-toast';

// // Import all your components
// import ProtectedRoute from './components/ProtectedRoute';
// import Unauthorized from './components/Unauthorized';
// import Home from './Home/Home';
// import Services from './components/Services';
// import SignUp from './components/SignUp';
// import Navbar from './components/Navbar';
// import Contact from './components/Contact';
// import About from './components/About';
// import StudentResources from './components/StudentResources';
// import TeacherResources from './components/TeacherResources'; 
// import SchoolResources from './components/SchoolResources';
// import ChatApp from './components/chat'; // Assuming you added Chat
// import TeacherDashboard from './components/TeacherDashboard.jsx'; // 1. IMPORT ADDED

// function App() {
//   const [authUser] = useAuth();
//   const aboutModalRef = useRef(null);
//   const location = useLocation();
//   // Removed student-resources from this list so the navbar shows
//   const noNavbarPaths = ['/teacher-resources', '/school-resources', '/contact', '/unauthorized', '/SignUp'];

//   return (
//     <>
//       {!noNavbarPaths.includes(location.pathname) && (
//         <Navbar aboutModalRef={aboutModalRef} />
//       )}

//       <div className="dark:bg-slate-900 dark:text-white">
//         <Routes>
//           {/* --- Public Routes --- */}
//           <Route path="/" element={<Home />} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/unauthorized" element={<Unauthorized />} />
          
//           {/* --- FIX: MOVED STUDENT RESOURCES HERE --- */}
//           {/* This route is now public and accessible to everyone */}
//           <Route path="/student-resources" element={<StudentResources />} />

//           {/* --- Routes for any logged-in user --- */}
//           <Route
//             path="/services"
//             element={authUser ? <Services /> : <Navigate to="/signup" />}
//           />
          
//           {/* --- Role-Protected Routes --- */}

//           {/* Student-only routes (now empty) */}
//           <Route element={<ProtectedRoute allowedRoles={['student']} />}>
//             {/* The /student-resources route was removed from here */}
//           </Route>

//           {/* Teacher-only routes */}
//           <Route element={<ProtectedRoute allowedRoles={['teacher']} />}>
//             <Route path="/teacher-resources" element={<TeacherResources />} />
//           </Route>

//           {/* School/NGO-only routes */}
//           <Route element={<ProtectedRoute allowedRoles={['school', 'ngo']} />}>
//             <Route path="/school-resources" element={<SchoolResources />} />
//           </Route>

//           {/* 2. ROUTE ADDED */}
//           {/* This will be the main dashboard for teachers and students */}
//           <Route element={<ProtectedRoute allowedRoles={['Student', 'Teacher', 'School', 'NGo']} />}>
//             <Route path="/chat" element={<ChatApp />} />
//             <Route path="/dashboard" element={<TeacherDashboard />} /> 
//           </Route>

//         </Routes>
//         <Toaster />
//       </div>
      
//       <About ref={aboutModalRef} />
//     </>
//   );
// }
// export default App;

// import React, { useRef } from 'react';
// import { Navigate, Route, Routes, useLocation } from "react-router-dom";
// import { useAuth } from './context/AuthProvider';
// import { Toaster } from 'react-hot-toast';

// // Import all your components
// import ProtectedRoute from './components/ProtectedRoute';
// import Unauthorized from './components/Unauthorized';
// import Home from './Home/Home';
// import Services from './components/Services';
// import SignUp from './components/SignUp';
// import Navbar from './components/Navbar';
// import Contact from './components/Contact';
// import About from './components/About';
// import StudentResources from './components/StudentResources';
// import TeacherResources from './components/TeacherResources'; 
// import SchoolResources from './components/SchoolResources';
// import ChatApp from './components/chat';
// import TeacherDashboard from './components/TeacherDashboard.jsx';

// function App() {
//   const [authUser] = useAuth();
//   const aboutModalRef = useRef(null);
//   const location = useLocation();
//   // Removed student-resources from this list so the navbar shows
//   const noNavbarPaths = ['/teacher-resources', '/school-resources', '/contact', '/unauthorized', '/SignUp'];

//   return (
//     <>
//       {!noNavbarPaths.includes(location.pathname) && (
//         <Navbar aboutModalRef={aboutModalRef} />
//       )}

//       <div className="dark:bg-slate-900 dark:text-white">
//         <Routes>
//           {/* --- Public Routes --- */}
//           <Route path="/" element={<Home />} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/unauthorized" element={<Unauthorized />} />
          
//           {/* This route is public and accessible to everyone */}
//           <Route path="/student-resources" element={<StudentResources />} />

//           {/* --- Routes for any logged-in user --- */}
//           <Route
//             path="/services"
//             element={authUser ? <Services /> : <Navigate to="/signup" />}
//           />
          
//           {/* --- FIX: Added Chat and Dashboard here --- */}
//           {/* These routes now only check if you are logged in */}
//           <Route
//             path="/chat"
//             element={authUser ? <ChatApp /> : <Navigate to="/signup" />}
//           />
//           <Route
//             path="/dashboard"
//             element={authUser ? <TeacherDashboard /> : <Navigate to="/signup" />}
//           />
          
//           {/* --- Role-Protected Routes (Dashboard and Chat removed) --- */}

//           {/* Student-only routes (now empty) */}
//           <Route element={<ProtectedRoute allowedRoles={['student']} />}>
//             {/* The /student-resources route was removed from here */}
//           </Route>

//           {/* Teacher-only routes */}
//           <Route element={<ProtectedRoute allowedRoles={['teacher']} />}>
//             <Route path="/teacher-resources" element={<TeacherResources />} />
//           </Route>

//           {/* School/NGO-only routes */}
//           <Route element={<ProtectedRoute allowedRoles={['school', 'ngo']} />}>
//             <Route path="/school-resources" element={<SchoolResources />} />
//           </Route>

//         </Routes>
//         <Toaster />
//       </div>
      
//       <About ref={aboutModalRef} />
//     </>
//   );
// }
// export default App;


import React, { useRef } from 'react';
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useAuth } from './context/AuthProvider';
import { Toaster } from 'react-hot-toast';

// Import all your components
import ProtectedRoute from './components/ProtectedRoute';
import Unauthorized from './components/Unauthorized';
import Home from './Home/Home';
import Services from './components/Services';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import About from './components/About';
import StudentResources from './components/StudentResources';
import TeacherResources from './components/TeacherResources'; 
import SchoolResources from './components/SchoolResources';
import ChatApp from './components/chat';
import TeacherDashboard from './components/TeacherDashboard.jsx';

function App() {
  const [authUser] = useAuth();
  const aboutModalRef = useRef(null);
  const location = useLocation();
  
  // --- HERE IS THE FIX ---
  // Added '/dashboard' to the list
  const noNavbarPaths = ['/teacher-resources', '/school-resources', '/contact', '/unauthorized', '/SignUp', '/dashboard'];

  return (
    <>
      {!noNavbarPaths.includes(location.pathname) && (
        <Navbar aboutModalRef={aboutModalRef} />
      )}

      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          {/* --- Public Routes --- */}
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          
          {/* This route is public and accessible to everyone */}
          <Route path="/student-resources" element={<StudentResources />} />

          {/* --- Routes for any logged-in user --- */}
          <Route
            path="/services"
            element={authUser ? <Services /> : <Navigate to="/signup" />}
          />
          
          {/* --- Added Chat and Dashboard here --- */}
          {/* These routes now only check if you are logged in */}
          <Route
            path="/chat"
            element={authUser ? <ChatApp /> : <Navigate to="/signup" />}
          />
          <Route
            path="/dashboard"
            element={authUser ? <TeacherDashboard /> : <Navigate to="/signup" />}
          />
          
          {/* --- Role-Protected Routes (Dashboard and Chat removed) --- */}

          {/* Student-only routes (now empty) */}
          <Route element={<ProtectedRoute allowedRoles={['student']} />}>
            {/* The /student-resources route was removed from here */}
          </Route>

          {/* Teacher-only routes */}
          <Route element={<ProtectedRoute allowedRoles={['teacher']} />}>
            <Route path="/teacher-resources" element={<TeacherResources />} />
          </Route>

          {/* School/NGO-only routes */}
          <Route element={<ProtectedRoute allowedRoles={['school', 'ngo']} />}>
            <Route path="/school-resources" element={<SchoolResources />} />
          </Route>

        </Routes>
        <Toaster />
      </div>
      
      <About ref={aboutModalRef} />
    </>
  );
}
export default App;