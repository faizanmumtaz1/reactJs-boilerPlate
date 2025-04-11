import {
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  ListItemIcon,
  Badge,
  Typography,
} from "@mui/material";
import "./header.scss";
import { useState } from "react";
import Button from "../../common/Button/Button";
import {
  LogoutIcon,
  MenuIcon,
  NotificationIcon,
} from "../../../assets/Images/svg";
import Drawer from "../../common/Drawer/index";
import NotificationDrawer from "../../NotificationDrawer/index";
import Breadcrumb from "./Breadcrumb/index";
import toastHelper from "../../../utils/toastifyHelper";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { ROUTE_HOME } from "../../../utils/constant";

interface BreadcrumbLink {
  label: string;
  href?: string;
}

interface HeaderProps {
  links: BreadcrumbLink[];
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const Header = ({
  links,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: HeaderProps) => {
  const [open, setOpen] = useState(false);
  const handleCloseNotificationDrawer = () => setOpen(false);

  return (
    <div
      className={`header-wrapper ${
        isMobileMenuOpen ? "is-mobile-menu-open" : "mobile-menu-closed"
      }`}
    >
      <div className="header-content">
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: { xs: "block", sm: "none" } }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <MenuIcon />
        </IconButton>
        <div className="header-left">
          <Breadcrumb links={links} />
        </div>
        <div className="header-right">
          <Typography variant="caption" className="caption">
            Software Version 1.0
          </Typography>
          <Button
            variant="outlined"
            className="icon-button"
            size="small"
            onClick={() => setOpen(true)}
          >
            <Badge badgeContent={4} color="error">
              <NotificationIcon />
            </Badge>
          </Button>

          <ActionButton />
        </div>
      </div>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <NotificationDrawer
          handleCloseNotificationDrawer={handleCloseNotificationDrawer}
        />
      </Drawer>
    </div>
  );
};

export default Header;

const ActionButton = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    toastHelper.success("Logout successfully");
    navigate(ROUTE_HOME);
  };

  return (
    <div className="action-button-wrapper">
      <IconButton
        onClick={handleClick}
        size="small"
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {/* <MenuItem onClick={handleClose}>
          <Avatar />
          <div className="profile-wrapper">
            <Typography variant="subtitle1" className="subtitle1">
              John Doe
            </Typography>
            <Typography variant="body2" className="body2 email-text">
              john.doe@example.com
            </Typography>
          </div>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <SettingGrayIcon />
          </ListItemIcon>
          Settings
        </MenuItem> */}
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};
