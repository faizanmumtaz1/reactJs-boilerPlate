import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import "./style.scss";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  label?: string;
  defaultValue?: string;
  name?: string;
  id?: string;
  options: Option[];
  onChange: (event: any) => void;
  fullWidth?: boolean;
  className?: string;
  rounded?: "full" | "none" | "medium";
  variant?: "standard" | "filled" | "outlined";
  WrapperClassName?: string;
  placeholder?: string;
  size?: "small" | "medium";
  sx?: object;
  value?: string | number;
}

const CustomSelect = ({
  label,
  defaultValue,
  name,
  id,
  options,
  onChange,
  fullWidth = true,
  className,
  rounded = "full",
  variant = "standard",
  WrapperClassName,
  placeholder = "Select",
  size = "medium",
  sx = {},
  value = "",
}: CustomSelectProps) => {
  return (
    <FormControl
      fullWidth={fullWidth}
      className={`${WrapperClassName} dropdown-wrapper`}
    >
      <InputLabel id={id}>{label}</InputLabel>
      <Select
        defaultValue={defaultValue || "Select age"}
        variant={variant}
        label={"label"}
        onChange={onChange}
        value={value || defaultValue}
        displayEmpty
        className={`dashboard-dropdown ${className} select-${size} select-rounded-${rounded}`}
        inputProps={{
          name: name,
          id: id,
        }}
        sx={{
          ...sx,
        }}
        // IconComponent={FieldDropdownIcon}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
