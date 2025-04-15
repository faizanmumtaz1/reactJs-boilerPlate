import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ROUTE_ADD_NEW_USER, ROUTE_DASHBOARD } from "../utils/constant";

interface PublicRouteProps {
  element: React.ReactNode;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ element }) => {
  const { isAuthenticated } = useSelector((state: any) => state.auth);

  return isAuthenticated ? (
    <Navigate to={ROUTE_ADD_NEW_USER} replace />
  ) : (
    <>{element}</>
  );
};

export default PublicRoute;
