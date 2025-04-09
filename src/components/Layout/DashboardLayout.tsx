import { Box } from "@mui/material";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import React, { useState } from "react";

interface dashboardLayoutProps {
  children: React.ReactNode;
  breadcrumbLinks?: { label: string; href?: string }[];
}

const DashboardLayout: React.FC<dashboardLayoutProps> = ({
  children,
  breadcrumbLinks = [],
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <Box className="dashboard-layout-wrapper">
      <Sidebar
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <Box
        className={`dashboard-layout-content ${
          isMobileMenuOpen ? "is-mobile-menu-open" : "mobile-menu-closed"
        }`}
      >
        <Header
          links={breadcrumbLinks}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
        <div className="dashboard-layout-content-wrapper">{children}</div>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
