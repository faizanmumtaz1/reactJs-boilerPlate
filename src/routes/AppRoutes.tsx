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
  ROUTE_DASHBOARD,
  ROUTE_ROLES_AND_PERMISSIONS_LISTING,
  ROUTE_ADD_NEW_USER,
  ROUTE_VIEW_MAP,
} from "../utils/constant";
import Login from "../components/auth/Login/Login";
import ForgotPassword from "../components/auth/ForgotPassword/ForgotPassword";
import CreateNewPassword from "../components/auth/CreateNewPassword/CreateNewPassword";
import DashboardLayout from "../components/Layout/DashboardLayout";
import MapContainer from "../features/MapContainer/MapContainer";
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
import Dashboard from "../features/Dashboard";
import RolesAndPermissionsListing from "../features/RolesAndPermissions/RolesAndPermissionsListing";
import AddNewUser from "../features/RolesAndPermissions/AddNewUser";
import DefectListingScreen from "../features/MapContainer/DefectListing/DefectListing";
import ViewMap from "../features/DeviceManagement/view-map";
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
            <DashboardLayout
              breadcrumbLinks={[
                { label: "Map", href: ROUTE_MAP },
                { label: "Defect Listing", href: ROUTE_DEFECT_LISTING },
              ]}
            >
              <DefectListingScreen />
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
            <DashboardLayout
              breadcrumbLinks={[
                {
                  label: "Device Management",
                  href: ROUTE_DEVICE_MANAGEMENT_LISTING,
                },
                { label: "Create New Device", href: ROUTE_ADD_DEVICE },
              ]}
            >
              <AddDevice />
            </DashboardLayout>
          }
        />
        <Route
          path={ROUTE_EDIT_OR_VIEW_DEVICE}
          element={
            <DashboardLayout
              breadcrumbLinks={[
                {
                  label: "Device Management Listing",
                  href: ROUTE_DEVICE_MANAGEMENT_LISTING,
                },
                {
                  label: "Edit or View Device",
                  href: ROUTE_EDIT_OR_VIEW_DEVICE,
                },
              ]}
            >
              <EditOrViewDevice />
            </DashboardLayout>
          }
        />
        <Route
          path={ROUTE_VIEW_MAP}
          element={
            <DashboardLayout
              breadcrumbLinks={[
                {
                  label: "Device Management Listing",
                  href: ROUTE_DEVICE_MANAGEMENT_LISTING,
                },
                {
                  label: "Edit Device",
                  href: ROUTE_EDIT_OR_VIEW_DEVICE,
                },
                {
                  label: "View Map",
                },
              ]}
            >
              <ViewMap />
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
            <DashboardLayout
              breadcrumbLinks={[
                { label: "Client Management", href: ROUTE_CLIENT_MANAGEMENT },
                { label: "Create New Client", href: ROUTE_ADD_NEW_CLIENT },
              ]}
            >
              <AddNewClient />
            </DashboardLayout>
          }
        />
        <Route
          path={ROUTE_EDIT_OR_VIEW_CLIENT}
          element={
            <DashboardLayout
              breadcrumbLinks={[
                { label: "Client Management", href: ROUTE_CLIENT_MANAGEMENT },
                {
                  label: "Edit or View Client",
                  href: ROUTE_EDIT_OR_VIEW_CLIENT,
                },
              ]}
            >
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
            <DashboardLayout
              breadcrumbLinks={[
                { label: "Alert Creation", href: ROUTE_ALERT_CREATION },
                { label: "Edit or View Alert", href: ROUTE_EDIT_OR_VIEW_ALERT },
              ]}
            >
              <EditOrViewAlert />
            </DashboardLayout>
          }
        />
        <Route
          element={
            <DashboardLayout
              breadcrumbLinks={[
                { label: "Alert Creation", href: ROUTE_ALERT_CREATION },
                { label: "Edit or View Alert", href: ROUTE_EDIT_OR_VIEW_ALERT },
              ]}
            >
              <EditOrViewClient />
            </DashboardLayout>
          }
        />
        <Route
          path={ROUTE_ADD_ALERT}
          element={
            <DashboardLayout
              breadcrumbLinks={[
                { label: "Alert Creation", href: ROUTE_ALERT_CREATION },
                { label: "Add Alert", href: ROUTE_ADD_ALERT },
              ]}
            >
              <AddAlert />
            </DashboardLayout>
          }
        />
        <Route
          path={ROUTE_CREATE_NEW_REQUEST}
          element={
            <DashboardLayout
              breadcrumbLinks={[
                {
                  label: "Request Push Data",
                  href: ROUTE_REQUEST_PUSH_DATA_LISTING,
                },
                { label: "Create New Request", href: ROUTE_CREATE_NEW_REQUEST },
              ]}
            >
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
        <Route
          path={ROUTE_DASHBOARD}
          element={
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          }
        />
        <Route
          path={ROUTE_ROLES_AND_PERMISSIONS_LISTING}
          element={
            <DashboardLayout>
              <RolesAndPermissionsListing />
            </DashboardLayout>
          }
        />
        <Route
          path={ROUTE_ADD_NEW_USER}
          element={
            <DashboardLayout
              breadcrumbLinks={[
                {
                  label: "Roles and Permissions",
                  href: ROUTE_ROLES_AND_PERMISSIONS_LISTING,
                },
                { label: "Add New User", href: ROUTE_ADD_NEW_USER },
              ]}
            >
              <AddNewUser />
            </DashboardLayout>
          }
        />
      </Routes>
    </>
  );
};

export default AppRoutes;
