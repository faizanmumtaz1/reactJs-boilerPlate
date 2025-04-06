import { Box, Typography } from "@mui/material";
import { IconButton, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { ROUTE_REPORTS } from "../../utils/constant";
import InputField from "../../components/common/InputField/InputField";
import { useForm } from "react-hook-form";
import CustomSelect from "../../components/common/CustomSelect/CustomSelect";
import Button from "../../components/common/Button/Button";
import CommonMultiSelect from "../../components/common/CommonMultiSelect";
import React from "react";
import DatePicker from "../../components/common/DatePicker/DatePicker";
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

const AddNewReport = () => {
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
          onClick={() => navigate(ROUTE_REPORTS)}
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
        <Typography variant="h6">New Report</Typography>
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
          <InputField
            name="Report Name"
            placeholder="Enter here"
            control={control}
            label="Report Name"
            type="text"
            fullWidth={true}
          />
          <DatePicker label="Select Date Range" />
        </Stack>
        <CommonMultiSelect
          label="Select  Region "
          options={defectTypeOptions.map((option) => option.label)}
          value={defectType}
          onChange={handleDefectTypeChange}
          name="region"
          id="region-select"
          fullWidth={true}
          className=""
          rounded="medium"
          variant="outlined"
          size="large"
          sx={{}}
        />
        <CommonMultiSelect
          label="Select Client (optional)"
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

        <Stack mt="24px" direction="row" gap="12px">
          <CustomSelect
            label="Select Scanned Device (optional)"
            options={clientOptions}
            onChange={() => {}}
            name="scannedDevice"
            id="scanned-device-select"
            rounded="medium"
            variant="outlined"
            size="large"
            fullWidth={true}
          />
          <CustomSelect
            label="Select Report Format"
            options={clientOptions}
            onChange={handleDefectSeverityChange}
            name="reportFormat"
            id="report-format-select"
            rounded="medium"
            value={defectSeverity}
            variant="outlined"
            size="large"
            fullWidth={true}
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
        <Button variant="outline" color="primary" sx={{ borderRadius: "80px" }}>
          Cancel
        </Button>
        <Button variant="primary" color="primary" sx={{ borderRadius: "80px" }}>
          Create Report
        </Button>
      </Stack>
    </Box>
  );
};

export default AddNewReport;
