import { apiInstance2 } from "utils/apiInstance";

const apis = {
  getPopular: (numberOfRecipes) =>
    apiInstance2(
      `recipes/complexSearch?sort=popularity&includeNutrition=true&addRecipeInformation=true`,
      {
        params: {
          number: numberOfRecipes,
        },
      }
    ),

  getRecipesByCuisines: (cuisine) =>
    apiInstance2(
      `recipes/complexSearch?sort=popularity&number=6&cuisine=${cuisine}&includeNutrition=true&addRecipeInformation=true`
    ),

  getRecommended: () =>
    apiInstance2(
      `recipes/random?number=6&includeNutrition=true&addRecipeInformation=true`
    ),

  searchCuisines: (ingredients, limitExplore, pageExplore, offset) =>
    apiInstance2(
      `recipes/complexSearch?sort=popularity&includeNutrition=true&addRecipeInformation=true`,
      {
        params: {
          includeIngredients: ingredients.replace(/,\s*/g, ","),
          offset: limitExplore * pageExplore,
          number: pageExplore,
        },
      }
    ),

  getSingleCuisine: (recipeId) =>
    apiInstance2(`recipes/${recipeId}/information`, {
      params: {
        includeNutrition: false,
        instructionsRequired: true,
      },
    }),

  getSimilarCuisines: (recipeId) =>
    apiInstance2(`/recipes/${recipeId}/similar`, {
      params: {
        number: 6,
      },
    }),

  filterCuisines: (
    limitExplore,
    pageExplore,
    minPrepTime,
    maxPrepTime,
    diet,
    type
  ) =>
    apiInstance2(
      `recipes/complexSearch?sort=popularity&includeNutrition=true&addRecipeInformation=true`,
      {
        params: {
          maxReadyTime: maxPrepTime,
          minReadyTime: minPrepTime,
          type: type,
          diet: diet,
          offset: limitExplore * pageExplore,
          number: pageExplore,
        },
      }
    ),
};

export default apis;
