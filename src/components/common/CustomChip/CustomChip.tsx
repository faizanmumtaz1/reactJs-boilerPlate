import { Chip, ChipProps } from "@mui/material";
import "./style.scss";

interface DashboardChipProps
  extends Omit<ChipProps, "variant" | "color" | "size"> {
  label: string;
  variant?: "filled" | "outlined";
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "warning"
    | "lightWarning"
    | "lightInfo"
    | "primaryDefault";
  size?: "small" | "medium";
  rounded?: boolean;
}

const DashboardChip = ({
  label,
  variant = "filled",
  color = "default",
  size = "medium",
  clickable = false,
  disabled = false,
  onDelete,
  deleteIcon,
  icon,
  avatar,
  className = "",
  rounded = false,
  sx,
  ...props
}: DashboardChipProps) => {
  return (
    <Chip
      label={label}
      variant={variant}
      color={color as ChipProps["color"]}
      size={size}
      clickable={clickable}
      disabled={disabled}
      onDelete={onDelete}
      deleteIcon={deleteIcon}
      icon={icon}
      avatar={avatar}
      className={`dashboard-chip ${className} ${rounded ? "rounded-full" : ""}`}
      sx={sx}
      {...props}
    />
  );
};

export default DashboardChip;
