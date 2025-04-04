import { TextField, TextFieldProps } from "@mui/material";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface InputFieldProps<T extends FieldValues>
  extends Omit<TextFieldProps, "name"> {
  name: Path<T>;
  control?: Control<T>;
}

const InputField = <T extends FieldValues>({
  control,
  name,
  ...otherProps
}: InputFieldProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          {...otherProps}
          error={!!error}
          helperText={error?.message ? error?.message : otherProps.helperText}
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "16px",
              "& fieldset": {
                borderWidth: "1px",
                borderColor: "",
              },
              "&:hover fieldset": {
                borderWidth: "1px",
                borderColor: "rgba(53, 50, 109, 1)",
              },
              "&.Mui-focused fieldset": {
                borderWidth: "1px",
                borderColor: "#000000",
              },
            },
            ...otherProps.sx,
          }}
        />
      )}
    />
  );
};

export default InputField;
