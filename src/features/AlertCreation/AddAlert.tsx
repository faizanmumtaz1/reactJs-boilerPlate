import { Box, Typography } from "@mui/material";
import { IconButton, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { ROUTE_ALERT_CREATION } from "../../utils/constant";
import InputField from "../../components/common/InputField/InputField";
import { useForm } from "react-hook-form";
import CustomSelect from "../../components/common/CustomSelect/CustomSelect";
import Button from "../../components/common/Button/Button";
import CommonMultiSelect from "../../components/common/CommonMultiSelect";
import React from "react";
import CustomTextArea from "../../components/common/Textarea";
import CommonCheckbox from "../../components/common/CommonCheckbox/idex";
const clientOptions = [
  {
    id: 1,
    label: "Client 1",
    value: "client1",
  },
];
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

const AddAlert = () => {
  const [defectType, setDefectType] = React.useState<string[]>([]);
  const [defectSeverity, setDefectSeverity] = React.useState<string>("");

  const handleDefectTypeChange = (value: string[]) => {
    setDefectType(value);
  };
  const handleDefectSeverityChange = (value: string) => {
    setDefectSeverity(value);
  };
  const navigate = useNavigate();
  const { control } = useForm();
  return (
    <Box bgcolor="#F8F9FB" width="100%" height="100%" pb="102px">
      <Stack
        direction="row"
        gap="16px"
        bgcolor="#fff"
        p="16px 24px"
        width="100%"
        alignItems="center"
      >
        <IconButton
          onClick={() => navigate(ROUTE_ALERT_CREATION)}
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
        <Typography variant="h5">Create New Alert</Typography>
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
        <InputField
          name="Title"
          control={control}
          label="Title"
          type="text"
          fullWidth={true}
        />
        <CustomTextArea
          label="Description"
          id="description"
          name="Description"
          placeholder="Enter description"
          value=""
          onChange={() => {}}
          rows={3}
          maxRows={5}
          className=""
          error={false}
          helperText=""
          fullWidth={true}
          disabled={false}
          required={false}
          variant="outlined"
          rounded="medium"
        />
        <CommonMultiSelect
          label="Defect Type"
          options={defectTypeOptions.map((option) => option.label)}
          value={defectType}
          onChange={handleDefectTypeChange}
          name="defectType"
          id="defect-type-select"
          fullWidth={true}
          className=""
          rounded="medium"
          variant="outlined"
          size="large"
          sx={{}}
        />

        <Stack mt="24px" direction="row" gap="12px">
          <CustomSelect
            label="Defect Type"
            options={clientOptions}
            onChange={() => {}}
            name="defectType"
            id="defect-type-select"
            rounded="medium"
            variant="outlined"
            size="large"
            fullWidth={true}
          />
          <CustomSelect
            label="Defect Severity"
            options={clientOptions}
            onChange={handleDefectSeverityChange}
            name="defectSeverity"
            id="defect-severity-select"
            rounded="medium"
            value={defectSeverity}
            variant="outlined"
            size="large"
            fullWidth={true}
          />
        </Stack>
        <CommonCheckbox label="Send this alert whenever the criteria are met." />
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
          color="primary"
          sx={{ borderRadius: "80px" }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{ borderRadius: "80px" }}
        >
          Add New Alert
        </Button>
      </Stack>
    </Box>
  );
};

export default AddAlert;
