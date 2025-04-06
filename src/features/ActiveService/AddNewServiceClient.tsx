import { Box, Typography } from "@mui/material";
import { IconButton, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { ROUTE_ADD_NEW_SERVICE } from "../../utils/constant";
import InputField from "../../components/common/InputField/InputField";

import { useForm } from "react-hook-form";
import Button from "../../components/common/Button/Button";
import CommonMultiSelect from "../../components/common/CommonMultiSelect";
import React from "react";
const defectTypeOptions = [
  {
    id: 1,
    label: "Defect Type 1",
    value: "defectType1",
  },
  {
    id: 2,
    label: "Defect Type 2",
    value: "defectType2",
  },
  {
    id: 3,
    label: "Defect Type 3",
    value: "defectType3",
  },
];

const AddNewClientService = () => {
  const [defectType, setDefectType] = React.useState<string[]>([]);

  const handleDefectTypeChange = (value: string[]) => {
    setDefectType(value);
  };

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
          onClick={() => navigate(ROUTE_ADD_NEW_SERVICE)}
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
        <Typography variant="h6">Add New Client</Typography>
      </Stack>

      <Box
        maxWidth="828px"
        width="100%"
        margin="0 auto"
        mt="36px"
        display="flex"
        flexDirection="column"
        gap="12px"
      >
        <Stack direction="row" gap="12px">
          <CommonMultiSelect
            label="Select  Client "
            options={defectTypeOptions.map((option) => option.label)}
            value={defectType}
            onChange={handleDefectTypeChange}
            name="client"
            id="client-select"
            fullWidth={true}
            className=""
            rounded="medium"
            variant="outlined"
            size="large"
            sx={{}}
          />
          <InputField
            name="URL"
            placeholder="Paste URL here"
            control={control}
            label="URL"
            type="text"
            fullWidth={true}
          />
        </Stack>

        <Stack mt="24px" direction="row" gap="12px">
          <InputField
            name="Username"
            placeholder="Enter here"
            control={control}
            label="Username"
            type="text"
            fullWidth={true}
          />
          <InputField
            name="Password"
            placeholder="Enter here"
            control={control}
            label="Password"
            type="password"
            fullWidth={true}
          />
        </Stack>
        <InputField
          name="API key"
          placeholder="Enter here"
          control={control}
          label="API key"
          type="text"
          fullWidth={true}
        />
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
          Add New Client
        </Button>
      </Stack>
    </Box>
  );
};

export default AddNewClientService;
