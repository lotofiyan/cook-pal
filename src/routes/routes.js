import { lazy } from "react";
import { PUBLIC_PATHS } from "./constants";
import { Navigate } from "react-router-dom";
import WithSuspense from "components/layout/WithSuspense";

const { LANDING, EXPLORE, HELP, DETAILS, HOME } = PUBLIC_PATHS;

const Landing = WithSuspense(lazy(() => import("../screens/Home")));
const Home = WithSuspense(lazy(() => import("../screens/Home")));
const Explore = WithSuspense(lazy(() => import("../screens/Explore")));
const Details = WithSuspense(lazy(() => import("../screens/Details")));
const Help = WithSuspense(lazy(() => import("../screens/Help")));

export const PUBLIC_ROUTES = [
  { path: LANDING, element: <Landing /> },
  { path: HOME, element: <Home /> },
  { path: EXPLORE, element: <Explore /> },
  { path: HELP, element: <Help /> },
  { path: DETAILS, element: <Details /> },
  { path: "*", element: <Navigate to="/" replace /> },
];
