import React, { useEffect } from "react";
import useRecipeStore from "store/recipes";

const Home = () => {
  const {
    popular_recipes,
    loading_popular,
    error_popular,
    fetchPopularRecipes,
  } = useRecipeStore();

  useEffect(() => {
    fetchPopularRecipes(5);
  }, []);

  return <div>Home</div>;
};

export default Home;
