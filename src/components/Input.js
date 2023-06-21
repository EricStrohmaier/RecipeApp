import React,{ useState } from "react";

export default function Input({ setCategories }) {
    const [selectedCategories, setSelectedCategories] = useState([]);
    // const [searchInput, setSearchInput] = useState("");

  
    const handleCheckboxChange = (event) => {
      const { value, checked } = event.target;
  
      if (checked) {
        setSelectedCategories((prevCategories) => [...prevCategories, value]);
      } else {

        // setSelectedCategories((prevCategories) =>
        //   prevCategories.filter((category) => category !== value)
        // );
      }
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Pass the selectedCategories to the parent component
      setCategories( selectedCategories );
    };
    // const handleSearchInput = (event) => {
    //     const { value } = event.target;
    //     setSearchInput(value);
    //     setCategories( selectedCategories, value );
      
    //   };
      
      
  
  return (
    <div className=" mt-6 sm:mt-2 w-full  justify-center  lg:flex   ">
    <form onSubmit={handleSubmit}>
      <div className=" lg:flex lg:flex-row lg:w-full lg:m-3 sm:w-1/2 sm:flex sm:flex-col m-7 sm:m-4 md:m-12 ">
        <div className="flex items-center px-1">
          <input
            className=""
            type="checkbox"
            value="vegetarian"
            name="category"
            id="veggi"
            onChange={handleCheckboxChange}
          />
          <label className=" px-2" htmlFor="veggi">
            Vegetarian
          </label>
        </div>
        <div className="flex items-center px-1">
          <input
            className="form-check-input"
            type="checkbox"
            value="vegan"
            name="category"
            id="vegan"
            onChange={handleCheckboxChange}
          />
          <label className="px-2" htmlFor="vegan">
            Vegan
          </label>
        </div>
        <div className="flex items-center px-1">
          <input
            className="form-check-input"
            type="checkbox"
            value="meat"
            name="category"
            id="meat"
            onChange={handleCheckboxChange}
          />
          <label className="px-2" htmlFor="meat">
            Meat
          </label>
        </div>
        <div className="flex items-center px-1">
          <input
            className="form-check-input"
            type="checkbox"
            value="fish"
            name="category"
            id="fish"
            onChange={handleCheckboxChange}
          />
          <label className="px-2" htmlFor="fish">
            Fish
          </label>
        </div>
        <div className="flex items-center px-1">
          <input
            className="form-check-input"
            type="checkbox"
            value="dessert"
            name="category"
            id="dessert"
            onChange={handleCheckboxChange}
          />
          <label className="px-2" htmlFor="dessert">
           Dessert
          </label>
        </div>
        <div className="flex items-center px-1">
          <input
            className="form-check-input"
            type="checkbox"
            value="random"
            name="category"
            id="random"
            onChange={handleCheckboxChange}
          />
          <label className="px-2 w-1/3  font-bold" htmlFor="random">
          Random recipe
          </label>
        </div>
        <button
        type="submit"
        className="px-2 py-2 relative top-1 w-1/4 lg:w-1/6  sm:top-2 sm:w-1/4  bg-blue-200 text-black rounded-lg"
      >
        Submit
      </button>
      </div>
      {/* <div>
        <input
          className="w-full mt-3 border border-gray-300 rounded-md px-3 py-2"
          type="text"
          placeholder="Searching something specific?"
          name="searchBox"
          id="searchBox"
          onChange={handleSearchInput}
        />
      </div> */}
   
    </form>
    </div>
  );
}