import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Chip,
} from "@mui/material";
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
  size?: "small" | "medium" | "large";
  sx?: object;
  value?: string | number;
  labelStyling?: object;
  disabled?: boolean;
  formControlStyling?: object;
  multiple?: boolean;
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
  size = "medium",
  sx = {},
  value = "",
  labelStyling = {},
  disabled = false,
  formControlStyling = {},
  multiple = false,
}: CustomSelectProps) => {
  return (
    <>
      <FormControl
        fullWidth={fullWidth}
        className={`${WrapperClassName} select-wrapper`}
      >
        <InputLabel id={id} className={`select-label select-${size}`}>
          {label}
        </InputLabel>
        <Select
          labelId={id}
          label={label}
          variant={variant}
          onChange={onChange}
          value={value || defaultValue}
          className={`select-common ${className} select-${size} select-rounded-${rounded}`}
          inputProps={{
            name: name,
            id: id,
          }}
          sx={{
            ...sx,
            "& .MuiOutlinedInput-notchedOutline": {
              textOverflow: "ellipsis",
            },
          }}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default CustomSelect;
