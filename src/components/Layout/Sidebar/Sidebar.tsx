import { Link, matchPath, useLocation } from "react-router-dom";
import "./sidebar.scss";
import {
  LogoIcon,
  ExploreIcon,
  DashboardFillIcon,
  PersonFillIcon,
  ScanerFilledIcon,
  NotificationEditIcon,
  LockPersonIcon,
  SettingInputIcon,
  AddLinkIcon,
  CloudUploadIcon,
  CrossSmIcon,
  CrossIconLight,
} from "../../../assets/Images/svg";
import {
  ROUTE_ADD_DEVICE,
  ROUTE_ADD_NEW_CLIENT,
  ROUTE_CLIENT_MANAGEMENT,
  ROUTE_CREATE_NEW_REQUEST,
  ROUTE_DEVICE_MANAGEMENT_LISTING,
  ROUTE_EDIT_OR_VIEW_CLIENT,
  ROUTE_EDIT_OR_VIEW_DEVICE,
  ROUTE_REPORTS,
  ROUTE_REQUEST_PUSH_DATA_LISTING,
  ROUTE_ACTIVE_SERVICE,
  ROUTE_ROLES_AND_PERMISSIONS_LISTING,
  ROUTE_ADD_NEW_USER,
  ROUTE_MAP,
  ROUTE_DASHBOARD,
  ROUTE_ALERT_CREATION,
} from "../../../utils/constant";
import { IconButton, Typography } from "@mui/material";
interface SidebarProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}
const Sidebar = ({ isMobileMenuOpen, setIsMobileMenuOpen }: SidebarProps) => {
  const linksList = [
    {
      name: "Home",
      path: ROUTE_MAP,
      icon: <ExploreIcon />,
      activePaths: [ROUTE_MAP],
    },
    {
      name: "Dashboard",
      path: ROUTE_DASHBOARD,
      icon: <DashboardFillIcon />,
      activePaths: [ROUTE_DASHBOARD],
    },
    {
      name: "Defect Listing",
      path: ROUTE_CLIENT_MANAGEMENT,
      icon: <PersonFillIcon />,
      activePaths: [
        ROUTE_CLIENT_MANAGEMENT,
        ROUTE_ADD_NEW_CLIENT,
        ROUTE_EDIT_OR_VIEW_CLIENT,
      ],
    },
    {
      name: "Device Management",
      path: ROUTE_DEVICE_MANAGEMENT_LISTING,
      icon: <ScanerFilledIcon />,
      activePaths: [
        ROUTE_DEVICE_MANAGEMENT_LISTING,
        ROUTE_EDIT_OR_VIEW_DEVICE,
        ROUTE_ADD_DEVICE,
      ],
    },
    {
      name: "Alert Creation",
      path: ROUTE_ALERT_CREATION,
      icon: <NotificationEditIcon />,
      activePaths: [ROUTE_ALERT_CREATION],
    },
    {
      name: "Lock",
      path: ROUTE_ROLES_AND_PERMISSIONS_LISTING,
      icon: <LockPersonIcon />,
      activePaths: [ROUTE_ROLES_AND_PERMISSIONS_LISTING, ROUTE_ADD_NEW_USER],
    },
    {
      name: "Reports",
      path: ROUTE_REPORTS,
      icon: <SettingInputIcon />,
      activePaths: [ROUTE_REPORTS],
    },
    {
      name: "Active Service",
      path: ROUTE_ACTIVE_SERVICE,
      icon: <AddLinkIcon />,
      activePaths: [ROUTE_ACTIVE_SERVICE],
    },
    {
      name: "Cloud Upload",
      path: ROUTE_REQUEST_PUSH_DATA_LISTING,
      icon: <CloudUploadIcon />,
      activePaths: [ROUTE_REQUEST_PUSH_DATA_LISTING, ROUTE_CREATE_NEW_REQUEST],
    },
  ];
  return (
    <div
      className={`sidebar-wrapper ${
        isMobileMenuOpen ? "mobile-menu-open" : "mobile-menu-close"
      }`}
    >
      <div className="sidebar-header">
        <LogoIcon />
        <IconButton
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          sx={{
            display: { xs: "flex", sm: "none" },
            p: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CrossIconLight />
        </IconButton>
      </div>

      <ul className="sidebar-content">
        {linksList.map((link) => (
          <SidebarItem key={link.name} {...link} />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
const SidebarItem = ({
  path,
  icon,
  activePaths = [],
  name,
}: {
  path: string;
  icon: React.ReactNode;
  activePaths?: string[];
  name: string;
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
