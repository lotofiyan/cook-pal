import React from "react";
import { useParams } from "react-router-dom";
import Main from "./features/main";

const Index = () => {
  const { id } = useParams();
  return (
    <div>
      <Main id={id} />
    </div>
  );
};

export default Index;
