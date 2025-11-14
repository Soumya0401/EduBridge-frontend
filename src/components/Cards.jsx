// import React from 'react';
// import { Link } from 'react-router-dom';

// function Cards({ item }) {
//   return (
//     <Link to={item.link} className="block hover:scale-105 duration-200 h-full">
//       <div className="card h-full bg-base-100 shadow-xl dark:bg-slate-900 dark:text-white dark:border flex flex-col">
        
//         {/* Image Section (no changes here) */}
//         <figure>
//           <img 
//             src={item.image} 
//             alt={item.name} 
//             className="w-full h-80 object-cover"
//           />
//         </figure>

//         {/* Text Content Section (Updated with Flexbox) */}
//         <div className="card-body text-center flex flex-col flex-grow">
//           <h2 className="card-title text-2xl font-bold text-pink-500 mx-auto">
//             {item.name}
//           </h2>
//           <p className="mt-2 flex-grow">{item.title}</p>
//         </div>
//       </div>
//     </Link>
//   );
// }

// export default Cards;

import React from 'react';
import { Link } from 'react-router-dom';

function Cards({ item, userRole }) {
    // FIX: The card is now enabled if its type is "student" OR if the user's role matches the card's type.
    const isEnabled = item.type === 'student' || userRole === item.type;

    // This is the visual part of the card
    const cardContent = (
        <div className={`card h-full bg-base-100 shadow-xl dark:bg-slate-900 dark:text-white dark:border flex flex-col ${
            !isEnabled && "filter grayscale opacity-60"
        }`}>
            <figure>
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-56 object-cover"
                />
            </figure>
            <div className="card-body text-center flex flex-col flex-grow">
                <h2 className="card-title text-2xl font-bold text-pink-500 mx-auto">
                    {item.name}
                </h2>
                <p className="mt-2 flex-grow">{item.title}</p>
            </div>
        </div>
    );

    // Conditionally render the card as a clickable Link or a disabled div
    return isEnabled ? (
        <Link to={item.link} className="block hover:scale-105 duration-200 h-full">
            {cardContent}
        </Link>
    ) : (
        <div className="cursor-not-allowed h-full">
            {cardContent}
        </div>
    );
}

export default Cards;