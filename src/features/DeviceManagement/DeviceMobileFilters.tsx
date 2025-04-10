import { Box } from "@mui/material";
import SearchBar from "../../components/common/SearchBar/SearchBar";
import { SearchIcon } from "../../assets/Images/svg";

export default function DeviceMobileFilters() {
  return (
    <Box>
      <SearchBar
        variant="filled"
        label="Search"
        rounded="medium"
        width="300px"
        startAdornment={<SearchIcon />}
        placeholder="Name, client, ID..."
        sx={{
          background: "white",
        }}
      />
    </Box>
  );
}
