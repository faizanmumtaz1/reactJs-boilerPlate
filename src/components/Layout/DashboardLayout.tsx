import { Box } from "@mui/material";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import React from "react";

interface dashboardLayoutProps {
  children: React.ReactNode;
  breadcrumbLinks?: { label: string; href?: string }[];
}

const DashboardLayout: React.FC<dashboardLayoutProps> = ({
  children,
  breadcrumbLinks = [],
}) => {
  return (
    <Box className="dashboard-layout-wrapper">
      <Sidebar />
      <Box className="dashboard-layout-content">
        <Header links={breadcrumbLinks} />
        <div className="dashboard-layout-content-wrapper">{children}</div>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
