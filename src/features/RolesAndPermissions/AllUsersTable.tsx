import {
  Avatar,
  Box,
  Chip,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import CustomSelect from "../../components/common/CustomSelect/CustomSelect";
import SearchBar from "../../components/common/SearchBar/SearchBar";
import Table from "../../components/common/Table/Table";
import Loader from "../../components/common/Loader";
import useGetAllUsers from "../../react-query-hooks/useGetAllUsers";
import { useForm } from "react-hook-form";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState, useEffect } from "react";
const AllUsersTable = () => {
  const { control, watch } = useForm();
  const { data: usersData, isLoading: isUsersLoading } = useGetAllUsers();
  const [filteredUsersData, setFilteredUsersData] = useState(usersData);
  const selectedStatus = watch("status");
  const selectedRole = watch("role");
  useEffect(() => {
    if (!usersData) return;

    let filteredUsers = usersData;
    if (selectedStatus) {
      filteredUsers = filteredUsers.filter((user: any) => {
        if (selectedStatus === "active") return user.is_active;
        if (selectedStatus === "inactive") return !user.is_active;
        return true;
      });
    }
    if (selectedRole) {
      filteredUsers = filteredUsers.filter((user: any) => {
        return user.role.name.toLowerCase() === selectedRole.toLowerCase();
      });
    }

    setFilteredUsersData(filteredUsers);
  }, [usersData, selectedStatus, selectedRole]);

  const columns = [
    {
      name: <Typography variant="body2">Name</Typography>,
      selector: (row: any) => row.name,
      sortable: true,
      cell: (row: any) => (
        <Stack direction="row" spacing={1} alignItems="center">
          <Avatar
            sx={{ width: 32, height: 32 }}
            src="/assets/images/man.jpeg"
          />
          <Box>
            <Typography variant="body2">
              {row?.forename} {row?.surname}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {row?.email}
            </Typography>
          </Box>
        </Stack>
      ),
    },
    {
      name: <Typography variant="body2">Organisation Name</Typography>,
      selector: (row: any) => row.organisation,
      sortable: true,
      cell: (row: any) => (
        <Typography variant="body2">{row?.organisation?.name}</Typography>
      ),
    },
    {
      name: <Typography variant="body2">Status</Typography>,
      selector: (row: any) => row.status,
      sortable: true,
      cell: (row: any) => (
        <Chip
          sx={{ cursor: "default" }}
          label={row?.is_active ? "Active" : "Inactive"}
          color={row?.is_active ? "success" : "error"}
          variant="outlined"
        />
      ),
    },
    {
      name: <Typography variant="body2">Role</Typography>,
      selector: (row: any) => row.role,
      sortable: true,
      cell: (row: any) => (
        <Chip
          label={row?.role?.name}
          sx={{
            backgroundColor: "var(--secondary-50)",
            color: "var(--secondary-dark)",
            borderRadius: "8px",
            border: "1px solid var(--secondary-dark)",
            cursor: "default",
          }}
        />
      ),
    },

    {
      name: <Typography variant="body2">Actions</Typography>,
      selector: (row: any) => row.actions,
      cell: () => (
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
  const handleSearch = (value: string) => {
    const filteredUsers = usersData.filter((user: any) => {
      return (
        user.forename.toLowerCase().includes(value.toLowerCase()) ||
        user.surname.toLowerCase().includes(value.toLowerCase())
      );
    });
    setFilteredUsersData(filteredUsers);
  };

  return (
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
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          placeholder="Name, client, ID..."
          sx={{
            background: "white",
          }}
        />
        <CustomSelect
          label="Status"
          options={[
            { label: "Active", value: "active" },
            { label: "Inactive", value: "inactive" },
          ]}
          control={control}
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
          options={[
            { label: "Admin", value: "admin" },
            { label: "User", value: "user" },
            { label: "Super Admin", value: "super admin" },
            { label: "Guest", value: "guest" },
          ]}
          control={control}
          name="role"
          id="role-select"
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
        {isUsersLoading ? (
          <Loader size={50} />
        ) : (
          <Table
            columns={columns}
            data={filteredUsersData}
            progressPending={false}
            pagination
            paginationPerPage={10}
            paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
            selectableRows
            onSelectedRowsChange={() => {}}
            onSort={() => {}}
            className="roles-and-permissions-table"
          />
        )}
      </Box>
    </Box>
  );
};

export default AllUsersTable;
