import {
  Box,
  Button,
  Chip,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import CustomSelect from "../../components/common/CustomSelect/CustomSelect";
import SearchBar from "../../components/common/SearchBar/SearchBar";
import Table from "../../components/common/Table/Table";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { ROUTE_ADD_DEVICE } from "../../utils/constant";
import "./style.scss";
import { useState } from "react";
import Modal from "../../components/common/Modal/Modal";
import SingleBox from "../../components/common/SingleBox/SingleBox";
import DeviceMobileFilters from "./DeviceMobileFilters";

type StatusColor = "error" | "success" | "warning" | "default";

interface DeviceData {
  name: string;
  deviceId: string;
  clientName: string;
  clientId: string;
  allJob: number;
  region: string;
  defects: number;
  status: string;
  statusColor: StatusColor;
  lastSeen: string;
  recentGps: string;
}

interface DeviceRow {
  name: React.ReactNode;
  deviceId: React.ReactNode;
  client: React.ReactNode;
  allJob: React.ReactNode;
  region: React.ReactNode;
  defects: React.ReactNode;
  status: React.ReactNode;
  lastSeen: React.ReactNode;
  recentGps: React.ReactNode;
  actions: React.ReactNode;
}

const DeviceManagementListing = () => {
  const navigate = useNavigate();
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const columns: {
    name: React.ReactNode;
    selector: (row: DeviceRow) => React.ReactNode;
    sortable?: boolean;
  }[] = [
    {
      name: (
        <Typography sx={{ whiteSpace: "nowrap" }} variant="body2">
          Name/Device ID
        </Typography>
      ),
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: <Typography>Current Client</Typography>,
      selector: (row) => row.client,
      sortable: true,
    },
    {
      name: <Typography>All Jobs</Typography>,
      selector: (row) => row.allJob,
      sortable: true,
    },
    {
      name: <Typography>Region</Typography>,
      selector: (row) => row.region,
      sortable: true,
    },
    {
      name: <Typography>Defects</Typography>,
      selector: (row) => row.defects,
      sortable: true,
    },
    {
      name: <Typography>Status</Typography>,
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: <Typography>Last seen</Typography>,
      selector: (row) => row.lastSeen,
      sortable: true,
    },
    {
      name: <Typography>Recent GPS</Typography>,
      selector: (row) => row.recentGps,
      sortable: true,
    },
    {
      name: <Typography>Actions</Typography>,
      selector: (row) => row.actions,
    },
  ];

  const createDeviceData = (data: DeviceData) => {
    return {
      name: (
        <>
          <Typography variant="body2">{data.name}</Typography>
          <Typography variant="body2">{data.deviceId}</Typography>
        </>
      ),
      deviceId: <Typography variant="body2">{data.deviceId}</Typography>,
      client: (
        <Stack direction="row" spacing={0.5} alignItems="center">
          <Typography variant="body2">{data.clientName}</Typography>
          <Chip
            color="default"
            sx={{ height: "25px" }}
            label={`#${data.clientId}`}
          />
        </Stack>
      ),
      allJob: <Typography variant="body2">{data.allJob}</Typography>,
      region: <Typography variant="body2">{data.region}</Typography>,
      defects: <Typography variant="body2">{data.defects}</Typography>,
      status: (
        <Chip
          variant="outlined"
          sx={{
            height: "18px",
            p: "10px",
          }}
          label={data.status}
          color={data.statusColor}
        />
      ),
      lastSeen: <Typography variant="body2">{data.lastSeen}</Typography>,
      recentGps: <Typography variant="body2">{data.recentGps}</Typography>,
      actions: (
        <Stack direction="row" spacing={2}>
          <IconButton
            onClick={() =>
              navigate(`/edit-or-view-device/${data.deviceId}?edit=true`)
            }
          >
            <ModeEditOutlineIcon
              sx={{
                height: "18px",
                width: "18px",
                color: "var(--text-active)",
              }}
            />
          </IconButton>
          <IconButton onClick={() => setOpenDeleteModal(true)}>
            <DeleteIcon
              sx={{
                height: "18px",
                width: "18px",
                color: "var(--text-active)",
              }}
            />
          </IconButton>
        </Stack>
      ),
    };
  };

  const rawData = [
    {
      name: "Arma Eye",
      deviceId: "#71913",
      clientName: "James",
      clientId: "1001",
      allJob: 73,
      region: "UK",
      defects: 75,
      status: "Inactive",
      statusColor: "error",
      lastSeen: "Jan 2, 15, 9:00 am",
      recentGps: "53.380822, -2.901932",
    },
    {
      name: "Arma Eye",
      deviceId: "#71913",
      clientName: "James",
      clientId: "1001",
      allJob: 72,
      region: "UK",
      defects: 73,
      status: "Inactive",
      statusColor: "error",
      lastSeen: "Jan 2, 15, 9:00 am",
      recentGps: "53.380822, -2.901932",
    },
    {
      name: "Arma Eye",
      deviceId: "#71913",
      clientName: "James",
      clientId: "1001",
      allJob: 73,
      region: "UK",
      defects: 73,
      status: "Active",
      statusColor: "success",
      lastSeen: "Jan 2, 15, 9:00 am",
      recentGps: "53.380822, -2.901932",
    },
    {
      name: "Arma Eye",
      deviceId: "#71913",
      clientName: "James",
      clientId: "1001",
      allJob: 73,
      region: "UK",
      defects: 73,
      status: "Active",
      statusColor: "success",
      lastSeen: "Jan 2, 15, 9:00 am",
      recentGps: "53.380822, -2.901932",
    },
    {
      name: "Arma Eye",
      deviceId: "#71913",
      clientName: "James",
      clientId: "1001",
      allJob: 73,
      region: "UK",
      defects: 73,
      status: "Active",
      statusColor: "success",
      lastSeen: "Jan 2, 15, 9:00 am",
      recentGps: "53.380822, -2.901932",
    },
  ];

  const data: any = rawData.map((singleItem: any) =>
    createDeviceData({ ...singleItem })
  );

  const severityOptions = [
    { label: "1 - 250", value: "1-250" },
    { label: "3 - 856 (20%)", value: "3-856" },
    { label: "5 - 3124 (71%)", value: "5-3124" },
    { label: "N/A...", value: "N/A..." },
  ];

  const formatKeyToHeading = (key: string): string => {
    return key
      .replace(/([A-Z])/g, " $1") // insert space before capital letters
      .replace(/^./, (str) => str.toUpperCase()); // capitalize first letter
  };

  return (
    <Box
      sx={{
        width: "100%",
        px: 3,
        my: 2,
      }}
    >
      <Stack
        sx={{
          display: { xs: "none", md: "flex" },
        }}
        direction="row"
        justifyContent="space-between"
        pb={2}
      >
        <Typography variant="h4">Device Management</Typography>
        <Button
          className="rounded-full-button"
          startIcon={<AddIcon />}
          variant="contained"
          color="primary"
          onClick={() => navigate(ROUTE_ADD_DEVICE)}
        >
          Add New Device
        </Button>
      </Stack>
      <Box
        sx={{
          backgroundColor: "background.default",
          padding: 2,
          borderRadius: 3,
          mt: 2,
          paddingBottom: 0,
          display: { xs: "none", md: "block" },
        }}
      >
        <Stack direction="row" justifyContent="start" spacing={2}>
          <SearchBar
            label="Search"
            variant="outlined"
            rounded="medium"
            width="300px"
            placeholder="Name, client, ID..."
            sx={{
              background: "white",
            }}
          />
          <CustomSelect
            label="Status"
            options={severityOptions}
            onChange={() => {}}
            name="status"
            id="status-select"
            rounded="medium"
            variant="outlined"
            size="medium"
            sx={{
              minWidth: "180px",
              height: "40px",
              background: "white",
            }}
            fullWidth={false}
          />
          <CustomSelect
            label="Region"
            options={severityOptions}
            onChange={() => {}}
            name="region"
            id="region-select"
            rounded="medium"
            variant="outlined"
            size="medium"
            sx={{
              minWidth: "180px",
              height: "40px",
              background: "white",
            }}
            fullWidth={false}
            labelStyling={{
              marginTop: "5px",
              backgroundColor: "var(--background-default) !important",
            }}
          />
        </Stack>
        <Box mt={2}>
          <Table
            columns={columns as any}
            data={data}
            progressPending={false}
            pagination
            paginationPerPage={10}
            paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
            selectableRows
            onSort={() => {}}
            className="device-management-table"
            onRowClicked={() => {
              navigate(`/edit-or-view-device/123`);
            }}
          />
        </Box>
      </Box>
      {/* Mobile View */}
      <Box
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        <DeviceMobileFilters />
      </Box>
      {/* buttons=
      {{
        text: item.deviceId,
        variant: "contained",
        color: "secondary",
      }} */}
      <Stack
        sx={{
          display: { xs: "block", md: "none" },
        }}
        direction="column"
        spacing={2}
      >
        {rawData.map((item, index) => (
          <SingleBox
            details={Object.keys(item)
              .filter((key) => key !== "statusColor")
              .map((key) => ({
                heading: formatKeyToHeading(key),
                value: String(item[key as keyof typeof item]),
              }))}
            title={item.name}
            key={index}
            chips={[item.deviceId, item.status]}
          />
        ))}
      </Stack>
      <Modal
        open={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        onConfirm={() => {}}
        title="Delete device?"
        subtitle="Are you sure you would like to remove this device?"
      />
    </Box>
  );
};

export default DeviceManagementListing;
