import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import "./button.scss";

interface ButtonProps extends MuiButtonProps {
  children: React.ReactNode;
  variant?: "contained" | "text" | "outlined";
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | "inherit";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  disabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  tertiary?: boolean;
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
  tertiary,
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
        ...(color === "inherit" &&
          variant === "outlined" &&
          tertiary && {
            backgroundColor: "transparent",
            color: "var(--secondary-dark) !important",
            border: "1px solid var(--secondary-states-outlinedBorder)",
            "&:hover": {
              backgroundColor: "var(--secondary-dark)",
              color: "var(--secondary-50) !important",
            },
          }),
        ...sx,
      }}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
