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

const DeviceManagementListing = () => {
  const navigate = useNavigate();
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

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
      name: <Typography>Current Client</Typography>,
      selector: (row: any) => row.client,
      sortable: true,
    },
    {
      name: <Typography>All Jobs</Typography>,
      selector: (row: any) => row.allJob,
      sortable: true,
    },
    {
      name: <Typography>Region</Typography>,
      selector: (row: any) => row.region,
      sortable: true,
    },
    {
      name: <Typography>Defects</Typography>,
      selector: (row: any) => row.defects,
      sortable: true,
    },
    {
      name: <Typography>Status</Typography>,
      selector: (row: any) => row.status,
      sortable: true,
    },
    {
      name: <Typography>Last seen</Typography>,
      selector: (row: any) => row.lastSeen,
      sortable: true,
    },
    {
      name: <Typography>Recent GPS</Typography>,
      selector: (row: any) => row.recentGps,
      sortable: true,
    },
    {
      name: <Typography>Actions</Typography>,
      selector: (row: any) => row.actions,
    },
  ];

  const data = [
    {
      name: (
        <>
          <Typography variant="body2">Arma Eye</Typography>
          <Typography variant="body2">#71913</Typography>
        </>
      ),
      deviceId: <Typography variant="body2">MT7915</Typography>,
      client: (
        <Stack direction="row" spacing={0.5} alignItems="center">
          <Typography variant="body2">James</Typography>
          <Chip color="default" sx={{ height: "25px" }} label="#1001" />
        </Stack>
      ),
      allJob: <Typography variant="body2">73</Typography>,
      region: <Typography variant="body2">UK</Typography>,
      defects: <Typography variant="body2">75</Typography>,
      status: (
        <Chip
          variant="outlined"
          sx={{
            height: "18px",
            p: "10px",
          }}
          label="Inactive"
          color="error"
        />
      ),
      lastSeen: <Typography variant="body2">Jan 2, 15, 9:00 am</Typography>,
      recentGps: <Typography variant="body2">53.380822, -2.901932</Typography>,
      actions: (
        <Stack direction="row" spacing={2}>
          <IconButton>
            <ModeEditOutlineIcon
              onClick={() => navigate(`/edit-or-view-device/123?edit=true`)}
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
    },
    {
      name: (
        <>
          <Typography variant="body2">Arma Eye</Typography>
          <Typography variant="body2">#71913</Typography>
        </>
      ),
      deviceId: <Typography variant="body2">MT7915</Typography>,
      client: (
        <Stack direction="row" spacing={0.5} alignItems="center">
          <Typography variant="body2">James</Typography>
          <Chip color="default" sx={{ height: "25px" }} label="#1001" />
        </Stack>
      ),
      allJob: <Typography variant="body2">72</Typography>,
      region: <Typography variant="body2">UK</Typography>,
      defects: <Typography variant="body2">73</Typography>,
      status: (
        <Chip
          variant="outlined"
          sx={{
            height: "18px",
            p: "10px",
          }}
          label="Inactive"
          color="error"
        />
      ),
      lastSeen: <Typography variant="body2">Jan 2, 15, 9:00 am</Typography>,
      recentGps: <Typography variant="body2">53.380822, -2.901932</Typography>,
      actions: (
        <Stack direction="row" spacing={2}>
          <IconButton>
            <ModeEditOutlineIcon
              onClick={() => navigate(`/edit-or-view-device/123?edit=true`)}
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
    },
    {
      name: (
        <>
          <Typography variant="body2">Arma Eye</Typography>
          <Typography variant="body2">#71913</Typography>
        </>
      ),
      deviceId: <Typography variant="body2">MT7915</Typography>,
      client: (
        <Stack direction="row" spacing={0.5} alignItems="center">
          <Typography variant="body2">James</Typography>
          <Chip color="default" sx={{ height: "25px" }} label="#1001" />
        </Stack>
      ),
      allJob: <Typography variant="body2">73</Typography>,
      region: <Typography variant="body2">UK</Typography>,
      defects: <Typography variant="body2">73</Typography>,
      status: (
        <Chip
          variant="outlined"
          sx={{
            height: "18px",
            p: "10px",
          }}
          label="Active"
          color="success"
        />
      ),
      lastSeen: <Typography variant="body2">Jan 2, 15, 9:00 am</Typography>,
      recentGps: <Typography variant="body2">53.380822, -2.901932</Typography>,
      actions: (
        <Stack direction="row" spacing={2}>
          <IconButton>
            <ModeEditOutlineIcon
              onClick={() => navigate(`/edit-or-view-device/123?edit=true`)}
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
      // actions: <EditIcon />,
    },
    {
      name: (
        <>
          <Typography variant="body2">Arma Eye</Typography>
          <Typography variant="body2">#71913</Typography>
        </>
      ),
      deviceId: <Typography variant="body2">MT7915</Typography>,
      client: (
        <Stack direction="row" spacing={0.5} alignItems="center">
          <Typography variant="body2">James</Typography>
          <Chip color="default" sx={{ height: "25px" }} label="#1001" />
        </Stack>
      ),
      allJob: <Typography variant="body2">73</Typography>,
      region: <Typography variant="body2">UK</Typography>,
      defects: <Typography variant="body2">73</Typography>,
      status: (
        <Chip
          variant="outlined"
          sx={{
            height: "18px",
            p: "10px",
          }}
          label="Active"
          color="success"
        />
      ),
      lastSeen: <Typography variant="body2">Jan 2, 15, 9:00 am</Typography>,
      recentGps: <Typography variant="body2">53.380822, -2.901932</Typography>,
      actions: (
        <Stack direction="row" spacing={2}>
          <IconButton>
            <ModeEditOutlineIcon
              onClick={() => navigate(`/edit-or-view-device/123?edit=true`)}
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
    },
    {
      name: (
        <>
          <Typography variant="body2">Arma Eye</Typography>
          <Typography variant="body2">Arma Eye</Typography>
        </>
      ),
      deviceId: <Typography variant="body2">MT7915</Typography>,
      client: (
        <Stack direction="row" spacing={0.5} alignItems="center">
          <Typography variant="body2">James</Typography>
          <Chip color="default" sx={{ height: "25px" }} label="#1001" />
        </Stack>
      ),
      allJob: <Typography variant="body2">73</Typography>,
      region: <Typography variant="body2">UK</Typography>,
      defects: <Typography variant="body2">73</Typography>,
      status: (
        <Chip
          variant="outlined"
          sx={{
            height: "18px",
            p: "10px",
          }}
          label="Active"
          color="success"
        />
      ),
      lastSeen: <Typography variant="body2">Jan 2, 15, 9:00 am</Typography>,
      recentGps: <Typography variant="body2">53.380822, -2.901932</Typography>,
      actions: (
        <Stack direction="row" spacing={2}>
          <IconButton>
            <ModeEditOutlineIcon
              onClick={() => navigate(`/edit-or-view-device/123?edit=true`)}
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
        my: 2,
      }}
    >
      <Stack direction="row" justifyContent="space-between" pb={2}>
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
            columns={columns}
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
