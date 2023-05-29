import { create } from "zustand";
import apis from "services/recipes";

const useRecipeStore = create((set) => ({
  popular_recipes: [],
  loading_popular: false,
  error_popular: null,

  fetchPopularRecipes: async (numberOfRecipes) => {
    set({ loading_popular: true, error_popular: null });

    try {
      const response = await apis.getPopular(numberOfRecipes);
      const data = await response.json();
      const recipes = data.recipes.map((recipe) => ({
        name: recipe.title,
        image: recipe.image,
        creator: recipe.creditsText,
      }));
      set({ popular_recipes: recipes, loading: false });
      console.log(recipes);
    } catch (error) {
      set({ error: "An error occurred", loading: false });
    }
  },
}));

export default useRecipeStore;
