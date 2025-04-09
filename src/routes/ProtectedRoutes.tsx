import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


interface ProtectedRouteProps {
  element: React.ReactNode;
  roles?: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const { isAuthenticated } = useSelector(
    (state: any) => state.auth
  );

  // const hasAccess = isAuthenticated && roles.includes(userRole!);

  return isAuthenticated ? (
    <>{element}</>
  ) : (
    <Navigate to="/" replace />
  );
};

export default ProtectedRoute;
