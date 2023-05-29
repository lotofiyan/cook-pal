import React from "react";
import {
  BrowserRouter as Router,
  useRoutes,
  useLocation,
} from "react-router-dom";
import { AuthLayout, NonAuthLayout } from "components/layout/pageLayout";
import { PUBLIC_ROUTES } from "./routes";

const PublicRouteWrapper = () => {
  const routes = useRoutes(PUBLIC_ROUTES);
  return routes;
};

const Pages = () => {
  return (
    <Router>
      {" "}
      {/* Add the Router component here */}
      <NonAuthLayout>
        <PublicRouteWrapper />
      </NonAuthLayout>
    </Router>
  );
};

export default Pages;
