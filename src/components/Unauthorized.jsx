import React from 'react';
import { Link } from 'react-router-dom';

function Unauthorized() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-bold mb-4">403 - Access Denied</h1>
            <p className="text-lg mb-8">You do not have permission to view this page.</p>
            <Link to="/" className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-700">
                Go Back to Home
            </Link>
        </div>
    );
}

export default Unauthorized;