import { Box, Typography } from "@mui/material";
import { IconButton, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import {
  ROUTE_ADD_NEW_CLIENT_SERVICE,
  ROUTE_ACTIVE_SERVICE,
} from "../../utils/constant";
import InputField from "../../components/common/InputField/InputField";
import { useForm } from "react-hook-form";
import Button from "../../components/common/Button/Button";
import AddIcon from "@mui/icons-material/Add";
import CustomSelect from "../../components/common/CustomSelect/CustomSelect";
import SearchBar from "../../components/common/SearchBar/SearchBar";
import Table from "../../components/common/Table/Table";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteIcon from "@mui/icons-material/Delete";
const columns = [
  {
    name: (
      <Typography
        sx={{
          whiteSpace: "nowrap",
        }}
        variant="body2"
      >
        Client Name
      </Typography>
    ),
    selector: (row: any) => row.clientName,
    sortable: true,
  },
  {
    name: <Typography>URL</Typography>,
    selector: (row: any) => row.url,
    sortable: true,
    minWidth: "200px",
  },
  {
    name: <Typography>API Key</Typography>,
    selector: (row: any) => row.apiKey,
    sortable: true,
  },
  {
    name: <Typography>Username</Typography>,
    selector: (row: any) => row.username,
    sortable: true,
  },
  {
    name: <Typography>Password</Typography>,
    selector: (row: any) => row.password,
    sortable: true,
  },

  {
    name: <Typography>Actions</Typography>,
    selector: (row: any) => row.actions,
    width: "100px",
  },
];

const data = [
  {
    clientName: (
      <>
        <Typography variant="body2">John</Typography>
      </>
    ),
    url: (
      <Stack direction="row" spacing={0.5} alignItems="center">
        <Typography
          variant="body2"
          sx={{
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "20px",
            color: "var(--text-primary)",
            whiteSpace: "nowrap",
            minWidth: "174px",
          }}
        >
          https://www.google.com
        </Typography>
      </Stack>
    ),
    apiKey: (
      <Stack direction="row" spacing={0.5} alignItems="center">
        <Typography variant="body2">1234567890</Typography>
      </Stack>
    ),
    username: (
      <Stack direction="row" spacing={0.5} alignItems="center">
        <Typography variant="body2">John</Typography>
      </Stack>
    ),
    password: (
      <Stack direction="row" spacing={0.5} alignItems="center">
        <Typography variant="body2">1234567890</Typography>
      </Stack>
    ),

    actions: (
      <Stack direction="row" spacing={1}>
        <IconButton>
          <ModeEditOutlineIcon
            sx={{
              width: "18px",
              color: "var(--text-active)",
            }}
          />
        </IconButton>
        <IconButton>
          <DeleteIcon
            sx={{
              width: "18px",
              color: "var(--text-active)",
            }}
          />
        </IconButton>
      </Stack>
    ),
  },
];

const AddNewService = () => {
  const monthOptions = [
    {
      id: 1,
      label: "January",
      value: "January",
    },
  ];

  const navigate = useNavigate();
  const { control } = useForm();
  return (
    <Box
      bgcolor="#F8F9FB"
      width="100%"
      height="calc(100vh - 64px)"
      overflow="auto"
    >
      <Stack
        direction="row"
        gap="16px"
        bgcolor="#fff"
        p="16px 24px"
        width="100%"
        alignItems="center"
      >
        <IconButton
          onClick={() => navigate(ROUTE_ACTIVE_SERVICE)}
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
        <Typography variant="h6">New Service</Typography>
      </Stack>

      <Box
        maxWidth="828px"
        width="100%"
        margin="0 auto"
        my="36px"
        display="flex"
        flexDirection="column"
        gap="12px"
      >
        <InputField
          name="URL"
          placeholder="Paste URL here"
          control={control}
          label="URL"
          type="text"
          fullWidth={true}
        />
        <Box
          display="flex"
          flexDirection="row"
          gap="12px"
          justifyContent="space-between"
          py="16px"
        >
          <Typography variant="h6">Associated Clients</Typography>

          <Button
            variant="outlined"
            color="inherit"
            startIcon={<AddIcon />}
            tertiary
            sx={{
              borderRadius: "80px",
            }}
            onClick={() => navigate(ROUTE_ADD_NEW_CLIENT_SERVICE)}
          >
            Add a New Client
          </Button>
        </Box>
        <Stack direction={"column"} className="light-container-table">
          <Stack
            p={4}
            direction="row"
            justifyContent="start"
            spacing={2}
            sx={{
              backgroundColor: "var(--white)",
            }}
          >
            <SearchBar
              label="Search"
              variant="outlined"
              rounded="medium"
              width="300px"
              placeholder="Name, client, ID..."
            />

            <CustomSelect
              label="Month"
              options={monthOptions}
              onChange={() => {}}
              name="month"
              id="month-select"
              rounded="medium"
              variant="outlined"
              size="medium"
              sx={{
                minWidth: "180px",
              }}
              fullWidth={false}
            />
          </Stack>
          <Box>
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
            />
          </Box>
        </Stack>
      </Box>

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
        // left="0"
      >
        <Button
          variant="outlined"
          color="primary"
          sx={{ borderRadius: "80px" }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{ borderRadius: "80px" }}
        >
          Create Report
        </Button>
      </Stack>
    </Box>
  );
};

export default AddNewService;
