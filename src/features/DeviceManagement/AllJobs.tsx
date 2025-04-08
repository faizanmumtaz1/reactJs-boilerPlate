import { Box, Chip, IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";
import Table from "../../components/common/Table/Table";
import SearchBar from "../../components/common/SearchBar/SearchBar";
import CustomSelect from "../../components/common/CustomSelect/CustomSelect";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "../../components/common/Modal/Modal";
import { Link } from "react-router-dom";
import { ROUTE_VIEW_MAP } from "../../utils/constant";

export default function AllJobs() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const columns = [
    {
      name: <Typography>Job ID</Typography>,
      selector: (row: any) => row.jobId,
      sortable: true,
    },
    {
      name: <Typography>Client</Typography>,
      selector: (row: any) => row.client,
      sortable: true,
    },
    {
      name: <Typography>Defects</Typography>,
      selector: (row: any) => row.defects,
      sortable: true,
    },
    {
      name: <Typography>Map View</Typography>,
      selector: (row: any) => row.mapView,
      sortable: false,
    },
    {
      name: <Typography>Actions</Typography>,
      selector: (row: any) => row.actions,
      sortable: false,
    },
  ];

  const data = [
    {
      jobId: <Typography noWrap>830028</Typography>,
      client: (
        <Stack direction="row" spacing={0.5} alignItems="center">
          <Typography variant="body2">James</Typography>
          <Chip color="default" sx={{ height: "25px" }} label="#9202" />
        </Stack>
      ),
      defects: <Typography noWrap>73</Typography>,
      mapView: (
        <Link style={{ textDecoration: "none" }} to={ROUTE_VIEW_MAP}>
          <Typography noWrap color="primary" sx={{ cursor: "pointer" }}>
            View On Map
          </Typography>
        </Link>
      ),
      actions: (
        <IconButton onClick={() => setShowDeleteModal(true)}>
          <DeleteIcon
            sx={{
              width: "18px",
              color: "var(--text-active)",
              height: "18px",
            }}
          />
        </IconButton>
      ),
    },
    {
      jobId: <Typography noWrap>830029</Typography>,
      client: (
        <Stack direction="row" spacing={0.5} alignItems="center">
          <Typography variant="body2">Sarah</Typography>
          <Chip color="default" sx={{ height: "25px" }} label="#9203" />
        </Stack>
      ),
      defects: <Typography noWrap>45</Typography>,
      mapView: (
        <Link style={{ textDecoration: "none" }} to={ROUTE_VIEW_MAP}>
          <Typography noWrap color="primary" sx={{ cursor: "pointer" }}>
            View On Map
          </Typography>
        </Link>
      ),
      actions: (
        <IconButton onClick={() => setShowDeleteModal(true)}>
          <DeleteIcon
            sx={{
              width: "18px",
              color: "var(--text-active)",
              height: "18px",
            }}
          />
        </IconButton>
      ),
    },
  ];

  const clientOptions = [
    {
      id: 1,
      label: "Client 1",
      value: "client1",
    },
    {
      id: 2,
      label: "Client 2",
      value: "client2",
    },
  ];

  return (
    <>
      <Typography mb={2} mt={5} variant="h5">
        All Jobs
      </Typography>
      <Box
        sx={{
          background: "white",
          borderRadius: "16px",

          pt: 3,
          px: 2,
        }}
      >
        <Stack direction="row" gap="12px" mb={2}>
          <SearchBar
            placeholder="Device name, ID"
            label="Search"
            variant="outlined"
            width="100%"
            rounded="medium"
            className="container-search-bar"
            sx={{
              maxWidth: "300px",
            }}
          />
          <CustomSelect
            label="Showing"
            options={clientOptions}
            onChange={() => {}}
            name="assignedDevice"
            id="status-select"
            rounded="medium"
            variant="outlined"
            size="medium"
            fullWidth={true}
            formControlStyling={{
              maxWidth: "130px",
            }}
          />
        </Stack>

        <Table
          columns={columns}
          data={data}
          progressPending={false}
          pagination
          paginationPerPage={10}
          paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
          onSelectedRowsChange={() => {}}
          onSort={() => {}}
          className="client-user-details-table"
        />
      </Box>

      {showDeleteModal && (
        <Modal
          open={showDeleteModal}
          onClose={() => setShowDeleteModal(false)}
          onConfirm={() => setShowDeleteModal(false)}
          title="Delete Job"
          subtitle="Are you sure you want to delete this job?"
        />
      )}
    </>
  );
}
