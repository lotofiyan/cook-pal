import { create } from "zustand";
import apis from "services/recipes";

const useRecipeStore = create((set) => ({
  popular_recipes: [],
  filteredByCuisines: [],
  recommendedCuisines: [],
  exploreCuisines: [],
  similarRecipes: [],
  singleCuisine: "",
  totalExplore: 0,
  limitExplore: 0,
  pageExplore: 12,
  loading_popular: false,
  error_popular: null,
  loading_cuisines: false,
  error_cuisines: null,
  loading_recommended: false,
  error_recommended: null,
  loading_explore: false,
  error_explore: null,
  loading_single: false,
  error_single: null,
  loading_similar: false,
  error_similar: null,

  setPage: (page) => {
    set({ limitExplore: page });
  },

  fetchPopularRecipes: async (numberOfRecipes) => {
    set({ loading_popular: true, error_popular: null });

    try {
      const response = await apis.getPopular(numberOfRecipes);

      const data = response?.results;
      const recipes = data.map((recipe) => ({
        id: recipe.id,
        name: recipe.title,
        imageType: recipe.imageType,
        author: recipe.sourceName,
        image: `https://spoonacular.com/recipeImages/${
          recipe.id
        }-${"636x393"}.${recipe.imageType}`,
      }));
      set({ popular_recipes: recipes, loading_popular: false });
    } catch (error) {
      set({ error_popular: "An error occurred", loading_popular: false });
    }
  },

  fetchRecipesByCuisines: async (cuisine) => {
    set({ loading_cuisines: true, error_cuisines: null });

    try {
      let response;
      if (cuisine === "All") {
        response = await apis.getPopular(8);
      } else {
        response = await apis.getRecipesByCuisines(cuisine);
      }

      const data = response?.results;
      const recipes = data.map((recipe) => ({
        id: recipe.id,
        name: recipe.title,
        time: recipe.readyInMinutes,
        imageType: recipe.imageType,
        author: recipe.sourceName,
        diet: recipe?.diets?.length > 0 ? recipe?.diets[0] : "All",
        image: `https://spoonacular.com/recipeImages/${
          recipe.id
        }-${"312x231"}.${recipe.imageType}`,
      }));
      set({ filteredByCuisines: recipes, loading_cuisines: false });
    } catch (error) {
      set({ error_cuisines: "An error occurred", loading_cuisines: false });
    }
  },

  fetchRecommendedRecipes: async () => {
    set({ loading_recommended: true, error_recommended: null });

    try {
      const response = await apis.getRecommended();

      const data = response?.recipes;
      const recipes = data.map((recipe) => ({
        id: recipe.id,
        name: recipe.title,
        time: recipe.readyInMinutes,
        imageType: recipe.imageType,
        author: recipe.sourceName,
        diet: recipe?.diets?.length > 0 ? recipe?.diets[0] : "All",
        image: `https://spoonacular.com/recipeImages/${
          recipe.id
        }-${"312x231"}.${recipe.imageType}`,
      }));
      set({ recommendedCuisines: recipes, loading_recommended: false });
    } catch (error) {
      set({
        error_recommended: "An error occurred",
        loading_recommended: false,
      });
    }
  },

  fetchSimilarRecipes: async (id) => {
    set({ loading_similar: true, error_similar: null });

    try {
      const response = await apis.getSimilarCuisines(id);

      const data = response;
      const recipes = Object.values(data)
        .filter((item) => typeof item === "object")
        .map((recipe) => ({
          id: recipe.id,
          name: recipe.title,
          time: recipe.readyInMinutes,
          imageType: recipe.imageType,
          author: recipe.sourceName,
          diet: recipe?.diets?.length > 0 ? recipe?.diets[0] : "All",
          image: `https://spoonacular.com/recipeImages/${
            recipe.id
          }-${"312x231"}.${recipe.imageType}`,
        }));
      set({ similarRecipes: recipes, loading_similar: false });
    } catch (error) {
      set({
        error_similar: "An error occurred",
        loading_similar: false,
      });
    }
  },

  fetchSingleRecipe: async (id) => {
    set({ loading_single: true, error_single: null });

    try {
      const response = await apis.getSingleCuisine(id);

      const recipe = response;
      const recipes = {
        id: recipe.id,
        title: recipe.title,
        time: recipe.readyInMinutes,
        imageType: recipe.imageType,
        author: recipe.sourceName,
        summary: recipe.summary,
        serving: recipe.servings,
        ingredients: recipe.extendedIngredients,
        instructions: recipe.instructions,

        diet: recipe?.diets?.length > 0 ? recipe?.diets[0] : "All",
        image: `https://spoonacular.com/recipeImages/${
          recipe.id
        }-${"636x393"}.${recipe.imageType}`,
      };
      set({ singleCuisine: recipes, loading_single: false });
      return recipes;
    } catch (error) {
      set({
        error_single: "An error occurred",
        loading_single: false,
      });
    }
  },

  fetchSearchRecipes: async ({
    ingredients,
    offset,
    limit,
    minPrepTime,
    maxPrepTime,
    diet,
    type,
  }) => {
    set({ loading_explore: true, error_explore: null });
    const { limitExplore, pageExplore } = useRecipeStore.getState();

    try {
      const response = await apis.searchCuisines(
        ingredients,
        limitExplore,
        pageExplore,
        minPrepTime,
        maxPrepTime,
        diet,
        type
      );
      const data = response?.results;
      const total = response?.totalResults;

      const recipes = data.map((recipe) => ({
        id: recipe.id,
        name: recipe.title,
        time: recipe.readyInMinutes,
        imageType: recipe.imageType,
        author: recipe.sourceName,
        diet: recipe?.diets?.length > 0 ? recipe?.diets[0] : "All",
        image: `https://spoonacular.com/recipeImages/${
          recipe.id
        }-${"312x231"}.${recipe.imageType}`,
      }));
      set({
        exploreCuisines: recipes,
        totalExplore: total,
        loading_explore: false,
      });
    } catch (error) {
      set({
        error_explore: "An error occurred",
        loading_explore: false,
      });
    }
  },

  fetchFilterRecipes: async ({
    offset,
    limit,
    minPrepTime,
    maxPrepTime,
    diet,
    type,
  }) => {
    set({ loading_explore: true, error_explore: null });
    const { limitExplore, pageExplore } = useRecipeStore.getState();

    try {
      const response = await apis.filterCuisines(
        limitExplore,
        pageExplore,
        minPrepTime,
        maxPrepTime,
        diet,
        type
      );
      const data = response?.results;
      const total = response?.totalResults;

      const recipes = data.map((recipe) => ({
        id: recipe.id,
        name: recipe.title,
        time: recipe.readyInMinutes,
        imageType: recipe.imageType,
        author: recipe.sourceName,
        diet: recipe?.diets?.length > 0 ? recipe?.diets[0] : "All",
        image: `https://spoonacular.com/recipeImages/${
          recipe.id
        }-${"312x231"}.${recipe.imageType}`,
      }));
      set({
        exploreCuisines: recipes,
        totalExplore: total,
        loading_explore: false,
      });
    } catch (error) {
      set({
        error_explore: "An error occurred",
        loading_explore: false,
      });
    }
  },
}));

export default useRecipeStore;
