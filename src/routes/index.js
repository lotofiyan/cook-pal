import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { NonAuthLayout } from "components/layout/pageLayout";
import { PUBLIC_ROUTES } from "./routes";
import ScrollToTop from "./scrollToTop";

const PublicRouteWrapper = () => {
  const routes = useRoutes(PUBLIC_ROUTES);
  return routes;
};

const Pages = () => {
  return (
    <Router>
      <ScrollToTop>
        {" "}
        {/* Add the Router component here */}
        <NonAuthLayout>
          <PublicRouteWrapper />
        </NonAuthLayout>
      </ScrollToTop>{" "}
    </Router>
  );
};

export default Pages;
