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

const ClinetManagment = () => {
  const navigate = useNavigate();

  const [tabValue, setTabValue] = useState(0);

  const columns = [
    {
      name: (
        <Typography
          sx={{
            whiteSpace: "nowrap",
          }}
          variant="body2"
        >
          Name/Device ID
        </Typography>
      ),
      selector: (row: any) => row.name,
      sortable: true,
    },
    {
      name: <Typography>Email</Typography>,
      selector: (row: any) => row.email,
      sortable: true,
    },
    {
      name: <Typography>Remaining Miles</Typography>,
      selector: (row: any) => row.remainingMiles,
      sortable: true,
    },
    {
      name: <Typography>Invite Status</Typography>,
      selector: (row: any) => row.inviteStatus,
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
      selector: (row: any) => row.assignedRegion,
      sortable: true,
    },
    {
      name: <Typography>Actions</Typography>,
      selector: (row: any) => row.actions,
      sortable: true,
    },
  ];

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const data = [
    {
      name: (
        <>
          <Typography variant="body2">Arma Eye</Typography>
          <Typography variant="body2">#71913</Typography>
        </>
      ),
      email: <Typography variant="body2">john@gmail.com</Typography>,
      client: (
        <Stack direction="row" spacing={0.5} alignItems="center">
          <Typography variant="body2">James</Typography>
          <Chip color="default" sx={{ height: "25px" }} label="#1001" />
        </Stack>
      ),
      remainingMiles: <Typography variant="body2">73</Typography>,
      inviteStatus: (
        <Chip
          variant="outlined"
          sx={{
            height: "18px",
            p: "10px",
          }}
          label={tabValue === 0 ? "Invite Sent" : "Archived"}
          color={tabValue === 0 ? "warning" : "error"}
        />
      ),
      registeredDevices: <Typography variant="body2">75</Typography>,
      noOfUsers: <Typography variant="body2">75</Typography>,
      assignedRegion: <Typography variant="body2">Nottingham</Typography>,
      actions: (
        <Stack direction="row" spacing={2}>
          <IconButton
            onClick={() => navigate(`/edit-or-view-client/123?edit=true`)}
          >
            <ModeEditOutlineIcon
              sx={{
                width: "18px",
                color: "var(--text-active)",
                height: "18px",
              }}
            />
          </IconButton>
          <IconButton onClick={() => setShowDeleteModal(true)}>
            <DeleteIcon
              sx={{
                width: "18px",
                color: "var(--text-active)",
                height: "18px",
              }}
            />
          </IconButton>
        </Stack>
      ),
    },
    {
      name: (
        <>
          <Typography variant="body2">Arma Eye</Typography>
          <Typography variant="body2">#71913</Typography>
        </>
      ),
      email: <Typography variant="body2">john@gmail.com</Typography>,
      client: (
        <Stack direction="row" spacing={0.5} alignItems="center">
          <Typography variant="body2">James</Typography>
          <Chip color="default" sx={{ height: "25px" }} label="#1001" />
        </Stack>
      ),
      remainingMiles: <Typography variant="body2">72</Typography>,
      inviteStatus: (
        <Chip
          variant="outlined"
          sx={{
            height: "18px",
            p: "10px",
          }}
          label={tabValue === 0 ? "Active" : "Archived"}
          color={tabValue === 0 ? "success" : "error"}
        />
      ),
      registeredDevices: <Typography variant="body2">73</Typography>,
      noOfUsers: <Typography variant="body2">73</Typography>,
      assignedRegion: <Typography variant="body2">Nottingham</Typography>,
      actions: (
        <Stack direction="row" spacing={2}>
          <IconButton
            onClick={() => navigate(`/edit-or-view-client/123?edit=true`)}
          >
            <ModeEditOutlineIcon
              sx={{
                width: "18px",
                color: "var(--text-active)",
                height: "18px",
              }}
            />
          </IconButton>
          <IconButton onClick={() => setShowDeleteModal(true)}>
            <DeleteIcon
              sx={{
                width: "18px",
                color: "var(--text-active)",
                height: "18px",
              }}
            />
          </IconButton>
        </Stack>
      ),
    },
    {
      name: (
        <>
          <Typography variant="body2">Arma Eye</Typography>
          <Typography variant="body2">#71913</Typography>
        </>
      ),
      email: <Typography variant="body2">john@gmail.com</Typography>,
      client: (
        <Stack direction="row" spacing={0.5} alignItems="center">
          <Typography variant="body2">James</Typography>
          <Chip color="default" sx={{ height: "25px" }} label="#1001" />
        </Stack>
      ),
      remainingMiles: <Typography variant="body2">73</Typography>,
      inviteStatus: (
        <Chip
          variant="outlined"
          sx={{
            height: "18px",
            p: "10px",
          }}
          label={tabValue === 0 ? "Invite Sent" : "Archived"}
          color={tabValue === 0 ? "warning" : "error"}
        />
      ),
      registeredDevices: <Typography variant="body2">73</Typography>,
      noOfUsers: <Typography variant="body2">73</Typography>,
      assignedRegion: <Typography variant="body2">Nottingham</Typography>,
      actions: (
        <Stack direction="row" spacing={2}>
          <IconButton
            onClick={() => navigate(`/edit-or-view-client/123?edit=true`)}
          >
            <ModeEditOutlineIcon
              sx={{
                width: "18px",
                color: "var(--text-active)",
                height: "18px",
              }}
            />
          </IconButton>
          <IconButton onClick={() => setShowDeleteModal(true)}>
            <DeleteIcon
              sx={{
                width: "18px",
                color: "var(--text-active)",
                height: "18px",
              }}
            />
          </IconButton>
        </Stack>
      ),
      // actions: <EditIcon />,
    },
  ];

  const severityOptions = [
    { label: "1 - 250", value: "1-250" },
    { label: "3 - 856 (20%)", value: "3-856" },
    { label: "5 - 3124 (71%)", value: "5-3124" },
    { label: "N/A...", value: "N/A..." },
  ];
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
            columns={columns}
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
