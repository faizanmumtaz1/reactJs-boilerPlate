import { Typography } from "@mui/material";
import { Link, matchPath, useLocation } from "react-router-dom";

export const SidebarItem = ({
    path,
    icon,
    activePaths = [],
    name,
    handleCloseSidebar
  }: {
    path: string;
    icon: React.ReactNode;
    activePaths?: string[];
    name: string;
    handleCloseSidebar?: ()=> void;
  }) => {
    const location = useLocation();
    const isActive = activePaths.some((activePath) =>
      matchPath({ path: activePath, end: false }, location.pathname)
    );
    return (
      <li className="sidebar-item">
        <Link
          to={path}
          className={`sidebar-item-link ${isActive ? "active" : ""}`}
          onClick={handleCloseSidebar}
        >
          {icon}
          <Typography
            variant="body1"
            className="sidebar-item-link-text"
            component="span"
            sx={{
              display: { xs: "block", sm: "none" },
            }}
          >
            {name}
          </Typography>
        </Link>
      </li>
    );
  };
  