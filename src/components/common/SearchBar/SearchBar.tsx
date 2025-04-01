import { Box, InputAdornment, TextField } from "@mui/material";
import { SearchIcon } from "../../../assets/Images/svg";
import "./style.scss";

interface SearchBarProps {
  placeholder: string;
  label?: string;
  id?: string;
  width?: string | number;
  variant?: "standard" | "filled" | "outlined";
  className?: string;
  floatingLabel?: boolean;
  rounded?: "full" | "none" | "medium";
  size?: "small" | "medium";
  startAdornment?: React.ReactNode;
}

const SearchBar = ({
  placeholder,
  label,
  id,
  width,
  variant = "outlined",
  rounded = "full",
  size = "medium",
  className = "",
  floatingLabel = false,
  startAdornment,
}: SearchBarProps) => {
  return (
    <Box
      sx={{
        width: width || "auto",
      }}
      className={`search-bar-wrapper  ${className} ${
        startAdornment ? "with-start-adornment" : "no-start-adornment"
      }`}
    >
      {/* <SearchIcon /> */}
      <TextField
        id={id}
        label={label}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">{startAdornment}</InputAdornment>
            ),
          },
        }}
        variant={variant}
        size={size}
        className={`search-bar-input search-rounded-${rounded} search-${size}`}
        sx={{
          width: "100%",
        }}
      />
    </Box>
  );
};

export default SearchBar;
