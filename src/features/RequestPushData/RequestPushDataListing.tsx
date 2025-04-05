import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import CustomSelect from "../../components/common/CustomSelect/CustomSelect";
import SearchBar from "../../components/common/SearchBar/SearchBar";
import Table from "../../components/common/Table/Table";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import {
  ROUTE_ADD_DEVICE,
  ROUTE_CREATE_NEW_REQUEST,
} from "../../utils/constant";
import "./style.scss";
import { useState } from "react";
import Modal from "../../components/common/Modal/Modal";

const RequestPushDataListing = () => {
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
          Scanned Date Range
        </Typography>
      ),
      selector: (row: any) => row.scannedDateRange,
      sortable: true,
    },
    {
      name: <Typography>Region</Typography>,
      selector: (row: any) => row.region,
      sortable: true,
    },
    {
      name: <Typography>Status</Typography>,
      selector: (row: any) => row.status,
      sortable: true,
    },
    {
      name: <Typography>Created Date</Typography>,
      selector: (row: any) => row.createdDate,
      sortable: true,
    },
  ];

  const data = [
    {
      scannedDateRange: (
        <Typography variant="body2">
          January 21, 2023 - February 21, 2023
        </Typography>
      ),
      region: <Typography variant="body2">All</Typography>,
      status: (
        <Chip
          variant="outlined"
          sx={{
            height: "18px",
            p: "10px",
          }}
          label="Complete"
          color="success"
        />
      ),
      createdDate: <Typography variant="body2">Jun 23, 23</Typography>,
    },
    {
      scannedDateRange: (
        <Typography variant="body2">
          February 12, 2023 - March 1, 2023
        </Typography>
      ),
      region: <Typography variant="body2">China, UK</Typography>,
      status: (
        <Chip
          variant="outlined"
          sx={{
            height: "18px",
            p: "10px",
          }}
          label="Submitted"
          color="warning"
        />
      ),
      createdDate: <Typography variant="body2">Jul 02, 23</Typography>,
    },
    {
      scannedDateRange: (
        <Typography variant="body2">March 23, 2023 - April 21, 2023</Typography>
      ),
      region: <Typography variant="body2">Germany, Canada</Typography>,
      status: (
        <Chip
          variant="outlined"
          sx={{
            height: "18px",
            p: "10px",
          }}
          label="Complete"
          color="success"
        />
      ),
      createdDate: <Typography variant="body2">Aug 19, 23</Typography>,
    },
    {
      scannedDateRange: (
        <Typography variant="body2">April 22, 2023 - May 1, 2023</Typography>
      ),
      region: <Typography variant="body2">USA, France</Typography>,
      status: (
        <Chip
          variant="outlined"
          sx={{
            height: "18px",
            p: "10px",
          }}
          label="Submitted"
          color="warning"
        />
      ),
      createdDate: <Typography variant="body2">Sep 5, 23</Typography>,
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
        <Typography variant="h4">Request To Push DATA to Service</Typography>
        <Button
          sx={{
            borderRadius: "30px",
            textTransform: "capitalize",
            minWidth: 191,
          }}
          startIcon={<AddIcon />}
          variant="contained"
          color="primary"
          onClick={() => navigate(ROUTE_CREATE_NEW_REQUEST)}
        >
          New Request To Push Data
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
          />
          <CustomSelect
            label="Created by"
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
            }}
            fullWidth={false}
            labelStyling={{
              marginTop: "5px",
              backgroundColor: "var(--background-default) !important",
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
            }}
            fullWidth={false}
            labelStyling={{
              marginTop: "5px",
              backgroundColor: "var(--background-default) !important",
            }}
          />
          <Box
            sx={{
              display: "flex",
              flex: 1,
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <CustomSelect
              multiple
              label="Showing"
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
              }}
              fullWidth={false}
              labelStyling={{
                marginTop: "5px",
                backgroundColor: "var(--background-default) !important",
              }}
            />
          </Box>
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
            className="request-push-data-table"
            onRowClicked={(row) => {
              navigate(`/view-request/123`);
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

export default RequestPushDataListing;
