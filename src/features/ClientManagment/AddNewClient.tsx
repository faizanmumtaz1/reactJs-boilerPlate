import { Box, Typography } from "@mui/material";
import { IconButton, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { ROUTE_DEVICE_MANAGEMENT_LISTING } from "../../utils/constant";
import InputField from "../../components/common/InputField/InputField";
import { useForm } from "react-hook-form";
import CustomSelect from "../../components/common/CustomSelect/CustomSelect";
import Button from "../../components/common/Button/Button";

const clientData = [
  {
    id: 1,
    label: "Name/ID",
    name: "deviceName",
    type: "text",
  },
  {
    id: 2,
    label: "Phone Number",
    name: "phoneNumber",
    type: "number",
  },

  {
    id: 5,
    label: "Email",
    name: "email",
    type: "text",
  },
  {
    id: 6,
    label: "Select a Package",
    name: "selectPackage",
    type: "text",
  },
  {
    id: 7,
    label: "Select a role",
    name: "selectRole",
    type: "text",
  },
  {
    id: 8,
    label: "Region",
    name: "region",
    type: "text",
  },
];

const clientOptions = [
  {
    id: 1,
    label: "Client 1",
    value: "client1",
  },
];
const AddNewClient = () => {
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
          onClick={() => navigate(ROUTE_DEVICE_MANAGEMENT_LISTING)}
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
        <Typography variant="h6">Create New Device</Typography>
      </Stack>

      <Box maxWidth="828px" width="100%" margin="0 auto" mt="36px">
        <Typography
          variant="h6"
          fontSize="24px"
          fontWeight="450"
          lineHeight="133.4%"
          color="#000000"
        >
          Device Configuration
        </Typography>
        <Stack direction="row" flexWrap="wrap" gap="12px" mt="16px">
          {clientData.map((item) => (
            <InputField
              key={item.id}
              name={item.name}
              control={control}
              label={item.label}
              type={item.type}
              sx={{ width: "100%", maxWidth: "calc(50% - 6px)" }}
            />
          ))}
        </Stack>
        <Box mt="12px">
          <CustomSelect
            label="Associated Services"
            options={clientOptions}
            onChange={() => {}}
            name="associatedServices"
            id="status-select"
            rounded="medium"
            variant="outlined"
            size="medium"
            fullWidth={true}
          />
        </Box>
        <Box mt="12px">
          <CustomSelect
            label="Assigned Device"
            options={clientOptions}
            onChange={() => {}}
            name="assignedDevice"
            id="status-select"
            rounded="medium"
            variant="outlined"
            size="medium"
            fullWidth={true}
          />
        </Box>
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
        <Button variant="outline" color="primary" sx={{ borderRadius: "80px" }}>
          Cancel
        </Button>
        <Button variant="primary" color="primary" sx={{ borderRadius: "80px" }}>
          Invite Client
        </Button>
      </Stack>
    </Box>
  );
};

export default AddNewClient;
