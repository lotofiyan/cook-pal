import React from "react";
import Header from "components/layout/nonAuthLayout/header";
import Footer from "components/layout/nonAuthLayout/footer";
import Toast from "components/common/toasts/toast";

export const NonAuthLayout = ({ children }) => {
  return (
    <div className="w-full flex flex-grow flex-col relative lg:px-[90px] md:px-[60px] sm:px-[24px] px-[12px]">
      <header>
        <Header />
        <Toast />
      </header>
      <section className="w-full">{children}</section>
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
};
