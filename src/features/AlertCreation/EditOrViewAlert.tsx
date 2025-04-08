import { Box, Typography } from "@mui/material";
import { IconButton, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ROUTE_ALERT_CREATION } from "../../utils/constant";
import InputField from "../../components/common/InputField/InputField";
import { useForm } from "react-hook-form";
import CustomSelect from "../../components/common/CustomSelect/CustomSelect";
import Button from "../../components/common/Button/Button";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import CommonCheckbox from "../../components/common/CommonCheckbox/idex";
import CustomTextArea from "../../components/common/Textarea";
import CommonMultiSelect from "../../components/common/CommonMultiSelect";
const clientOptions = [
  {
    id: 1,
    label: "Client 1",
    value: "client1",
  },
];
const EditOrViewAlert = () => {
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
  const navigate = useNavigate();
  const { control } = useForm();

  const [isEdit, setIsEdit] = useState(false);

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

        <Typography variant="h6">
          {isEdit ? "Edit Alert Details" : "Alert Details"}
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
              variant="outlined"
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
          disabled={!isEdit}
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
          disabled={!isEdit}
          required={false}
          variant="outlined"
          rounded="medium"
        />
        <CommonMultiSelect
          label="Defect Type"
          options={defectTypeOptions.map((option) => option.label)}
          value={[]}
          onChange={() => {}}
          name="defectType"
          id="defect-type-select"
          disabled={!isEdit}
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
            disabled={!isEdit}
          />
          <CustomSelect
            label="Defect Severity"
            options={clientOptions}
            onChange={() => {}}
            name="defectSeverity"
            id="defect-severity-select"
            rounded="medium"
            variant="outlined"
            size="large"
            fullWidth={true}
            disabled={!isEdit}
          />
        </Stack>
        <CommonCheckbox
          label="Send this alert whenever the criteria are met."
          disabled={!isEdit}
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
        <Button
          variant="outlined"
          color="inherit"
          sx={{ borderRadius: "80px" }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{ borderRadius: "80px" }}
        >
          Save Changes
        </Button>
      </Stack>
    </Box>
  );
};

export default EditOrViewAlert;
