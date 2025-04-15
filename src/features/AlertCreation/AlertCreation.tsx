import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import CustomSelect from "../../components/common/CustomSelect/CustomSelect";
import SearchBar from "../../components/common/SearchBar/SearchBar";
import Table from "../../components/common/Table/Table";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { ROUTE_ADD_ALERT } from "../../utils/constant";
import { useForm } from "react-hook-form";

const AlertCreation = () => {
  const navigate = useNavigate();
  const { control } = useForm();
  const columns = [
    {
      name: (
        <Typography
          sx={{
            whiteSpace: "nowrap",
          }}
          variant="body2"
        >
          Title
        </Typography>
      ),
      selector: (row: any) => row.name,
      sortable: true,
    },
    {
      name: <Typography>Alert Message</Typography>,
      selector: (row: any) => row.alertMessage,
      width: "500px",
      sortable: true,
    },
    {
      name: <Typography>Type of Issue</Typography>,
      selector: (row: any) => row.typeOfIssue,
      sortable: true,
    },
    {
      name: <Typography>Device</Typography>,
      selector: (row: any) => row.device,
      sortable: true,
    },
    {
      name: <Typography>Date Added</Typography>,
      selector: (row: any) => row.dateAdded,
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
          <Typography variant="body2">Repair warning</Typography>
        </>
      ),
      alertMessage: (
        <Stack direction="row" spacing={0.5} alignItems="center">
          <Typography
            variant="body2"
            sx={{
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "20px",
              color: "var(--text-primary)",
              whiteSpace: "pre-wrap",
            }}
          >
            Please check your system settings. An issue has been detected that
            requires your attention.
          </Typography>
        </Stack>
      ),
      typeOfIssue: <Typography variant="body2">Pothole</Typography>,
      device: <Typography variant="body2">Arres Eye</Typography>,
      dateAdded: <Typography variant="body2">Jun 23, 23</Typography>,
      actions: (
        <Stack direction="row" spacing={2}>
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
    {
      name: (
        <>
          <Typography variant="body2">Repair warning</Typography>
        </>
      ),
      alertMessage: (
        <Stack direction="row" spacing={0.5} alignItems="center">
          <Typography
            variant="body2"
            sx={{
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "20px",
              color: "var(--text-primary)",
              whiteSpace: "pre-wrap",
            }}
          >
            Please check your system settings. An issue has been detected that
            requires your attention.
          </Typography>
        </Stack>
      ),
      typeOfIssue: <Typography variant="body2">Pothole</Typography>,
      device: <Typography variant="body2">Arres Eye</Typography>,
      dateAdded: <Typography variant="body2">Jun 23, 23</Typography>,
      actions: (
        <Stack direction="row" spacing={2}>
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
    {
      name: (
        <>
          <Typography variant="body2">Repair warning</Typography>
        </>
      ),
      alertMessage: (
        <Stack direction="row" spacing={0.5} alignItems="center">
          <Typography
            variant="body2"
            sx={{
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "20px",
              color: "var(--text-primary)",
              whiteSpace: "pre-wrap",
            }}
          >
            Please check your system settings. An issue has been detected that
            requires your attention.
          </Typography>
        </Stack>
      ),
      typeOfIssue: <Typography variant="body2">Pothole</Typography>,
      device: <Typography variant="body2">Arres Eye</Typography>,
      dateAdded: <Typography variant="body2">Jun 23, 23</Typography>,
      actions: (
        <Stack direction="row" spacing={2}>
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
    {
      name: (
        <>
          <Typography variant="body2">Repair warning</Typography>
        </>
      ),
      alertMessage: (
        <Stack direction="row" spacing={0.5} alignItems="center">
          <Typography
            variant="body2"
            sx={{
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "20px",
              color: "var(--text-primary)",
              whiteSpace: "pre-wrap",
            }}
          >
            Please check your system settings. An issue has been detected that
            requires your attention.
          </Typography>
        </Stack>
      ),
      typeOfIssue: <Typography variant="body2">Pothole</Typography>,
      device: <Typography variant="body2">Arres Eye</Typography>,
      dateAdded: <Typography variant="body2">Jun 23, 23</Typography>,
      actions: (
        <Stack direction="row" spacing={2}>
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
    {
      name: (
        <>
          <Typography variant="body2">Repair warning</Typography>
        </>
      ),
      alertMessage: (
        <Stack direction="row" spacing={0.5} alignItems="center">
          <Typography
            variant="body2"
            sx={{
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "20px",
              color: "var(--text-primary)",
              whiteSpace: "pre-wrap",
            }}
          >
            Please check your system settings. An issue has been detected that
            requires your attention.
          </Typography>
        </Stack>
      ),
      typeOfIssue: <Typography variant="body2">Pothole</Typography>,
      device: <Typography variant="body2">Arres Eye</Typography>,
      dateAdded: <Typography variant="body2">Jun 23, 23</Typography>,
      actions: (
        <Stack direction="row" spacing={2}>
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
      <Stack direction="row" justifyContent="space-between" pb="16px">
        <Typography variant="h4">Alert Creation</Typography>
        <Button
          sx={{
            borderRadius: "30px",
            textTransform: "capitalize",
            minWidth: 191,
          }}
          startIcon={<AddIcon />}
          variant="contained"
          color="primary"
          onClick={() => navigate(ROUTE_ADD_ALERT)}
        >
          Create New Alert
        </Button>
      </Stack>
      <Stack direction={"column"} className="gray-container-table">
        <Stack
          p={2}
          direction="row"
          justifyContent="space-between"
          spacing={2}
          sx={{
            backgroundColor: "#F8F9FB",
          }}
        >
          <Stack direction="row" justifyContent="start" spacing={2}>
            <SearchBar
              label="Search"
              variant="outlined"
              rounded="medium"
              width="300px"
              placeholder="Name, client, ID..."
            />
            <CustomSelect
              label="Type Of Issues"
              options={severityOptions}
              control={control}
              name="clientName"
              id="clientName-select"
              rounded="medium"
              variant="outlined"
              size="large"
              fullWidth={true}
              sx={{
                background: "white",
              }}
            />
            <CustomSelect
              label="Devices"
              options={severityOptions}
              control={control}
              name="clientName"
              id="clientName-select"
              rounded="medium"
              variant="outlined"
              size="large"
              fullWidth={true}
              sx={{
                background: "white",
              }}
            />
          </Stack>
          <CustomSelect
            label="Month"
            options={severityOptions}
            control={control}
            name="month"
            id="month-select"
            rounded="medium"
            variant="outlined"
            size="large"
            fullWidth={true}
            sx={{
              background: "white",
            }}
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
            onRowClicked={() => {
              navigate(`/edit-or-view-alert/123`);
            }}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default AlertCreation;
