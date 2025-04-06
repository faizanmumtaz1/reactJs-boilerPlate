import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  ListItemText,
  Checkbox,
  SelectChangeEvent,
  Box,
} from "@mui/material";
import "./style.scss";
import DashboardChip from "../CustomChip/CustomChip";

interface CommonMultiSelectProps {
  label?: string;
  options: string[];
  value: string[];
  onChange: (value: string[]) => void;
  name?: string;
  id?: string;
  fullWidth?: boolean;
  className?: string;
  rounded?: "full" | "none" | "medium" | "small";
  variant?: "standard" | "filled" | "outlined";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  sx?: object;
}

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

export default function CommonMultiSelect({
  label = "",
  options = [],
  value = [],
  onChange,
  name,
  id,
  fullWidth = true,
  className = "",
  rounded = "full",
  variant = "outlined",
  size = "medium",
  disabled = false,
  sx = {},
}: CommonMultiSelectProps) {
  const handleChange = (event: SelectChangeEvent<typeof value>) => {
    const {
      target: { value: newValue },
    } = event;
    onChange(typeof newValue === "string" ? newValue.split(",") : newValue);
  };

  return (
    <FormControl
      fullWidth={fullWidth}
      className={`multiselect-wrapper ${className}`}
      sx={sx}
    >
      <InputLabel id={id}>{label}</InputLabel>
      <Select
        labelId={id}
        id={`${id}-select`}
        multiple
        value={value}
        disabled={disabled}
        onChange={handleChange}
        input={<OutlinedInput label={label} />}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((value) => (
              <DashboardChip
                key={value}
                label={value}
                rounded={true}
                size="small"
              />
            ))}
          </Box>
        )}
        // MenuProps={MenuProps}
        name={name}
        variant={variant}
        className={`multiselect-${size} multiselect-rounded-${rounded}`}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            <Checkbox checked={value.includes(option)} />
            <ListItemText primary={option} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
