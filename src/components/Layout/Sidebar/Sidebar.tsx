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
} from "../../../assets/Images/svg";
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
    },
    {
      name: "Defect Listing",
      path: "/defect-listing",
      icon: <PersonFillIcon />,
    },
    {
      name: "Scaner",
      path: "/scaner",
      icon: <ScanerFilledIcon />,
    },
    {
      name: "Notification",
      path: "/notification",
      icon: <NotificationEditIcon />,
    },
    {
      name: "Lock",
      path: "/lock",
      icon: <LockPersonIcon />,
    },
    {
      name: "Setting",
      path: "/setting",
      icon: <SettingInputIcon />,
    },
    {
      name: "Add Link",
      path: "/add-link",
      icon: <AddLinkIcon />,
    },
    {
      name: "Cloud Upload",
      path: "/cloud-upload",
      icon: <CloudUploadIcon />,
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
}: {
  path: string;
  icon: React.ReactNode;
}) => {
  return (
    <li className="sidebar-item">
      <Link to={path} className="sidebar-item-link">
        {icon}
      </Link>
    </li>
  );
};
