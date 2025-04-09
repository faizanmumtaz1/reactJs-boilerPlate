import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import CustomSelect from "../../components/common/CustomSelect/CustomSelect";
import SearchBar from "../../components/common/SearchBar/SearchBar";
import Table from "../../components/common/Table/Table";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { ROUTE_ADD_NEW_SERVICE } from "../../utils/constant";

const ActiveServiceListing = () => {
  const navigate = useNavigate();
  const columns = [
    {
      name: (
        <Typography
          sx={{
            whiteSpace: "nowrap",
          }}
          variant="body2"
        >
          Name
        </Typography>
      ),
      selector: (row: any) => row.name,
      sortable: true,
    },
    {
      name: <Typography>Clients Associated</Typography>,
      selector: (row: any) => row.clientsAssociated,
      width: "500px",
      sortable: true,
    },

    {
      name: <Typography>Actions</Typography>,
      selector: (row: any) => row.actions,
      width: "180px",
    },
  ];

  const data = [
    {
      name: (
        <>
          <Typography variant="body2">
            Report for Report trend in China
          </Typography>
        </>
      ),
      clientsAssociated: (
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
            John, Alice, Jacob
          </Typography>
        </Stack>
      ),
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
        mt: 2,
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h4">Active Service</Typography>
        <Button
          sx={{
            borderRadius: "30px",
            textTransform: "capitalize",
            minWidth: 191,
          }}
          startIcon={<AddIcon />}
          variant="contained"
          color="primary"
          onClick={() => navigate(ROUTE_ADD_NEW_SERVICE)}
        >
          Create New Service
        </Button>
      </Stack>
      <Stack direction={"column"} className="gray-container-table">
        <Stack
          p={4}
          direction="row"
          justifyContent="start"
          spacing={2}
          sx={{
            backgroundColor: "#F8F9FB",
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
            label="Created by"
            options={severityOptions}
            onChange={() => {}}
            name="status"
            id="status-select"
            rounded="medium"
            variant="outlined"
            size="medium"
            sx={{
              minWidth: "180px",
            }}
            fullWidth={false}
          />
          <CustomSelect
            label="Devices"
            options={severityOptions}
            onChange={() => {}}
            name="region"
            id="region-select"
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
  );
};

export default ActiveServiceListing;
