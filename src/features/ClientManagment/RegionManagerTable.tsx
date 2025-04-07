import { Box, IconButton, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Table from "../../components/common/Table/Table";
import SearchBar from "../../components/common/SearchBar/SearchBar";
import CustomSelect from "../../components/common/CustomSelect/CustomSelect";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "../../components/common/Button/Button";
import AddIcon from "@mui/icons-material/Add";
import Modal from "../../components/common/Modal/Modal";

export default function RegionManagerTable() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const columns = [
    {
      name: <Typography sx={{ whiteSpace: "nowrap" }}>Name/ID</Typography>,
      selector: (row: any) => row.nameId,
      sortable: true,
    },
    {
      name: <Typography>Email</Typography>,
      selector: (row: any) => row.email,
      sortable: true,
    },
    {
      name: <Typography>Phone Number</Typography>,
      selector: (row: any) => row.phoneNumber,
      sortable: true,
    },
    {
      name: <Typography>Sub Region</Typography>,
      selector: (row: any) => row.subRegion,
      sortable: true,
    },
    {
      name: <Typography>Assigned Users</Typography>,
      selector: (row: any) => row.assignedUsers,
      sortable: true,
    },
    {
      name: <Typography>Assigned Device</Typography>,
      selector: (row: any) => row.assignedDevice,
      sortable: true,
    },
    {
      name: <Typography>Action</Typography>,
      selector: (row: any) => row.action,
      sortable: false,
    },
  ];

  const data = [
    {
      nameId: (
        <Typography noWrap>
          John <br /> #89993
        </Typography>
      ),
      email: <Typography noWrap>john@gmail.com</Typography>,
      phoneNumber: <Typography noWrap>29308810313</Typography>,
      subRegion: <Typography noWrap>North Manchester</Typography>,
      assignedUsers: <Typography noWrap>2</Typography>,
      assignedDevice: <Typography noWrap>Arres EYE</Typography>,
      action: (
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
      nameId: (
        <Typography noWrap>
          Emily <br /> #4562
        </Typography>
      ),
      email: <Typography noWrap>emily.smith@email.com</Typography>,
      phoneNumber: <Typography noWrap>48291038476</Typography>,
      subRegion: <Typography noWrap>Central London</Typography>,
      assignedUsers: <Typography noWrap>5</Typography>,
      assignedDevice: <Typography noWrap>Arres EYE</Typography>,
      action: (
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
      <Stack mb={2} mt={5} direction="row" justifyContent="space-between">
        <Typography variant="h6">Region Manager</Typography>
        <Button
          sx={{
            borderRadius: "80px",
          }}
          variant="outlined"
          color="inherit"
          tertiary
          startIcon={<AddIcon />}
        >
          Add New Region Manager
        </Button>
      </Stack>
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
          className="client-region-manager-table"
        />
      </Box>
      {showDeleteModal && (
        <Modal
          open={showDeleteModal}
          onClose={() => setShowDeleteModal(false)}
          onConfirm={() => setShowDeleteModal(false)}
          title="Delete Region Manager"
          subtitle="Are you sure you want to delete this region manager?"
        />
      )}
    </>
  );
}
