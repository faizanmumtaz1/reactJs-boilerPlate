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
} from "../../../assets/Images/svg";
import {
  ROUTE_ADD_DEVICE,
  ROUTE_ADD_NEW_CLIENT,
  ROUTE_CLIENT_MANAGEMENT,
  ROUTE_CREATE_NEW_REQUEST,
  ROUTE_DEVICE_MANAGEMENT_LISTING,
  ROUTE_EDIT_OR_VIEW_CLIENT,
  ROUTE_EDIT_OR_VIEW_DEVICE,
  ROUTE_REQUEST_PUSH_DATA_LISTING,
} from "../../../utils/constant";
const Sidebar = () => {
  const linksList = [
    {
      name: "Home",
      path: "/",
      icon: <ExploreIcon />,
    },
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <DashboardFillIcon />,
      activePaths: ["/dashboard"],
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
      name: "Scaner",
      path: ROUTE_DEVICE_MANAGEMENT_LISTING,
      icon: <ScanerFilledIcon />,
      activePaths: [
        ROUTE_DEVICE_MANAGEMENT_LISTING,
        ROUTE_EDIT_OR_VIEW_DEVICE,
        ROUTE_ADD_DEVICE,
      ],
    },
    {
      name: "Notification",
      path: "/notification",
      icon: <NotificationEditIcon />,
      activePaths: ["/notification"],
    },
    {
      name: "Lock",
      path: "/lock",
      icon: <LockPersonIcon />,
      activePaths: ["/lock"],
    },
    {
      name: "Setting",
      path: "/setting",
      icon: <SettingInputIcon />,
      activePaths: ["/setting"],
    },
    {
      name: "Add Link",
      path: "/add-link",
      icon: <AddLinkIcon />,
      activePaths: ["/add-link"],
    },
    {
      name: "Cloud Upload",
      path: ROUTE_REQUEST_PUSH_DATA_LISTING,
      icon: <CloudUploadIcon />,
      activePaths: [ROUTE_REQUEST_PUSH_DATA_LISTING, ROUTE_CREATE_NEW_REQUEST],
    },
  ];
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-header">
        <LogoIcon />
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
}: {
  path: string;
  icon: React.ReactNode;
  activePaths?: string[];
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
      </Link>
    </li>
  );
};
