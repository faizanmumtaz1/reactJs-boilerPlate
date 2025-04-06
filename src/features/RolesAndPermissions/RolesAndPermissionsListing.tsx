import {
  Avatar,
  Box,
  Button,
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
import RolesAndPermissionsTable from "./RolesAndPermissionsTable";

const RolesAndPermissionsListing = () => {
  const navigate = useNavigate();

  const [tabValue, setTabValue] = useState(0);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const columns = [
    {
      name: <Typography variant="body2">Name</Typography>,
      selector: (row: any) => row.name,
      sortable: true,
    },
    {
      name: <Typography variant="body2">Contact No</Typography>,
      selector: (row: any) => row.contactNo,
      sortable: true,
    },
    {
      name: <Typography variant="body2">Status</Typography>,
      selector: (row: any) => row.status,
      sortable: true,
    },
    {
      name: <Typography variant="body2">Role</Typography>,
      selector: (row: any) => row.role,
      sortable: true,
    },
    {
      name: <Typography variant="body2">Date Added</Typography>,
      selector: (row: any) => row.dateAdded,
      sortable: true,
    },
    {
      name: <Typography variant="body2">Actions</Typography>,
      selector: (row: any) => row.actions,
    },
  ];

  const data = [
    {
      name: (
        <Stack direction="row" spacing={1} alignItems="center">
          <Avatar
            sx={{ width: 32, height: 32 }}
            src="/assets/images/man.jpeg"
          />
          <Box>
            <Typography variant="body2">Name</Typography>
            <Typography variant="body2" color="text.secondary">
              jamed@gmail.com
            </Typography>
          </Box>
        </Stack>
      ),
      contactNo: <Typography variant="body2">012 9201 3820</Typography>,
      status: (
        <Chip
          sx={{ cursor: "default" }}
          label="Active"
          color="success"
          variant="outlined"
        />
      ),
      role: (
        <Chip
          label="Super Admin"
          sx={{
            backgroundColor: "var(--secondary-50)",
            color: "var(--secondary-dark)",
            borderRadius: "8px",
            border: "1px solid var(--secondary-dark)",
            cursor: "default",
          }}
        />
      ),
      dateAdded: <Typography variant="body2">Jun 23, 23</Typography>,
      actions: (
        <Stack direction="row" spacing={1}>
          <IconButton>
            <ModeEditOutlineIcon sx={{ fontSize: 18 }} />
          </IconButton>
          <IconButton>
            <DeleteIcon sx={{ fontSize: 18 }} />
          </IconButton>
        </Stack>
      ),
    },
    {
      name: (
        <Stack direction="row" spacing={1} alignItems="center">
          <Avatar
            sx={{ width: 32, height: 32 }}
            src="/assets/images/man.jpeg"
          />
          <Box>
            <Typography variant="body2">Alice</Typography>
            <Typography variant="body2" color="text.secondary">
              alice@gmail.com
            </Typography>
          </Box>
        </Stack>
      ),
      contactNo: <Typography variant="body2">012 9201 3820</Typography>,
      status: (
        <Chip
          sx={{ cursor: "default" }}
          label="Inactive"
          color="error"
          variant="outlined"
        />
      ),
      role: (
        <Chip
          label="Super Admin"
          sx={{
            backgroundColor: "var(--secondary-50)",
            color: "var(--secondary-dark)",
            borderRadius: "8px",
            border: "1px solid var(--secondary-dark)",
            cursor: "default",
          }}
        />
      ),
      dateAdded: <Typography variant="body2">Aug 12, 23</Typography>,
      actions: (
        <Stack direction="row" spacing={1}>
          <IconButton>
            <ModeEditOutlineIcon sx={{ fontSize: 18 }} />
          </IconButton>
          <IconButton>
            <DeleteIcon sx={{ fontSize: 18 }} />
          </IconButton>
        </Stack>
      ),
    },
    {
      name: (
        <Stack direction="row" spacing={1} alignItems="center">
          <Avatar
            sx={{ width: 32, height: 32 }}
            src="/assets/images/man.jpeg"
          />
          <Box>
            <Typography variant="body2">Alice</Typography>
            <Typography variant="body2" color="text.secondary">
              alice@gmail.com
            </Typography>
          </Box>
        </Stack>
      ),
      contactNo: <Typography variant="body2">012 9201 3820</Typography>,
      status: (
        <Chip
          sx={{ cursor: "default" }}
          label="Pending"
          color="warning"
          variant="outlined"
        />
      ),
      role: (
        <Chip
          label="Super Admin"
          sx={{
            backgroundColor: "var(--secondary-50)",
            color: "var(--secondary-dark)",
            borderRadius: "8px",
            border: "1px solid var(--secondary-dark)",
            cursor: "default",
          }}
        />
      ),
      dateAdded: <Typography variant="body2">Aug 12, 23</Typography>,
      actions: (
        <Stack direction="row" spacing={1}>
          <IconButton>
            <ModeEditOutlineIcon sx={{ fontSize: 18 }} />
          </IconButton>
          <IconButton>
            <DeleteIcon sx={{ fontSize: 18 }} />
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
        mt: 2,
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h4">Roles and Permissions</Typography>
        <Button
          sx={{
            borderRadius: "30px",
            textTransform: "capitalize",
            minWidth: 174,
          }}
          startIcon={<AddIcon />}
          variant="contained"
          color="primary"
          onClick={() => navigate(ROUTE_ADD_NEW_CLIENT)}
        >
          Add New User
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
            label="All Users"
          />
          <Tab
            sx={{
              textTransform: "capitalize !important",
              fontWeight: 500,
            }}
            label="Roles & Permission"
          />
        </Tabs>
      </Box>

      {tabValue === 0 && (
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
              label="Role"
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
              className="roles-and-permissions-table"
            />
          </Box>
        </Box>
      )}
      {tabValue === 1 && (
        <Box mt={2}>
          <RolesAndPermissionsTable />
        </Box>
      )}
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

export default RolesAndPermissionsListing;
