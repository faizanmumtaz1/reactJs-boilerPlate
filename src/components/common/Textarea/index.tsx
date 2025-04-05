"use client";

import type React from "react";
import { TextField, type TextFieldProps } from "@mui/material";
import "./style.scss";

interface CustomTextAreaProps extends Omit<TextFieldProps, "variant"> {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  rows?: number;
  maxRows?: number;
  className?: string;
  error?: boolean;
  helperText?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  required?: boolean;
  variant?: "outlined" | "filled" | "standard";
  rounded?: "small" | "medium" | "large";
}

const CustomTextArea: React.FC<CustomTextAreaProps> = ({
  label,
  placeholder = "Enter here",
  value,
  onChange,
  rows = 4,
  maxRows = 10,
  className = "",
  error = false,
  helperText = "",
  fullWidth = true,
  disabled = false,
  required = false,
  variant = "outlined",
  rounded = "medium",
  ...props
}) => {
  return (
    <TextField
      className={`custom-textarea ${className}`}
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      multiline
      rows={rows}
      maxRows={maxRows}
      error={error}
      helperText={helperText}
      fullWidth={fullWidth}
      disabled={disabled}
      required={required}
      variant={variant}
      InputLabelProps={{
        className: "textarea-label",
        shrink: true,
      }}
      InputProps={{
        className: `textarea-input textarea-${rounded}`,
      }}
      {...props}
      sx={{
        "& .MuiFormLabel-root": {
          fontSize: "16px",
          color: "var(--text-secondary)",
        },
        "& .MuiOutlinedInput-root": {
          borderRadius: "16px",
          "& fieldset": {
            borderWidth: "1px",
            borderColor: "rgba(0, 0, 0, 0.23)",
          },
          "&:hover fieldset": {
            borderWidth: "1px",
            borderColor: "rgba(0, 0, 0, 0.23)",
          },
          "&.Mui-focused fieldset": {
            borderWidth: "1px",
            borderColor: "rgba(0, 0, 0, 0.23)",
          },
        },
      }}
    />
  );
};

export default CustomTextArea;
