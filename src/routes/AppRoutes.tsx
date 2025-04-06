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
  ROUTE_EDIT_OR_VIEW_DEVICE,
  ROUTE_CREATE_NEW_REQUEST,
  ROUTE_EDIT_OR_VIEW_CLIENT,
  ROUTE_REPORTS,
  ROUTE_REQUEST_PUSH_DATA_LISTING,
  ROUTE_ADD_NEW_REPORT,
  ROUTE_ACTIVE_SERVICE,
  ROUTE_ADD_NEW_SERVICE,
  ROUTE_ADD_NEW_CLIENT_SERVICE,
  ROUTE_EDIT_OR_VIEW_ALERT,
  ROUTE_VIEW_REQUEST,
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
import EditOrViewClient from "../features/ClientManagment/EditOrViewClient";
import EditOrViewDevice from "../features/DeviceManagement/EditOrViewDevice";
import CreateNewRequest from "../features/RequestPushData/CreateNewRequest";
import ReportsListing from "../features/Reports/index";
import RequestPushDataListing from "../features/RequestPushData/RequestPushDataListing";
import ViewRequest from "../features/RequestPushData/ViewRequest";
import AddNewReport from "../features/Reports/AddNewReport";
import ActiveServiceListing from "../features/ActiveService";
import AddNewService from "../features/ActiveService/AddNewService";
import EditOrViewAlert from "../features/AlertCreation/EditOrViewAlert";
import AddNewClientService from "../features/ActiveService/AddNewServiceClient";
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
          path={ROUTE_EDIT_OR_VIEW_DEVICE}
          element={
            <DashboardLayout>
              <EditOrViewDevice />
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
          path={ROUTE_EDIT_OR_VIEW_CLIENT}
          element={
            <DashboardLayout>
              <EditOrViewClient />
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
          path={ROUTE_EDIT_OR_VIEW_ALERT}
          element={
            <DashboardLayout>
              <EditOrViewAlert />
            </DashboardLayout>
          }
        />
        <Route
          element={
            <DashboardLayout>
              <EditOrViewClient />
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
        <Route
          path={ROUTE_CREATE_NEW_REQUEST}
          element={
            <DashboardLayout>
              <CreateNewRequest />
            </DashboardLayout>
          }
        />
        <Route
          path={ROUTE_REQUEST_PUSH_DATA_LISTING}
          element={
            <DashboardLayout>
              <RequestPushDataListing />
            </DashboardLayout>
          }
        />
        <Route
          path={ROUTE_VIEW_REQUEST}
          element={
            <DashboardLayout>
              <ViewRequest />
            </DashboardLayout>
          }
        />

        <Route
          path={ROUTE_REPORTS}
          element={
            <DashboardLayout>
              <ReportsListing />
            </DashboardLayout>
          }
        />
        <Route
          path={ROUTE_ADD_NEW_REPORT}
          element={
            <DashboardLayout>
              <AddNewReport />
            </DashboardLayout>
          }
        />
        <Route
          path={ROUTE_ACTIVE_SERVICE}
          element={
            <DashboardLayout>
              <ActiveServiceListing />
            </DashboardLayout>
          }
        />
        <Route
          path={ROUTE_ADD_NEW_SERVICE}
          element={
            <DashboardLayout>
              <AddNewService />
            </DashboardLayout>
          }
        />
        <Route
          path={ROUTE_ADD_NEW_CLIENT_SERVICE}
          element={
            <DashboardLayout>
              <AddNewClientService />
            </DashboardLayout>
          }
        />
      </Routes>
    </>
  );
};

export default AppRoutes;
