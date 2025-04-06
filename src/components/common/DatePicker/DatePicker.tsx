import { DatePicker as MUIDatePicker } from "@mui/x-date-pickers/DatePicker";

interface DatePickerProps {
  label?: string;
  sx?: any;
}

export default function DatePicker({ label = "", sx = {} }: DatePickerProps) {
  return (
    <MUIDatePicker
      label={label}
      slotProps={{
        textField: {
          fullWidth: true,
          InputLabelProps: { shrink: true },
          sx: {
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px", // This targets the actual input
            },
            ...sx,
          },
        },
      }}
    />
  );
}
