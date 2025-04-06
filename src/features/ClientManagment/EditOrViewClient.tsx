import { Box, Chip, Typography } from "@mui/material";
import { IconButton, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ROUTE_CLIENT_MANAGEMENT } from "../../utils/constant";
import InputField from "../../components/common/InputField/InputField";
import { useForm } from "react-hook-form";
import CustomSelect from "../../components/common/CustomSelect/CustomSelect";
import Button from "../../components/common/Button/Button";
import RegisteredDeviceTable from "./RegisteredDeviceTable";
import SearchBar from "../../components/common/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import CommonMultiSelect from "../../components/common/CommonMultiSelect";

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
const EditOrViewClient = () => {
  const navigate = useNavigate();
  const { control } = useForm();

  const [isEdit, setIsEdit] = useState(false);
  const [associatedServices, setAssociatedServices] = useState([]);
  const [searchParams] = useSearchParams();
  const paramsEdit = searchParams.get("edit") === "true";

  useEffect(() => {
    if (paramsEdit) {
      setIsEdit(true);
    }
  }, [paramsEdit]);

  return (
    <Box bgcolor="#F8F9FB" width="100%" height="calc(100vh - 64px)">
      <Stack
        direction="row"
        gap="16px"
        bgcolor="#fff"
        p="16px 24px"
        width="100%"
        alignItems="center"
        sx={{
          flex: 1,
          minHeight: "75px",
        }}
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

        <Typography variant="h6">
          {isEdit ? "Edit Client Details" : "Client Details"}
          {!isEdit && (
            <Box sx={{ marginLeft: 1, display: "inline" }}>
              <Chip size="small" color="default" label="Archived" />
            </Box>
          )}
        </Typography>
        <Box
          sx={{
            flex: 1,
            display: "inline-flex",
            justifyContent: "flex-end",
          }}
        >
          {!isEdit && (
            <Button
              size="small"
              variant="outline"
              color="inherit"
              startIcon={<EditIcon />}
              sx={{
                border: "none",
                padding: "0",
                "&:hover": {
                  background: "transparent",
                },
              }}
              onClick={() => setIsEdit(true)}
            >
              Edit
            </Button>
          )}
          {isEdit && (
            <IconButton onClick={() => setIsEdit(false)}>
              <CloseIcon />
            </IconButton>
          )}
        </Box>
      </Stack>

      <Box
        maxWidth="900px"
        width="100%"
        margin="0 auto"
        pt="36px"
        sx={{
          maxHeight: "calc(100vh - 200px)",
          overflowY: "auto",
          pb: 5,
          pr: 5,
        }}
      >
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
                    // minHeight: "60px !important",
                    background: "white",
                  }}
                  labelStyling={{
                    marginTop: "5px",
                  }}
                  disabled={!isEdit}
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
                  disabled={!isEdit}
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
            disabled={!isEdit}
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
            disabled={!isEdit}
          />
        </Box>

        <Typography my={2} variant="h6">
          Registered Device Details
        </Typography>

        <Box
          sx={{
            p: 2,
            background: "white",
            borderRadius: "16px",
            pt: 3,
          }}
        >
          <Stack direction="row" gap="12px" mb={2}>
            <SearchBar
              placeholder="Device name, ID"
              label="Search"
              variant="outlined"
              width="100%"
              rounded="medium"
              className="container-search-bar"
              sx={{
                maxWidth: "300px",
              }}
            />
            <CustomSelect
              label="Showing"
              options={clientOptions}
              onChange={() => {}}
              name="assignedDevice"
              id="status-select"
              rounded="medium"
              variant="outlined"
              size="medium"
              fullWidth={true}
              formControlStyling={{
                maxWidth: "130px",
              }}
            />
          </Stack>

          <RegisteredDeviceTable />
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
        <Button variant="outline" color="inherit" sx={{ borderRadius: "80px" }}>
          Cancel
        </Button>
        <Button variant="primary" color="primary" sx={{ borderRadius: "80px" }}>
          Save Changes
        </Button>
      </Stack>
    </Box>
  );
};

export default EditOrViewClient;
