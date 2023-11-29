import Card from "components/common/cards/itemCard";
import Pagination from "components/layout/pagination";
import React from "react";
import useRecipeStore from "store/recipes";

const Main = () => {
  const { exploreCuisines, totalExplore, limitExplore, pageExplore, setPage } =
    useRecipeStore();

  return (
    <div className="py-6 flex flex-col gap-6">
      <div className="flex justify-between py-4">
        <p className="text-[#000000] font-semibold font-inter text-[24px]">
          Search Results
        </p>
        <p className="font-inter text-[#625959] ">{totalExplore}</p>
      </div>

      {exploreCuisines?.length > 0 ? (
        <div className="flex gap-2 flex-wrap justify-around">
          {exploreCuisines?.map((item) => {
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
      ) : (
        <div></div>
      )}

      {exploreCuisines?.length > 0 ? (
        <div className=" w-full flex items-center">
          <Pagination
            pageCount={Math.ceil(totalExplore / pageExplore)}
            // pageCount={10}
            onPageChange={(page) => {
              setPage(page);
            }}
            currentPage={limitExplore}
          />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Main;
