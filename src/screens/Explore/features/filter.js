import { Input } from "components/common/input";
import React, { useEffect, useState } from "react";

import { ReactComponent as Search } from "assets/icons/search.svg";
import { ReactComponent as Setting } from "assets/icons/setting.svg";
import { Button } from "components/common/buttons";
import useRecipeStore from "store/recipes";

const Filter = () => {
  const {
    loading_explore,
    fetchSearchRecipes,
    fetchFilterRecipes,
    limitExplore,
  } = useRecipeStore();
  const [keyword, setKeyword] = useState("");
  const [mealType, setMealType] = useState("");
  const [minPrepTime, setMinPrepTime] = useState(0);
  const [maxPrepTime, setMaxPrepTime] = useState();
  const [diet, setDiet] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleChange = (event) => {
    const { value } = event.target;
    setKeyword(value);
  };

  useEffect(() => {
    if (keyword) {
      let timeoutId;

      const debouncedSearch = () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          fetchSearchRecipes({ ingredients: keyword });
        }, 2000);
      };

      if (!loading_explore) {
        debouncedSearch();
      }

      // Cleanup the timeout when component unmounts
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [keyword]);

  useEffect(() => {
    if (keyword) {
      fetchSearchRecipes({ ingredients: keyword });
    } else {
      fetchFilterRecipes({
        minPrepTime: minPrepTime,
        maxPrepTime: maxPrepTime,
        diet: diet,
        type: mealType,
      });
    }
  }, [limitExplore]);

  const meal_types = [
    { name: "Main course", value: "main course" },
    { name: "Side dish", value: "side dish" },
    { name: "Breakfast", value: "breakfast" },
    { name: "Dessert", value: "dessert" },
    { name: "Salad", value: "salad" },
    { name: "Drink", value: "drink" },
  ];
  const time_frame = [
    { name: "<30 mins", min: 0, max: 30 },
    { name: "30 to 60 mins", min: 30, max: 60 },
    { name: "60 to 120 mins", min: 60, max: 120 },
    { name: ">120 mins", min: 120, max: 1000 },
  ];
  const diet_type = [
    { name: "All", value: "" },
    { name: "Gluten Free", value: "gluten-free" },
    { name: "Keto", value: "ketogenic" },
    { name: "Vegetarian", value: "vegetarian" },
    { name: "Vegan", value: "vegan" },
    { name: "Pescetarian", value: "pescetarian" },
  ];

  useEffect(() => {
    if ((mealType === "") & (diet === "")) {
      fetchFilterRecipes({
        minPrepTime: minPrepTime,
        maxPrepTime: maxPrepTime,
        diet: diet,
        type: mealType,
      });
    }
  }, [mealType]);

  return (
    <div className="w-full p-b-3 ">
      <div className="w-full flex items-center gap-x-2">
        <div className="w-full bg-red-300">
          <Input
            className="w-full"
            inputClass="w-full"
            IconLeft={<Search />}
            value={keyword}
            placeholder={`e.g onions, tomatoes, bread, etc.`}
            onChange={handleChange}
          />
        </div>

        <Button
          isGreen
          className={"px-2 h-full !w-[50px] py-[7px]"}
          withIcon
          icon={<Setting />}
          onClick={() => {
            setToggle(!toggle);
          }}
        />
      </div>

      <div
        className={`${
          toggle ? "absolute z-30" : "hidden"
        } lg:pr-[90px] md:pr-[60px] sm:pr-[24px] pr-[12px]`}
      >
        <div
          className={`${
            toggle ? " border-b border-green bg-white" : "hidden"
          } flex flex-col gap-y-6 w-full`}
        >
          <p className="font-semibold flex md:justify-start justify-center">
            Filter search
          </p>

          <div className="flex md:flex-row flex-col justify-between">
            <div className="flex flex-col gap-y-2 md:border-r md:pr-2">
              <p className="font-inter font-semibold">Meal types</p>

              <div className="flex gap-2 flex-wrap ">
                {meal_types?.map((item, index) => {
                  return (
                    <div
                      className={`${
                        mealType === item.value
                          ? "bg-green text-white"
                          : "text-green"
                      } px-[10px] py-[5px] border border-green rounded-[10px] mx-auto cursor-pointer `}
                      key={item.value + index}
                      onClick={() => setMealType(item.value)}
                    >
                      {item.name}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-y-2 md:px-2">
              <p className="font-inter font-semibold">Time frame</p>
              <div className="flex gap-2 flex-wrap">
                {time_frame?.map((item, index) => {
                  return (
                    <div
                      className={`${
                        maxPrepTime === item.max
                          ? "bg-green text-white"
                          : "text-green"
                      } px-[10px] py-[5px] border border-green rounded-[10px] mx-auto cursor-pointer`}
                      key={item.name + index}
                      onClick={() => {
                        setMinPrepTime(item.min);
                        setMaxPrepTime(item.max);
                      }}
                    >
                      {item.name}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-y-2 md:pl-2 md:border-l">
              <p className="font-inter font-semibold">Dietary preferences</p>

              <div className="flex gap-2 flex-wrap justify-start">
                {diet_type?.map((item, index) => {
                  return (
                    <div
                      className={`${
                        diet === item.value
                          ? "bg-green text-white"
                          : "text-green"
                      } px-[10px] py-[5px] border border-green rounded-[10px] mx-auto cursor-pointer`}
                      key={item.value + index}
                      onClick={() => setDiet(item.value)}
                    >
                      {item.name}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <p className="flex justify-center">
            <Button
              isGreen
              text={"Filter"}
              className={"!px-[30px] !py-[10px] !max-w-[300px]"}
              onClick={() => {
                fetchFilterRecipes({
                  minPrepTime: minPrepTime,
                  maxPrepTime: maxPrepTime,
                  diet: diet,
                  type: mealType,
                });
                setKeyword("");
                setToggle(false);
              }}
            />
          </p>
          <p
            onClick={async () => {
              setDiet("");
              setMaxPrepTime();
              setMinPrepTime();
              setMealType("");
            }}
            className="cursor-pointer opacity-60 underline flex justify-end"
          >
            Clear
          </p>
        </div>
      </div>
    </div>
  );
};

export default Filter;
