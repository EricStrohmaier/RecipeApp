import React from "react";

export default function Card({ recipe }) {


  return (
    <div
      className={`overflow-hidden mt-5 mb-5 rounded-lg px-5 py-4  duration-200 bg-slate-100 hover:bg-slate-50 border border-transparent hover:border-gray-300  transform transition   hover:scale-[1.02]`}>
    <div className={` `}>
      <a
        href={recipe.link}
        rel="noopener noreferrer"
        title="Click me"
        target="_blank"
        className={`flex flex-row justify-center items-center `}
      >
        <p className="mr-4 ">{recipe.title}</p>
        <div
          className={`w-[120px] h-[120px] overflow-hidden rounded-lg  `}
        >
          <img src={recipe.src} alt="Recipe" />
        </div>
      </a>
      </div>
    </div>
  );
}
