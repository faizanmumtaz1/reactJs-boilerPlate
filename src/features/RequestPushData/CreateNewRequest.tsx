import { Box, Chip, Typography } from "@mui/material";
import { IconButton, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import {
  ROUTE_DEVICE_MANAGEMENT_LISTING,
  ROUTE_REQUEST_PUSH_DATA_LISTING,
} from "../../utils/constant";
import InputField from "../../components/common/InputField/InputField";
import { useForm } from "react-hook-form";
import CustomSelect from "../../components/common/CustomSelect/CustomSelect";
import Button from "../../components/common/Button/Button";
import DatePicker from "../../components/common/DatePicker/DatePicker";

const clientOptions = [
  {
    id: 1,
    label: "Client 1",
    value: "client1",
  },
];

const CreateNewRequest = () => {
  const navigate = useNavigate();
  const { control } = useForm();
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
        <Typography variant="h6">Create New Request</Typography>
      </Stack>

      <Box maxWidth="828px" width="100%" margin="0 auto" mt="36px">
        <Stack flexWrap="wrap" gap="12px" mt="16px">
          <DatePicker label="Select Scanned Data Date Range" />
          <CustomSelect
            label="Select Region"
            options={clientOptions}
            onChange={() => {}}
            name="Select Region"
            id="Select Region"
            rounded="medium"
            variant="outlined"
            size="large"
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
          />
          <CustomSelect
            label="Select Device"
            options={clientOptions}
            onChange={() => {}}
            name="Select Region"
            id="Select Region"
            rounded="medium"
            variant="outlined"
            size="large"
          />
        </Stack>
      </Box>

      <Stack
        direction="row"
        justifyContent="end"
        mt="24px"
        gap="12px"
        bgcolor="#fff"
        p="16px 24px"
        width="calc(100% - 88px)"
        position="fixed"
        bottom="0"
        // left="0"
      >
        <Button variant="outline" color="inherit" sx={{ borderRadius: "80px" }}>
          Cancel
        </Button>
        <Button variant="primary" color="primary" sx={{ borderRadius: "80px" }}>
          Submit Request
        </Button>
      </Stack>
    </Box>
  );
};

export default CreateNewRequest;
