import { IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import Table from "../../components/common/Table/Table";

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

  return (
    <Table
      columns={columns}
      data={data}
      progressPending={false}
      pagination
      paginationPerPage={10}
      paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
      onSelectedRowsChange={() => {}}
      onSort={() => {}}
      className="client-registered-device-table"
    />
  );
}
