"use client";

import React from "react";
import { Checkbox, FormControlLabel, type CheckboxProps } from "@mui/material";

interface CommonCheckboxProps extends Omit<CheckboxProps, "size"> {
  label?: string;
  className?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  size?: "small" | "medium";
  color?:
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | "default";
}

const CommonCheckbox: React.FC<CommonCheckboxProps> = ({
  label,
  className = "",
  checked = false,
  onChange,
  disabled = false,
  required = false,
  size = "medium",
  color = "primary",
  ...props
}) => {
  if (label) {
    return (
      <FormControlLabel
        className={className}
        control={
          <Checkbox
            checked={checked}
            onChange={onChange}
            disabled={disabled}
            required={required}
            size={size}
            color={color}
            {...props}
          />
        }
        label={label}
      />
    );
  }

  return (
    <Checkbox
      className={className}
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      required={required}
      size={size}
      color={color}
      {...props}
    />
  );
};

export default CommonCheckbox;
