// import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';
// import { useAuth } from '../context/AuthProvider';

// function ProtectedRoute({ allowedRoles }) {
//     const [authUser, setAuthUser] = useAuth();

//     // 1. Check if the user is logged in
//     if (!authUser) {
//         // Redirect them to the home/signup page if they are not logged in
//         return <Navigate to="/" />;
//     }

//     // 2. Check if the logged-in user has the required role
//     const hasRequiredRole = allowedRoles.includes(authUser.userType);

//     if (!hasRequiredRole) {
//         // Redirect them to an "unauthorized" page or home page
//         // You can create a simple "Unauthorized" component to show a message
//         return <Navigate to="/unauthorized" />;
//     }

//     // 3. If they are logged in and have the right role, show the page
//     return <Outlet />;
// }

// export default ProtectedRoute;


// import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';
// import { useAuth } from '../context/AuthProvider';

// function ProtectedRoute({ allowedRoles }) {
//     const [authUser] = useAuth();

//     // --- START OF UPDATE ---
//     // Added console logs for debugging role-based access
//     console.group("ProtectedRoute Check");
//     console.log("Auth User Object:", authUser);
//     console.log("Current User's Role:", authUser?.userType);
//     console.log("Allowed Roles for this Route:", allowedRoles);
//     console.groupEnd();
//     // --- END OF UPDATE ---

//     // 1. Check if the user is logged in
//     if (!authUser) {
//         return <Navigate to="/" />;
//     }

//     // 2. Check if the logged-in user has the required role
//     const hasRequiredRole = allowedRoles.includes(authUser.userType);

//     if (!hasRequiredRole) {
//         return <Navigate to="/unauthorized" />;
//     }

//     // 3. If they are logged in and have the right role, show the page
//     return <Outlet />;
// }

// export default ProtectedRoute;

// import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';
// import { useAuth } from '../context/AuthProvider';
// import Unauthorized from './Unauthorized'; // Import the unauthorized component

// function ProtectedRoute({ allowedRoles }) {
//     const [authUser] = useAuth();

//     // Debugging logs (can be removed after fixing)
//     console.group("ProtectedRoute Check");
//     console.log("Auth User Object:", authUser);
//     // FIX: Access the role from the nested 'user' object
//     console.log("Current User's Role:", authUser?.user?.userType); 
//     console.log("Allowed Roles for this Route:", allowedRoles);
//     console.groupEnd();

//     // 1. Check if the user is logged in
//     if (!authUser || !authUser.user) {
//         // Redirect to login or home if not authenticated
//         return <Navigate to="/" replace />;
//     }

//     // 2. Check if the logged-in user has a role that is allowed for this route
//     const userRole = authUser.user.userType;
//     const hasRequiredRole = allowedRoles.includes(userRole);

//     if (!hasRequiredRole) {
//         // If the role doesn't match, show the Unauthorized component
//         return <Unauthorized />;
//     }

//     // 3. If they are logged in and have the right role, show the page
//     return <Outlet />;
// }

// export default ProtectedRoute;

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import Unauthorized from './Unauthorized'; // Import the unauthorized component

function ProtectedRoute({ allowedRoles }) {
    const [authUser] = useAuth();

    // Debugging logs
    console.group("ProtectedRoute Check");
    console.log("Auth User Object:", authUser);
    // --- FIX ---
    // Read the role directly from authUser, not authUser.user
    console.log("Current User's Role:", authUser?.userType); 
    console.log("Allowed Roles for this Route:", allowedRoles);
    console.groupEnd();

    // 1. Check if the user is logged in
    // --- FIX ---
    // We only need to check if authUser itself exists
    if (!authUser) {
        return <Navigate to="/" replace />;
    }

    // 2. Check if the user has the required role
    // --- FIX ---
    // Get the role directly from authUser
    const userRole = authUser.userType;
    const hasRequiredRole = allowedRoles.includes(userRole);

    if (!hasRequiredRole) {
        // Redirect to the unauthorized page if the role doesn't match
        return <Navigate to="/unauthorized" replace />;
        // Using <Navigate> is slightly better than <Unauthorized /> as it changes the URL
    }

    // 3. If they are logged in and have the right role, show the page
    return <Outlet />;
}

export default ProtectedRoute;