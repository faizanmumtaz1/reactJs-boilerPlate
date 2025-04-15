import { Box, IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";
import Table from "../../components/common/Table/Table";
import SearchBar from "../../components/common/SearchBar/SearchBar";
import CustomSelect from "../../components/common/CustomSelect/CustomSelect";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "../../components/common/Button/Button";
import AddIcon from "@mui/icons-material/Add";
import Modal from "../../components/common/Modal/Modal";
import { useForm } from "react-hook-form";
export default function UserTable() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const { control } = useForm();
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
      name: <Typography>Region Manager</Typography>,
      selector: (row: any) => row.regionManager,
      sortable: true,
    },
    {
      name: <Typography>Created Date</Typography>,
      selector: (row: any) => row.createdDate,
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
      regionManager: <Typography noWrap>Jason</Typography>,
      createdDate: <Typography noWrap>Jan 21, 25</Typography>,
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
      email: <Typography noWrap>emily.smith@example.com</Typography>,
      phoneNumber: <Typography noWrap>31029204012</Typography>,
      subRegion: <Typography noWrap>Southampton</Typography>,
      regionManager: <Typography noWrap>Liam</Typography>,
      createdDate: <Typography noWrap>Feb 15, 25</Typography>,
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
        <Typography variant="h5">Users</Typography>
        <Button
          sx={{
            borderRadius: "80px",
          }}
          variant="outlined"
          color="inherit"
          tertiary
          startIcon={<AddIcon />}
        >
          Add User
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
            control={control}
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
          title="Delete User"
          subtitle="Are you sure you want to delete this user?"
        />
      )}
    </>
  );
}
