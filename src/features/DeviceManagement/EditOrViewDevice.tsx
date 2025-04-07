import { Box, Typography } from "@mui/material";
import { IconButton, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ROUTE_DEVICE_MANAGEMENT_LISTING } from "../../utils/constant";
import InputField from "../../components/common/InputField/InputField";
import { useForm } from "react-hook-form";
import CustomSelect from "../../components/common/CustomSelect/CustomSelect";
import Button from "../../components/common/Button/Button";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MapView from "../MapContainer/Map";
import AllJobs from "./AllJobs";

const deviceData = [
  {
    id: 1,
    label: "Name",
    name: "deviceName",
    type: "text",
  },
  {
    id: 2,
    label: "Device ID",
    name: "deviceId",
    type: "number",
  },
  {
    id: 3,
    label: "SSH Tunnel Port",
    name: "sshTunnelPort",
    type: "number",
  },
  {
    id: 4,
    label: "Encoder Side",
    name: "encoderSide",
    type: "text",
  },
  {
    id: 5,
    label: "Wheel Diameter (in)",
    name: "wheelDiameter",
    type: "number",
  },
  {
    id: 6,
    label: "Mounting Height (m)",
    name: "mountingHeight",
    type: "number",
  },
  {
    id: 7,
    label: "Active",
    name: "active",
    type: "number",
  },
  {
    id: 8,
    label: "Exposure",
    name: "exposure",
    type: "number",
  },
  {
    id: 9,
    label: "AOI_Height (m)",
    name: "aoiHeight",
    type: "number",
  },
  {
    id: 10,
    label: "AOI_Offset (m)",
    name: "aoiOffset",
    type: "number",
  },
  {
    id: 11,
    label: "Bidirectional",
    name: "bidirectional",
    type: "number",
  },
  {
    id: 12,
    label: "Lse",
    name: "lse",
    type: "number",
  },
  {
    id: 13,
    label: "Prevent",
    name: "prevent",
    type: "number",
  },
  {
    id: 14,
    label: "Freerun",
    name: "freerun",
    type: "number",
  },
];

const clientOptions = [
  {
    id: 1,
    label: "Client 1",
    value: "client1",
  },
];
const EditOrViewDevice = () => {
  const navigate = useNavigate();
  const { control } = useForm();
  const [isEdit, setIsEdit] = useState(false);

  const [searchParams] = useSearchParams();
  const paramsEdit = searchParams.get("edit") === "true";

  const otherFields = [
    {
      id: 1,
      label: "Currently Registered Client/ID",
      name: "clientId",
      type: "select",
      options: clientOptions,
    },
    {
      id: 2,
      label: "Status",
      name: "status",
      type: "select",
      options: [
        { label: "Active", value: "active" },
        { label: "Inactive", value: "inactive" },
      ],
    },
    {
      id: 3,
      label: "Total Jobs",
      name: "totalJobs",
      type: "number",
    },
    {
      id: 4,
      label: "Defects Discovered",
      name: "defectsDiscovered",
      type: "number",
    },
    {
      id: 5,
      label: "Recent GPS",
      name: "recentGps",
      type: "text",
    },
    {
      id: 6,
      label: "Region ID",
      name: "regionId",
      type: "number",
    },
  ];

  useEffect(() => {
    if (paramsEdit) {
      setIsEdit(true);
    }
  }, [paramsEdit]);

  return (
    <Box bgcolor="#F8F9FB" width="100%" pb="102px">
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
        <Typography variant="h5">Device Details</Typography>
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
              variant="text"
              color="secondary"
              className="rounded-full-button"
              startIcon={<EditIcon />}
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

      <Box maxWidth="828px" width="100%" margin="0 auto" mt="36px">
        <Typography variant="h5">Device Configuration</Typography>
        <Stack direction="row" flexWrap="wrap" gap="12px" mt="16px">
          {deviceData.map((item) => (
            <InputField
              key={item.id}
              name={item.name}
              control={control}
              label={item.label}
              type={item.type}
              sx={{
                width: "100%",
                maxWidth: "calc(50% - 12px)",
                background: "white",
              }}
              disabled={!isEdit}
            />
          ))}
        </Stack>
        <Box mt="24px">
          <Typography variant="h5">More Details</Typography>

          <Stack direction="row" flexWrap="wrap" gap="12px" mt="16px">
            {otherFields.map((item) => (
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
        </Box>
        <Box mt="24px">
          <MapView style={{ minHeight: "200px" }} />
        </Box>

        <AllJobs />
      </Box>

      {isEdit && (
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
          zIndex={1}
          // left="0"
        >
          <Button
            variant="outlined"
            color="secondary"
            className="rounded-full-button"
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            className="rounded-full-button"
          >
            Save Changes
          </Button>
        </Stack>
      )}
    </Box>
  );
};

export default EditOrViewDevice;
