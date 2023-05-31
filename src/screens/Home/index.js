import React from "react";
import Banner from "./features/banner";
import Filter from "./features/filter";
import Main from "./features/main";

const Home = () => {
  return (
    <div>
      <Banner />
      <Filter />
      <Main />
    </div>
  );
};

export default Home;
