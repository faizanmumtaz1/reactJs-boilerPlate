import { Route, Routes } from "react-router-dom";
import {
  ROUTE_CREATE_NEW_PASSWORD,
  ROUTE_FORGET_PASSWORD,
  ROUTE_HOME,
  ROUTE_MAP,
  ROUTE_DEFECT_LISTING,
  ROUTE_DEVICE_MANAGEMENT_LISTING,
  ROUTE_ADD_DEVICE,
  ROUTE_CLIENT_MANAGEMENT,
  ROUTE_ADD_NEW_CLIENT,
  ROUTE_ALERT_CREATION,
  ROUTE_ADD_ALERT,
} from "../utils/constant";
import Login from "../components/auth/Login/Login";
import ForgotPassword from "../components/auth/ForgotPassword/ForgotPassword";
import CreateNewPassword from "../components/auth/CreateNewPassword/CreateNewPassword";
import DashboardLayout from "../components/Layout/DashboardLayout";
import MapContainer from "../features/MapContainer/MapContainer";
import DefectListing from "../features/DefectListing/DefectListing";
import AddDevice from "../features/DeviceManagement/AddDevice";
import ClinetManagment from "../features/ClientManagment/ClinetManagment";
import DeviceManagementListing from "../features/DeviceManagement/DeviceManagementListing";
import AddNewClient from "../features/ClientManagment/AddNewClient";
import AlertCreation from "../features/AlertCreation/AlertCreation";
import AddAlert from "../features/AlertCreation/AddAlert";
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
        <Route
          path={ROUTE_DEVICE_MANAGEMENT_LISTING}
          element={
            <DashboardLayout>
              <DeviceManagementListing />
            </DashboardLayout>
          }
        />
        <Route
          path={ROUTE_ADD_DEVICE}
          element={
            <DashboardLayout>
              <AddDevice />
            </DashboardLayout>
          }
        />
        <Route
          path={ROUTE_CLIENT_MANAGEMENT}
          element={
            <DashboardLayout>
              <ClinetManagment />
            </DashboardLayout>
          }
        />
        <Route
          path={ROUTE_ADD_NEW_CLIENT}
          element={
            <DashboardLayout>
              <AddNewClient />
            </DashboardLayout>
          }
        />
        <Route
          path={ROUTE_ALERT_CREATION}
          element={
            <DashboardLayout>
              <AlertCreation />
            </DashboardLayout>
          }
        />
        <Route
          path={ROUTE_ADD_ALERT}
          element={
            <DashboardLayout>
              <AddAlert />
            </DashboardLayout>
          }
        />
      </Routes>
    </>
  );
};

export default AppRoutes;
