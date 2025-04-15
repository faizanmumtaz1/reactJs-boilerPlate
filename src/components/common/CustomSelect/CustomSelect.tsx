import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import "./style.scss";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps<T extends FieldValues> {
  label?: string;
  defaultValue?: string;
  name: Path<T>;
  id?: string;
  options: Option[];
  fullWidth?: boolean;
  className?: string;
  rounded?: "full" | "none" | "medium";
  variant?: "standard" | "filled" | "outlined";
  WrapperClassName?: string;
  placeholder?: string;
  size?: "small" | "medium" | "large";
  sx?: object;
  labelStyling?: object;
  disabled?: boolean;
  formControlStyling?: object;
  multiple?: boolean;
  control: Control<T>;
}

const CustomSelect = <T extends FieldValues>({
  label,
  defaultValue,
  name,
  id,
  options,
  fullWidth = true,
  className,
  rounded = "full",
  variant = "standard",
  WrapperClassName,
  size = "medium",
  sx = {},
  disabled = false,
  formControlStyling = {},
  control,
}: CustomSelectProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl
          fullWidth={fullWidth}
          className={`${WrapperClassName} select-wrapper`}
          sx={{
            ...formControlStyling,
          }}
        >
          <InputLabel id={id} className={`select-label select-${size}`}>
            {label}
          </InputLabel>
          <Select
            {...field}
            labelId={id}
            label={label}
            variant={variant}
            disabled={disabled}
            defaultValue={defaultValue}
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
      )}
    />
  );
};

export default CustomSelect;
