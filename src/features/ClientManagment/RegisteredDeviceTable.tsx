import { Box, Stack, Typography } from "@mui/material";
import Table from "../../components/common/Table/Table";
import SearchBar from "../../components/common/SearchBar/SearchBar";
import CustomSelect from "../../components/common/CustomSelect/CustomSelect";
import "./style.scss";

export default function RegisteredDeviceTable() {
  const columns = [
    {
      name: (
        <Typography sx={{ whiteSpace: "nowrap" }}>Device Name/ID</Typography>
      ),
      selector: (row: any) => row.deviceName,
      sortable: true,
    },
    {
      name: <Typography>Jobs</Typography>,
      selector: (row: any) => row.jobs,
      sortable: true,
    },
    {
      name: <Typography>Region ID</Typography>,
      selector: (row: any) => row.regionId,
      sortable: true,
    },
    {
      name: <Typography>Miles Travelled</Typography>,
      selector: (row: any) => row.milesTravelled,
      sortable: true,
    },
    {
      name: <Typography>Recent GPS</Typography>,
      selector: (row: any) => row.recentGps,
      sortable: true,
    },
    {
      name: <Typography>Device Registered Date</Typography>,
      selector: (row: any) => row.registeredDate,
      sortable: true,
    },
  ];

  const data = [
    {
      deviceName: (
        <Typography noWrap>
          Arres Eye <br /> #89993
        </Typography>
      ),
      jobs: <Typography noWrap>2</Typography>,
      regionId: <Typography noWrap>#899198</Typography>,
      milesTravelled: <Typography noWrap>2892</Typography>,
      recentGps: <Typography noWrap>53.399212, -2.8991938</Typography>,
      registeredDate: <Typography noWrap>Jan 21, 25</Typography>,
    },
    {
      deviceName: (
        <Typography noWrap>
          Arres Eye <br /> #89993
        </Typography>
      ),
      jobs: <Typography noWrap>2</Typography>,
      regionId: <Typography noWrap>#899198</Typography>,
      milesTravelled: <Typography noWrap>2892</Typography>,
      recentGps: <Typography noWrap>53.399212, -2.8991938</Typography>,
      registeredDate: <Typography noWrap>Jan 21, 25</Typography>,
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
        Registered Device Details
      </Typography>

      <Box
        sx={{
          p: 2,
          background: "white",
          borderRadius: "16px",
          pt: 3,
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
          className="client-registered-device-details-table"
        />
      </Box>
    </>
  );
}
