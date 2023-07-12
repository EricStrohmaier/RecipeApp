import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseindex";
import Card from "./Card";

export default function Cards({ selectedCategories }) {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchRecipes() {
      try {
        let { data, error } = await supabase.from("recipes").select("*");
        if (error) {
          throw new Error(error.message);
        }
        setRecipes(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    }

    fetchRecipes();
  }, []);

  useEffect(() => {
    async function filterRecipes() {
      if (!Array.isArray(selectedCategories) || selectedCategories.length === 0 || selectedCategories.includes("random")) {
        setIsLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from("recipes")
          .select()
          .ilike("category", "%" + selectedCategories.join("%") + "%");

        if (error) {
          throw new Error(error.message);
        }

        setRecipes(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error filtering recipes:", error);
      }
    }

    setIsLoading(true);
    filterRecipes();
  }, [selectedCategories]);

  useEffect(() => {
    async function randomCategory() {
      if (Array.isArray(selectedCategories) && selectedCategories.includes("random")) {
        try {
          const startingNumber = 1297; // Starting number of your range
          const endingNumber = 2425; // Ending number of your range
          const randomIndex = Math.floor(Math.random() * (endingNumber - startingNumber + 1)) + startingNumber;

          const { data: randomRecipeData, error: randomRecipeError } = await supabase
            .from("recipes")
            .select("*")
            .eq("id", randomIndex);

          if (randomRecipeError) {
            throw new Error(randomRecipeError.message);
          }

          setRecipes(randomRecipeData);
          setIsLoading(false);
        } catch (error) {
          console.error("Error retrieving random recipes:", error);
        }
      }
    }

    randomCategory();
  }, [selectedCategories]);



  if (isLoading) {
    return <div className="flex h-[500px] justify-center items-center text-3xl font-bold">Loading...</div>;
  }

  return (
    <div className=" px-5 py-2">
      <div className="  font-semibold lg:text-3xl sm:text-2xl text-gray-800">
        {recipes.map((recipe) => (
          <Card key={recipe.id} recipe={recipe} />
        ))}
      </div>

    </div>
  );
}
