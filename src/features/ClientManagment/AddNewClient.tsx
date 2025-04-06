import { Box, Typography } from "@mui/material";
import { IconButton, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { ROUTE_CLIENT_MANAGEMENT } from "../../utils/constant";
import InputField from "../../components/common/InputField/InputField";
import { useForm } from "react-hook-form";
import CustomSelect from "../../components/common/CustomSelect/CustomSelect";
import Button from "../../components/common/Button/Button";
import CommonMultiSelect from "../../components/common/CommonMultiSelect";
import { useState } from "react";

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
    type: "select",
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
  {
    id: 2,
    label: "Client 2",
    value: "client2",
  },
];
const AddNewClient = () => {
  const navigate = useNavigate();
  const [associatedServices, setAssociatedServices] = useState([]);
  const { control } = useForm();
  return (
    <Box bgcolor="#F8F9FB" width="100%" pb="102px" height="100%">
      <Stack
        direction="row"
        gap="16px"
        bgcolor="#fff"
        p="16px 24px"
        width="100%"
        alignItems="center"
      >
        <IconButton
          onClick={() => navigate(ROUTE_CLIENT_MANAGEMENT)}
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
        <Typography variant="h5">Create New Client</Typography>
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
            <>
              {item.type === "select" ? (
                <CustomSelect
                  label={item.label}
                  options={clientOptions}
                  onChange={() => {}}
                  name={item.name}
                  id={item.id.toString()}
                  rounded="medium"
                  variant="outlined"
                  size="large"
                  formControlStyling={{
                    width: "100%",
                    maxWidth: "calc(50% - 6px)",
                  }}
                  sx={{
                    background: "white",
                  }}
                  // sx={{
                  //   minHeight: "60px !important",
                  // }}
                  // labelStyling={{
                  //   background: "red !important",
                  // }}
                />
              ) : (
                <InputField
                  key={item.id}
                  name={item.name}
                  control={control}
                  label={item.label}
                  type={item.type}
                  sx={{
                    width: "100%",
                    maxWidth: "calc(50% - 6px)",
                    background: "white",
                  }}
                />
              )}
            </>
          ))}
        </Stack>
        <Box mt="12px">
          <CommonMultiSelect
            label="Associated Services"
            options={clientOptions.map((option) => option.label)}
            value={associatedServices} // <- Pass your state here
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
            size="large"
            fullWidth={true}
            sx={{
              background: "white",
            }}
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
        <Button
          variant="outlined"
          color="secondary"
          sx={{ borderRadius: "80px" }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{ borderRadius: "80px" }}
        >
          Invite Client
        </Button>
      </Stack>
    </Box>
  );
};

export default AddNewClient;
