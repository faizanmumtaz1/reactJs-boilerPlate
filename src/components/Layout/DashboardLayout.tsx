import { Box } from "@mui/material";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import React from "react";

interface dashboardLayoutProps {
  children: React.ReactNode;
}
const DashboardLayout: React.FC<dashboardLayoutProps> = ({ children }) => {
  return (
    <Box className="dashboard-layout-wrapper">
      <Sidebar />
      <Box className="dashboard-layout-content">
        <Header />
        {children}
      </Box>
    </Box>
  );
};

export default DashboardLayout;
