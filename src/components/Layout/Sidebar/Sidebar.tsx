import { Link } from "react-router-dom";
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
import { IconButton } from "@mui/material";
import useCheckMobileScreen from "../../../hooks/useCheckMobileScreen";
import { SidebarItem } from "./SidebarItem";
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

  const isItMobile = useCheckMobileScreen();
  const handleCloseSidebar = () => {
    setIsMobileMenuOpen(false);
  }
  return (
    <div
      className={`sidebar-wrapper ${isMobileMenuOpen ? "mobile-menu-open" : "mobile-menu-close"
        }`}
    >
      <div className="sidebar-header">
        <Link to={ROUTE_MAP}>
          <LogoIcon />
        </Link>

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

      {!isItMobile ?
        <ul className="sidebar-content">
          {linksList.map((link) => (
            <SidebarItem key={link.name} {...link} />
          ))}
        </ul> :
        <ul className="sidebar-content">
          {linksList.map((link) => (
            <SidebarItem key={link.name} {...link} handleCloseSidebar={handleCloseSidebar} />
          ))}
        </ul>
      }

    </div>
  );
};

export default Sidebar;

