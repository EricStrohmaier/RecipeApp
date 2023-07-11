import React, { useState } from "react";
import Cards from "./components/Cards";
import Input from "./components/Input";

export default function HomePage() {
  const [categories, setCategories] = useState([]);
  // s
  return (
    <div className=" bg-background">
    <div className=" relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
      <h1 className="mx-4 text-slate-900 font-extrabold text-4xl sm:text-3xl lg:text-6xl tracking-tight text-center">
        Find the perfect recipe for today
      </h1>
      <div className="justify-center items-center flex">
      <p className="mx-3 mt-6 lg:text-2xl text-lg  text-slate-600 text-center max-w-3xl ">
        You don't know what to cook? Filter by category or get SUPRISED to find quick and easy recipes for today.
      </p>
      </div>
      <Input setCategories={(selectedCategories, searchInput) => setCategories(selectedCategories, searchInput)} />
      <div className="max-w-7xl mx-auto px-4 sm:px-4 md:px-8 mt-4 sm:mt-3 lg:mt-3 items-center">
        <Cards selectedCategories={categories} />
      </div>
    </div>
  </div>
  );
}
