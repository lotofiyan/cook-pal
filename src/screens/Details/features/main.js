import LazyImage from "components/common/image";
import React, { useEffect, useState } from "react";
import { HiArrowLongLeft } from "react-icons/hi2";
import { IoShareOutline, IoBookmarkOutline } from "react-icons/io5";
import { BsPrinter } from "react-icons/bs";
import useRecipeStore from "store/recipes";
import Card from "components/common/cards/itemCard";
import ModalBody from "components/common/modals/modalWrap";
import SocialMedia from "components/common/modals/SocialMedia";
import ComponentLoader from "components/common/loaders/componentLoader";
import ScrollToTopOnReload from "components/layout/scrollToTop";

const Main = ({ id }) => {
  const {
    singleCuisine,
    fetchSingleRecipe,
    fetchSimilarRecipes,
    similarRecipes,
    loading_single,
  } = useRecipeStore();

  const [newSummary, setNewSummary] = useState("");
  const [instructions, setInstruction] = useState("");
  const [toggleModal, settoggleModal] = useState(false);

  let Details;

  useEffect(() => {
    fetchSingleRecipe(id)
      .then((details) => {
        const { summary, instructions } = details;
        setNewSummary(summary);

        setInstruction(instructions);
      })
      .catch((error) => {
        // Handle error
      });
  }, [id, fetchSingleRecipe]);

  useEffect(() => {
    fetchSimilarRecipes(id);
  }, []);

  const { title, author, image, time, serving, ingredients } = singleCuisine;
  const currentURL = window.location.href;

  const sharedetails = { url: currentURL, code: "" };

  return (
    <div className="w-full flex flex-col gap-y-3">
      <ScrollToTopOnReload />
      <div className="flex justify-between">
        {" "}
        <div
          onClick={() => {
            window.history.back();
          }}
          className="flex items-center gap-x-2 cursor-pointer"
        >
          <HiArrowLongLeft color="#475467" size={30} />{" "}
          <span className="text-[#475467] font-medium text-[18px]">
            Go back
          </span>{" "}
        </div>
        <div className="flex gap-x-2 items-center">
          <span
            onClick={() => {
              settoggleModal(!toggleModal);
              document.body.classList.add("modal-open");
            }}
            className="cursor-pointer "
          >
            <IoShareOutline color="#475467" size={24} />
          </span>{" "}
          <span>
            <IoBookmarkOutline color="#475467" size={24} />
          </span>
        </div>
      </div>

      {loading_single && (
        <div>
          <ComponentLoader size={64} />
        </div>
      )}

      {!loading_single && (
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-4 py-3 border-b border-opacity-20">
            <p className="font-inter font-medium lg:text-[48px] lg:text-[32px] text-[28px]">
              {title}
            </p>
            <p className="font-inter font-medium text-[#344054] text-[14px]">
              {author}
            </p>
          </div>

          <div
            className="font-inter font-medium md:text-[18px] text-base"
            dangerouslySetInnerHTML={{ __html: newSummary }}
          ></div>

          <div className="max-h-[506px] rounded-[8px] overflow-hidden">
            <LazyImage src={image} placeholder={"Loading..."} className={""} />
          </div>
          <div className="flex">
            <p className="flex flex-col gap-y-1 border-r border-[#888888] pr-2">
              <p className="text-[#888888]">PREP TIME</p>{" "}
              <p className="text-[#252525] font-medium">{time} Mins</p>{" "}
            </p>
            <p className="flex flex-col gap-y-1 border-r border-[#888888] px-2">
              <p>SERVINGS</p>{" "}
              <p className="text-[#252525] font-medium">{serving} </p>{" "}
            </p>
            <p className="flex items-center px-2">
              <BsPrinter size={24} />
            </p>
          </div>
        </div>
      )}

      {!loading_single && (
        <div className="flex md:flex-row flex-col justify-between">
          <div className="w-full">
            <p className="font-bold font-inter md:text-[36px] text-[24px]">
              Ingredients
            </p>
            <div>
              {ingredients?.map((item) => {
                return (
                  <div className="flex gap-x-1 text-[18px]">
                    <span>
                      {item.measures.metric.amount}
                      {item.measures.metric.unitShort}
                    </span>
                    <span>{item.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full">
            <p className="font-bold font-inter md:text-[36px] text-[24px]">
              Instructions
            </p>
            <div>
              <div
                className="font-inter text-base"
                dangerouslySetInnerHTML={{ __html: instructions }}
              ></div>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-y-4">
        <p className="font-bold font-inter md:text-[36px] text-[24px]">
          You may also like
        </p>
        <div className="flex flex-wrap justify-around gap-4">
          {similarRecipes &&
            similarRecipes?.map((item) => {
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
      </div>

      {toggleModal && (
        <ModalBody
          onClose={() => {
            settoggleModal(false);
            document.body.classList.remove("modal-open");
          }}
        >
          <SocialMedia
            onClose={() => {
              settoggleModal(false);
              document.body.classList.remove("modal-open");
            }}
            mealName={title}
            author={author}
            details={sharedetails}
          />
        </ModalBody>
      )}
    </div>
  );
};

export default Main;
