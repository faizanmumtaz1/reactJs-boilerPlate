import { Route, Routes } from "react-router-dom";
import {
  ROUTE_CREATE_NEW_PASSWORD,
  ROUTE_FORGET_PASSWORD,
  ROUTE_HOME,
  ROUTE_MAP,
  ROUTE_DEFECT_LISTING,
} from "../utils/constant";
import Login from "../components/auth/Login/Login";
import ForgotPassword from "../components/auth/ForgotPassword/ForgotPassword";
import CreateNewPassword from "../components/auth/CreateNewPassword/CreateNewPassword";
import DashboardLayout from "../components/Layout/DashboardLayout";
import MapContainer from "../features/MapContainer/MapContainer";
import DefectListing from "../features/DefectListing/DefectListing";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={ROUTE_HOME} element={<Login />} />
        <Route path={ROUTE_FORGET_PASSWORD} element={<ForgotPassword />} />
        <Route
          path={ROUTE_CREATE_NEW_PASSWORD}
          element={<CreateNewPassword />}
        />
        <Route
          path={ROUTE_MAP}
          element={
            <DashboardLayout>
              <MapContainer />
            </DashboardLayout>
          }
        ></Route>
        <Route
          path={ROUTE_DEFECT_LISTING}
          element={
            <DashboardLayout>
              <DefectListing />
            </DashboardLayout>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
