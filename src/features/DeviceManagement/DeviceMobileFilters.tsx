import {
  Box,
  InputBase,
  InputAdornment,
  IconButton,
  Typography,
  Divider,
  Drawer,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ArrowBackIcon, FilterIcon } from "../../assets/Images/svg";
import Button from "../../components/common/Button/Button";
import CustomSelect from "../../components/common/CustomSelect/CustomSelect";
import { useState } from "react";
import { useForm } from "react-hook-form";
const severityOptions = [
  { label: "1 - 250", value: "1-250" },
  { label: "3 - 856 (20%)", value: "3-856" },
  { label: "5 - 3124 (71%)", value: "5-3124" },
  { label: "N/A...", value: "N/A..." },
];

export default function DeviceMobileFilters() {
  const [showFiltersOnMobile, setShowFiltersOnMobile] = useState(false);
  const { control } = useForm();
  return (
    <>
      <Box display="flex" alignItems="center" my={1}>
        <Box flex={1} mr={2}>
          <InputBase
            placeholder="Search"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
            sx={{
              background: "var(--background-default)",
              p: 1,
              borderRadius: 3,
              width: "100%",
            }}
          />
        </Box>
        <IconButton
          onClick={() => {
            setShowFiltersOnMobile(true);
          }}
          sx={{
            backgroundColor: "rgba(248, 249, 251, 1)",
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: "rgba(248, 249, 251, 1)",
            },
          }}
        >
          <FilterIcon />
        </IconButton>
      </Box>

      <Drawer
        anchor="right"
        sx={{
          "& .MuiDrawer-paper": {
            width: "100%",
          },
        }}
        open={showFiltersOnMobile}
        onClose={() => {
          setShowFiltersOnMobile(false);
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            p: 2,
            gap: "5px",
          }}
        >
          <IconButton
            onClick={() => {
              setShowFiltersOnMobile(false);
            }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography> Filters</Typography>
        </Box>
        <Divider />
        <Box
          sx={{
            padding: "24px",
          }}
        >
          <CustomSelect
            label="Status"
            options={severityOptions}
            control={control}
            defaultValue="age"
            name="status"
            id="status-select"
            fullWidth={true}
            className="mb-2"
            rounded="medium"
            variant="outlined"
            WrapperClassName=""
            placeholder="Select"
            size="medium"
            sx={{ mb: 3 }}
          />
          <CustomSelect
            label="Region"
            options={severityOptions}
            control={control}
            defaultValue="age"
            name="region"
            id="region-select"
            fullWidth={true}
            className=""
            rounded="medium"
            variant="outlined"
            WrapperClassName=""
            placeholder="Select"
            size="medium"
            sx={{ mb: 3 }}
          />
          <CustomSelect
            label="Date Range"
            options={severityOptions}
            control={control}
            defaultValue="age"
            name="date-range"
            id="date-range-select"
            fullWidth={true}
            className=""
            rounded="medium"
            variant="outlined"
            WrapperClassName=""
            placeholder="Select"
            size="medium"
            sx={{ mb: 3 }}
          />
        </Box>

        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            width: "100%",
            borderRadius: "24px 24px 0 0",
            padding: "24px 24px 32px 24px",
            boxShadow: "0px -5px 13px 0px rgb(184 180 180 / 49%)",
          }}
        >
          <Button
            variant="outlined"
            fullWidth={true}
            sx={{ borderRadius: "32px" }}
          >
            Apply Filters
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
