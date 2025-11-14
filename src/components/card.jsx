import React from 'react';
import { Link } from 'react-router-dom';

function Cards({ item }) {
  return (
    <Link to={item.link}>
      <div className="mt-4 my-3 p-4">
        <div className="card w-full bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <div className="card-body flex flex-col items-center justify-center text-center h-64">
            <h2 className="card-title text-2xl font-bold text-pink-500">
              {item.name}
            </h2>
            <p className="mt-4">{item.title}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Cards;