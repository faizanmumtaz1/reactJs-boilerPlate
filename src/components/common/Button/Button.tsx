import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  styled,
} from "@mui/material";
import { ReactNode } from "react";

// Define the variant types
type ButtonVariant = "primary" | "secondary" | "outline";

// Extend MUI's ButtonProps to include our custom props
interface ButtonProps extends Omit<MuiButtonProps, "variant"> {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
}

// Create styled button with variant-specific styles
const StyledButton = styled(MuiButton)(({ theme, variant = "primary" }) => ({
  borderRadius: "8px",
  padding: "10px 24px",
  textTransform: "none",
  fontWeight: 600,

  // Variant-specific styles
  ...(variant === "primary" && {
    backgroundColor: "rgba(53, 50, 109, 1)",
    color: theme.palette.common.white,
    boxShadow: `
      0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14),
      0px 1px 5px 0px rgba(0, 0, 0, 0.12),
    `,
    "&:hover": {
      backgroundColor: "rgb(22, 18, 86)",
    },
  }),

  ...(variant === "secondary" && {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
  }),

  ...(variant === "outline" && {
    backgroundColor: "transparent",
    border: `2px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
  }),
}));

const Button = ({
  variant = "primary",
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      variant={variant as MuiButtonProps["variant"]}
      className={className}
      {...props}
      sx={{
        ...(props.color === "inherit" && {
          color: "black !important",
          border: "1px solid rgba(0,0,0,0.23) !important",
          "&:hover": {
            color: "white !important",
          },
        }),
        ...props.sx,
      }}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
