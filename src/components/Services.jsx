import React from 'react';
import { Link } from "react-router-dom";
import Cards from './Cards';
import { useAuth } from '../context/AuthProvider';

function Services() {
    const [authUser] = useAuth();

    const serviceList = [
        {
            id: 1,
            name: "Students",
            title: "Unlock your potential. Access free books, notes, and educational resources contributed by a vibrant community.",
            link: "/student-resources",
            image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            type: "student"
        },
        {
            id: 2,
            name: "Teachers",
            title: "Empower your teaching. Share your knowledge and resources with students and fellow educators across the nation.",
            link: "/teacher-portal",
            image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            type: "teacher"
        },
        {
            id: 3,
            name: "Schools & NGOs",
            title: "Bridge the gap. Partner with us to provide quality educational materials to underprivileged students.",
            link: "/ngo-school-partnership",
            image: "https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            type: "school"
        }
    ];

    return (
        <>
            <div
                className="fixed inset-0 bg-cover bg-center -z-20 filter blur-sm"
                style={{ backgroundImage: `url('https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` }}
            ></div>

            <div className="max-w-screen-2xl container mx-auto md-px-20 px-4 min-h-screen relative z-10">
                <div className="mt-28 items-center justify-center text-center">
                    <h1 className="text-2xl md:text-4xl">
                        The ways you can become a <span className="text-pink-500">change maker</span>
                    </h1>
                    <h1 className="text-2xl mt-3 md:text-4xl">
                        Any skill you bring, we shall <span className="text-pink-500">Accommodate</span>
                    </h1>
                    <p className="mt-16 text-black dark:text-gray-300">
                        We believe in the power of shared knowledge. Whether you are a student seeking to learn, a teacher eager to share, or an organization aiming to uplift communities, you have a role to play. Explore the opportunities below and join us in making education accessible for all.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {serviceList.map((item) => (
                        <Cards 
                            key={item.id} 
                            item={item} 
                            // FIX: Correctly access the user's role from the authUser object
                            userRole={authUser?.userType} 
                        />
                    ))}
                </div>

                <div className="text-center mt-12 mb-12">
                    <Link to="/">
                        <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
                            Back to Home
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Services;


