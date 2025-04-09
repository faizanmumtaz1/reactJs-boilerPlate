import { FC, ReactNode } from "react";
import {
  Drawer as MuiDrawer,
  DrawerProps as MuiDrawerProps,
} from "@mui/material";

interface DrawerProps extends Omit<MuiDrawerProps, "onClose"> {
  children: ReactNode;
  onClose: () => void;
}

const Drawer: FC<DrawerProps> = ({ children, onClose, ...props }) => {
  return (
    <MuiDrawer
      anchor="right"
      onClose={onClose}
      {...props}
      className="drawer-wrapper"
      sx={{
        "& .MuiDrawer-paper": {
          borderRadius: "24px 0px 0px 24px",
        },
      }}
    >
      {children}
    </MuiDrawer>
  );
};

export default Drawer;
