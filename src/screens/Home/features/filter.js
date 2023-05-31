import React, { useEffect, useState } from "react";
import useRecipeStore from "store/recipes";

const Filter = () => {
  const { fetchRecipesByCuisines } = useRecipeStore();
  const [selectedCuisine, setSelectedCuisine] = useState("All");

  const cuisines = [
    "All",
    "African",
    "Asian",
    "American",
    "Caribbean",
    "Chinese",
    "European",
  ];

  useEffect(() => {
    fetchRecipesByCuisines(selectedCuisine);
  }, [selectedCuisine]);

  return (
    <div className="w-full flex my-4">
      <div className="flex flex-wrap gap-x-1">
        {cuisines?.map((item) => {
          return (
            <div
              onClick={() => {
                setSelectedCuisine(item);
              }}
              className={`${
                selectedCuisine === item
                  ? "bg-green rounded-[10px] text-white"
                  : "text-green"
              } py-[7px] px-[20px] cursor-pointer`}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
