import { Box } from "@mui/material"
import Sidebar from "./Sidebar/Sidebar"
import Header from "./Header/Header"
import React from "react"

interface dashboardLayoutProps {
  children: React.ReactNode
}
const DashboardLayout: React.FC<dashboardLayoutProps> = ({ children }) => {
  return (
    <Box>
      <Sidebar />
      <Box>
        <Header />
        {children}
      </Box>
    </Box>
  )
}

export default DashboardLayout