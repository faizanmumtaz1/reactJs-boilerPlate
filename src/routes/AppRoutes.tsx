import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { ROUTE_HOME } from "../utils/constant";
// lazy loading imports
const HomePage = lazy(() => import("../pages/HomePage"));



const AppRoutes = () => {


  return (
    <Routes>
      <Route path={ROUTE_HOME} element={<HomePage />} />
    </Routes>
  );
};

export default AppRoutes;
