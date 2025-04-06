import { Box, Chip, Typography } from "@mui/material";
import { IconButton, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { ROUTE_REQUEST_PUSH_DATA_LISTING } from "../../utils/constant";
import { useForm } from "react-hook-form";
import CustomSelect from "../../components/common/CustomSelect/CustomSelect";
import Button from "../../components/common/Button/Button";
import DatePicker from "../../components/common/DatePicker/DatePicker";
import { useState } from "react";
import CommonMultiSelect from "../../components/common/CommonMultiSelect";

const clientOptions = [
  {
    id: 1,
    label: "Client 1",
    value: "client1",
  },
];

const ViewRequest = () => {
  const navigate = useNavigate();
  const { control } = useForm();

  const [associatedServices, setAssociatedServices] = useState([]);
  const [selectDevice, setSelectDevice] = useState([]);
  return (
    <Box bgcolor="#F8F9FB" width="100%" height="calc(100vh - 64px)">
      <Stack
        direction="row"
        gap="16px"
        bgcolor="#fff"
        p="16px 24px"
        width="100%"
        alignItems="center"
      >
        <IconButton
          onClick={() => navigate(ROUTE_REQUEST_PUSH_DATA_LISTING)}
          sx={{
            width: "32px",
            height: "32px",
            ":hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <ArrowBackIcon sx={{ color: "#000000" }} />
        </IconButton>
        <Typography variant="h6">Request Details</Typography>
        <Box sx={{ marginLeft: "auto" }}>
          <Chip
            size="small"
            variant="outlined"
            label="Approved"
            color="success"
          />
        </Box>
      </Stack>

      <Box maxWidth="828px" width="100%" margin="0 auto" mt="36px">
        <Stack flexWrap="wrap" gap="12px" mt="16px">
          <DatePicker
            label="Select Scanned Data Date Range"
            sx={{
              background: "white",
            }}
          />
          {/* <CustomSelect
            label="Select Region"
            options={clientOptions}
            onChange={() => {}}
            name="Select Region"
            id="Select Region"
            rounded="medium"
            variant="outlined"
            size="large"
            sx={{
              background: "white",
            }}
          /> */}
          <CommonMultiSelect
            label="Select Region"
            options={clientOptions.map((option) => option.label)}
            value={associatedServices}
            onChange={(newValue: any) => setAssociatedServices(newValue)} // <- Update state on change
            name="associatedServices"
            id="associated-services-select"
            fullWidth={true}
            className=""
            rounded="medium"
            variant="outlined"
            size="large"
            sx={{
              background: "white",
            }}
          />
        </Stack>
        <Stack direction="row" gap="12px" mt="16px">
          <CustomSelect
            label="Select Region Manager"
            options={clientOptions}
            onChange={() => {}}
            name="Select Region"
            id="Select Region"
            rounded="medium"
            variant="outlined"
            size="large"
            sx={{
              background: "white",
            }}
          />
          {/* <CustomSelect
            label="Select Device"
            options={clientOptions}
            onChange={() => {}}
            name="Select Region"
            id="Select Region"
            rounded="medium"
            variant="outlined"
            size="large"
            sx={{
              background: "white",
            }}
          /> */}
          <CommonMultiSelect
            label="Select Device"
            options={clientOptions.map((option) => option.label)}
            value={selectDevice}
            onChange={(newValue: any) => setSelectDevice(newValue)} // <- Update state on change
            name="selectDevice"
            id="selectDevice"
            fullWidth={true}
            className=""
            rounded="medium"
            variant="outlined"
            size="large"
            sx={{
              background: "white",
            }}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default ViewRequest;
