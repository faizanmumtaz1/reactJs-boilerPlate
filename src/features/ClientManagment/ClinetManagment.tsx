import {
  Box,
  Chip,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import CustomSelect from "../../components/common/CustomSelect/CustomSelect";
import SearchBar from "../../components/common/SearchBar/SearchBar";
import Table from "../../components/common/Table/Table";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { ROUTE_ADD_NEW_CLIENT } from "../../utils/constant";
import "./style.scss";
import { useState } from "react";
import Modal from "../../components/common/Modal/Modal";
import Button from "../../components/common/Button/Button";
import SingleBox from "../../components/common/SingleBox/SingleBox";
import ClientMobileFilters from "./ClientMobileFilters";

type ClientData = {
  name: string;
  deviceId: string;
  email: string;
  clientName: string;
  clientId: string;
  remainingMiles: number;
  inviteStatus: string;
  inviteStatusColor: "success" | "error" | "warning" | "info" | "default"; // Based on MUI <Chip> colors
  registeredDevices: number;
  noOfUsers: number;
  assignedRegion: string;
};

type ClientRow = {
  name: React.ReactNode;
  email: React.ReactNode;
  client: React.ReactNode;
  remainingMiles: React.ReactNode;
  inviteStatus: React.ReactNode;
  registeredDevices?: React.ReactNode; // optional based on tabValue
  noOfUsers?: React.ReactNode; // optional based on tabValue
  assignedRegion: React.ReactNode;
  actions: React.ReactNode;
};

const ClinetManagment = () => {
  const navigate = useNavigate();

  const [tabValue, setTabValue] = useState(0);

  const columns: {
    name: React.ReactNode;
    selector: (row: ClientRow) => React.ReactNode;
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
      name: <Typography>Email</Typography>,
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: <Typography>Remaining Miles</Typography>,
      selector: (row) => row.remainingMiles,
      sortable: true,
    },
    {
      name: <Typography>Invite Status</Typography>,
      selector: (row) => row.inviteStatus,
      sortable: true,
    },
    ...(tabValue === 0
      ? [
          {
            name: <Typography>No. of Registered Devices</Typography>,
            selector: (row: any) => row.registeredDevices,
            sortable: true,
          },
        ]
      : [
          {
            name: <Typography>No. of Users</Typography>,
            selector: (row: any) => row.noOfUsers,
            sortable: true,
          },
        ]),
    {
      name: <Typography>Assigned Region</Typography>,
      selector: (row) => row.assignedRegion,
      sortable: true,
    },
    {
      name: <Typography>Actions</Typography>,
      selector: (row) => row.actions,
    },
  ];

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const createClientData = (data: ClientData) => {
    return {
      name: (
        <>
          <Typography variant="body2">{data.name}</Typography>
          <Typography variant="body2">{data.deviceId}</Typography>
        </>
      ),
      email: <Typography variant="body2">{data.email}</Typography>,
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
      remainingMiles: (
        <Typography variant="body2">{data.remainingMiles}</Typography>
      ),
      inviteStatus: (
        <Chip
          variant="outlined"
          sx={{ height: "18px", p: "10px" }}
          label={tabValue === 0 ? data.inviteStatus : "Archived"}
          color={tabValue === 0 ? data.inviteStatusColor : "error"}
        />
      ),
      registeredDevices: (
        <Typography variant="body2">{data.registeredDevices}</Typography>
      ),
      noOfUsers: <Typography variant="body2">{data.noOfUsers}</Typography>,
      assignedRegion: (
        <Typography variant="body2">{data.assignedRegion}</Typography>
      ),
      actions: (
        <Stack direction="row" spacing={2}>
          <IconButton
            onClick={() =>
              navigate(`/edit-or-view-client/${data.clientId}?edit=true`)
            }
          >
            <ModeEditOutlineIcon
              sx={{
                width: "18px",
                height: "18px",
                color: "var(--text-active)",
              }}
            />
          </IconButton>
          <IconButton onClick={() => setShowDeleteModal(true)}>
            <DeleteIcon
              sx={{
                width: "18px",
                height: "18px",
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
      email: "john@gmail.com",
      clientName: "James",
      clientId: "1001",
      remainingMiles: 73,
      inviteStatus: tabValue === 0 ? "Invite Sent" : "Archived",
      inviteStatusColor: "warning",
      ...(tabValue === 0 && {
        registeredDevices: 75,
      }),
      ...(tabValue === 1 && {
        noOfUsers: 75,
      }),
      assignedRegion: "Nottingham",
    },
    {
      name: "Arma Eye",
      deviceId: "#71913",
      email: "john@gmail.com",
      clientName: "James",
      clientId: "1001",
      remainingMiles: 72,
      inviteStatus: tabValue === 0 ? "Active" : "Archived",
      inviteStatusColor: "success",
      ...(tabValue === 0 && {
        registeredDevices: 73,
      }),
      ...(tabValue === 1 && {
        noOfUsers: 73,
      }),
      assignedRegion: "Nottingham",
    },
    {
      name: "Arma Eye",
      deviceId: "#71913",
      email: "john@gmail.com",
      clientName: "James",
      clientId: "1001",
      remainingMiles: 73,
      inviteStatus: tabValue === 0 ? "Invite Sent" : "Archived",
      inviteStatusColor: "warning",
      ...(tabValue === 0 && {
        registeredDevices: 73,
      }),
      ...(tabValue === 1 && {
        noOfUsers: 73,
      }),
      assignedRegion: "Nottingham",
    },
  ];

  const data: any = rawData.map((item: any) => createClientData(item));

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
        mt: 2,
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        pb={2}
        sx={{
          display: { xs: "none", md: "flex" },
        }}
      >
        <Typography variant="h4">Client Management</Typography>
        <Button
          startIcon={<AddIcon />}
          variant="contained"
          color="primary"
          onClick={() => navigate(ROUTE_ADD_NEW_CLIENT)}
          className="rounded-full-button"
        >
          Add New Client
        </Button>
      </Stack>

      <Box sx={{ borderBottom: 1, borderColor: "var(--divider)" }}>
        <Tabs
          value={tabValue}
          onChange={(_, newValue) => setTabValue(newValue)}
          aria-label="basic tabs example"
        >
          <Tab
            sx={{
              textTransform: "capitalize !important",
              fontWeight: 500,
            }}
            label="Active/Invited"
          />
          <Tab
            sx={{
              textTransform: "capitalize !important",
              fontWeight: 500,
            }}
            label="Archived"
          />
        </Tabs>
      </Box>

      <Box
        sx={{
          backgroundColor: "background.default",
          padding: 2,
          borderRadius: 3,
          mt: 2,
          paddingBottom: 0,
          pt: 3,
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
            onSelectedRowsChange={() => {}}
            onSort={() => {}}
            className="client-management-table"
            onRowClicked={() => {
              navigate(`/edit-or-view-client/123`);
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        <ClientMobileFilters />
      </Box>
      <Stack
        sx={{
          display: { xs: "block", md: "none" },
        }}
        direction="column"
        spacing={2}
        my={2}
      >
        {rawData.map((item, index) => (
          <SingleBox
            details={Object.keys(item)
              .filter((key) => key !== "inviteStatusColor")
              .map((key) => ({
                heading: formatKeyToHeading(key),
                value: String(item[key as keyof typeof item]),
              }))}
            title={item.name}
            key={index}
            chips={[item.deviceId, item.inviteStatus]}
          />
        ))}
      </Stack>
      <Modal
        open={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={() => {}}
        title="Delete device?"
        subtitle="Are you sure you would like to remove this device?"
      />
    </Box>
  );
};

export default ClinetManagment;
