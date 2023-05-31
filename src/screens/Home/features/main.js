import { Button } from "components/common/buttons";
import Card from "components/common/cards/itemCard";
import ComponentLoader from "components/common/loaders/componentLoader";
import React, { useEffect } from "react";
import useRecipeStore from "store/recipes";

const Main = () => {
  const {
    filteredByCuisines,
    recommendedCuisines,
    fetchRecommendedRecipes,
    loading_cuisines,
    loading_recommended,
  } = useRecipeStore();

  useEffect(() => {
    fetchRecommendedRecipes();
  }, []);

  return (
    <div className="w-full flex flex-col gap-y-6">
      {loading_cuisines && (
        <div>
          <ComponentLoader size={64} />
        </div>
      )}
      <div>
        {filteredByCuisines.length > 0 && (
          <div className="flex gap-2 flex-wrap justify-around">
            {filteredByCuisines.map((item) => {
              return (
                <div>
                  <Card
                    image={item?.image}
                    title={item?.name}
                    diet={item?.diet}
                    prepTime={item?.time}
                    id={item?.id}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-y-6">
        <p className="font-semibold text-[#000000] md:text-[36px] text-[24px]">
          Recommended Recipes
        </p>
        <div>
          {loading_recommended && (
            <div>
              <ComponentLoader size={64} />
            </div>
          )}
          {recommendedCuisines.length > 0 && (
            <div className="flex gap-2 flex-wrap justify-around">
              {recommendedCuisines.map((item) => {
                return (
                  <div>
                    <Card
                      image={item?.image}
                      title={item?.name}
                      diet={item?.diet}
                      prepTime={item?.time}
                      id={item?.id}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className=" flex justify-center">
          <div className="w-full max-w-[400px]">
            <Button
              text="Load random cuisines"
              isGreen
              onClick={() => {
                fetchRecommendedRecipes();
              }}
              className={"!py-3 !font-medium !text-[18px]"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
