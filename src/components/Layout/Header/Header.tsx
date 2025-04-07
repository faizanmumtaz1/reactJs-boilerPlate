import {
  IconButton,
  Menu,
  MenuItem,
  Divider,
  Avatar,
  ListItemIcon,
  Badge,
} from "@mui/material";
import "./header.scss";
import { useState } from "react";
import Button from "../../common/Button/Button";
import {
  LogoutIcon,
  NotificationIcon,
  SettingGrayIcon,
} from "../../../assets/Images/svg";
import Drawer from "../../common/Drawer/index";
import NotificationDrawer from "../../NotificationDrawer/index";
import Breadcrumb from "./Breadcrumb/index";

interface BreadcrumbLink {
  label: string;
  href?: string;
}

interface HeaderProps {
  links: BreadcrumbLink[];
}

const Header = ({ links }: HeaderProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="header-wrapper">
      <div className="header-content">
        <div className="header-left">
          <Breadcrumb links={links} />
        </div>
        <div className="header-right">
          <span>Software Version 1.0</span>
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
        <NotificationDrawer />
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
  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
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
        <MenuItem onClick={handleClose}>
          <Avatar />
          <div className="profile-wrapper">
            <span className="subtitle1">John Doe</span>
            <span className="subtitle2 email-text">john.doe@example.com</span>
          </div>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <SettingGrayIcon />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};
