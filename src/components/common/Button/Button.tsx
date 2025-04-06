import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import "./button.scss";

interface ButtonProps extends MuiButtonProps {
  children: React.ReactNode;
  variant?: "contained" | "text" | "outlined";
  color?: "primary" | "secondary" | "success" | "error" | "info" | "warning";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  disabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  sx?: object;
}

const Button = ({
  children,
  variant = "contained",
  color = "primary",
  size = "medium",
  fullWidth = false,
  disabled = false,
  startIcon,
  endIcon,
  onClick,
  className,
  sx,
  ...props
}: ButtonProps) => {
  return (
    <MuiButton
      variant={variant}
      color={color}
      size={size}
      fullWidth={fullWidth}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
      disableRipple
      onClick={onClick}
      className={className}
      sx={{
        textTransform: "none",
        borderRadius: "8px",
        ...sx,
      }}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
