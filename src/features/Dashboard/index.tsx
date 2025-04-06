import { Box, Grid, Stack, Tab, Tabs, Typography } from "@mui/material";
import CustomSelect from "../../components/common/CustomSelect/CustomSelect";
import Table from "../../components/common/Table/Table";
import MetricCard from "./MatricCard";
import { useState } from "react";
import DashboardChip from "../../components/common/CustomChip/CustomChip";
import Button from "../../components/common/Button/Button";
import PeriodSelector from "./PeriodSelector";
import TrendChart from "./TrendChart";
import { Chart, registerables } from "chart.js";
import StatusBadge from "./StatusBadge";
import SvarityItem from "./SverityItem";
import { DownloadSmIcon } from "../../assets/Images/svg";
Chart.register(...registerables);

const Dashboard = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };
  const classificationData = [
    { label: "PO -1445 (33%)", percentage: 33, color: "classification-po" },
    { label: "LO -733 (17%)", percentage: 17, color: "classification-lo" },
    { label: "TR - 1124 (26%)", percentage: 26, color: "classification-tr" },
    { label: "WH - 706 (16%)", percentage: 16, color: "classification-wh" },
    { label: "AL - ...", percentage: 8, color: "classification-al" },
  ];
  const columns = [
    {
      name: (
        <Typography
          sx={{
            whiteSpace: "nowrap",
          }}
          variant="body2"
        >
          Client Name/ID
        </Typography>
      ),
      selector: (row: any) => row.clientName,
      sortable: true,
    },
    {
      name: <Typography>No of Jobs</Typography>,
      selector: (row: any) => row.noOfJobs,
      width: "160px",
      sortable: true,
    },
    {
      name: <Typography>Status</Typography>,
      selector: (row: any) => row.status,
      sortable: true,
    },
    {
      name: <Typography>Push Data</Typography>,
      selector: (row: any) => row.pushData,
      width: "300px",
    },
  ];

  const data = [
    {
      clientName: (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="body2">John</Typography>
          <DashboardChip label="#9202" size="small" rounded={true} />
        </Box>
      ),
      noOfJobs: (
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
            12
          </Typography>
        </Stack>
      ),
      status: <StatusBadge status="Submitted" />,
      pushData: (
        <Button
          variant="outline"
          sx={{
            display: "flex",
            padding: "4px 10px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            alignSelf: "stretch",
            flexShrink: 0,
            borderRadius: "100px",
            border: "1px solid rgba(71, 57, 116, 0.5)",
            color: "var(--primary-main)",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "22px",
            letterSpacing: "0.46px",
            textTransform: "capitalize",
          }}
        >
          Push Data to "{"3rd Party name here"}"
        </Button>
      ),
    },
    {
      clientName: (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="body2">John</Typography>
          <DashboardChip label="#9202" size="small" rounded={true} />
        </Box>
      ),
      noOfJobs: (
        <Stack direction="row" spacing={0.5} alignItems="center">
          <Typography variant="body2">12</Typography>
        </Stack>
      ),
      status: <StatusBadge status="QA" />,
      pushData: (
        <Button
          variant="outline"
          sx={{
            display: "flex",
            padding: "4px 10px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            alignSelf: "stretch",
            flexShrink: 0,
            borderRadius: "100px",
            border: "1px solid rgba(71, 57, 116, 0.5)",
            color: "var(--primary-main)",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "22px",
            letterSpacing: "0.46px",
            textTransform: "capitalize",
          }}
        >
          Push Data to "{"3rd Party name here"}"
        </Button>
      ),
    },
    {
      clientName: (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="body2">John</Typography>
          <DashboardChip label="#9202" size="small" rounded={true} />
        </Box>
      ),
      noOfJobs: (
        <Stack direction="row" spacing={0.5} alignItems="center">
          <Typography variant="body2">12</Typography>
        </Stack>
      ),
      status: <StatusBadge status="Completed" />,
      pushData: (
        <Button
          variant="outline"
          sx={{
            display: "flex",
            padding: "4px 10px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            alignSelf: "stretch",
            flexShrink: 0,
            borderRadius: "100px",
            border: "1px solid rgba(71, 57, 116, 0.5)",
            color: "var(--primary-main)",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "22px",
            letterSpacing: "0.46px",
            textTransform: "capitalize",
          }}
        >
          Push Data to "{"3rd Party name here"}"
        </Button>
      ),
    },
  ];
  const scannedColumns = [
    {
      name: (
        <Typography
          sx={{
            whiteSpace: "nowrap",
          }}
          variant="body2"
        >
          Scan No.
        </Typography>
      ),
      selector: (row: any) => row.scanNo,
      sortable: true,
    },
    {
      name: <Typography>Region</Typography>,
      selector: (row: any) => row.region,
      sortable: true,
    },
    {
      name: <Typography>No. of Defects</Typography>,
      selector: (row: any) => row.noOfDefects,
      sortable: true,
    },
    {
      name: <DownloadSmIcon />,
      selector: (row: any) => row.download,
    },
  ];

  const scannedData = [
    {
      scanNo: (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="body2">#78183</Typography>
        </Box>
      ),
      region: (
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
            Middle East
          </Typography>
        </Stack>
      ),
      noOfDefects: (
        <Stack direction="row" spacing={0.5} alignItems="center">
          <Typography variant="body2">12</Typography>
        </Stack>
      ),
      download: (
        <Button
          variant="outline"
          sx={{
            padding: "0px",
            border: "none",
            color: "var(--primary-main)",
          }}
        >
          <DownloadSmIcon />
        </Button>
      ),
    },
  ];
  const jobDetailsColumns = [
    {
      name: (
        <Typography
          sx={{
            whiteSpace: "nowrap",
          }}
          variant="body2"
        >
          Job ID
        </Typography>
      ),
      selector: (row: any) => row.jobId,
      sortable: true,
      width: "106px",
    },
    {
      name: <Typography>Classification</Typography>,
      selector: (row: any) => row.classification,
      sortable: true,
    },
    {
      name: <Typography>Severity (1-Hight, 5- Low)</Typography>,
      selector: (row: any) => row.severity,
      sortable: true,
    },
    {
      name: <Typography>No of Defects</Typography>,
      selector: (row: any) => row.noOfDefects,
      width: "132px",
    },
  ];

  const jobDetailsData = [
    {
      jobId: (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="body2">#81982</Typography>
        </Box>
      ),
      classification: <SvarityItem data={classificationData} />,
      severity: <SvarityItem data={classificationData} />,
      noOfDefects: (
        <Button
          variant="outline"
          sx={{
            display: "flex",
            padding: "0px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border: "none",
            color: "var(--primary-main)",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "22px",
            letterSpacing: "0.46px",
            textTransform: "capitalize",
          }}
        >
          View on Map
        </Button>
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
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h4">Dashboard</Typography>
        <Stack direction="row" spacing={2}>
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
        </Stack>
      </Stack>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <MetricCard title="Total Scanned Km" value="1,024" change="+5%" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <MetricCard title="Active Clients" value="87" change="+3%" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <MetricCard title="Devices in Use" value="12" change="-2%" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <MetricCard title="Discovered Defects" value="1903" change="+10%" />
        </Grid>
      </Grid>
      <Box sx={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: 2 }}>
        <Stack
          direction={"column"}
          className="gray-container-table dashboard-table"
        >
          <Stack direction="row" justifyContent="space-between" p={3}>
            <Typography variant="h6">Data Push Request</Typography>
            <Stack direction="row" spacing={2}>
              <CustomSelect
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
                }}
                fullWidth={false}
              />
            </Stack>
          </Stack>
          <Table
            columns={columns}
            data={data}
            progressPending={false}
            pagination={false}
            selectableRows={false}
            onSort={() => {}}
          />
        </Stack>
        <Box
          sx={{
            display: "flex",
            padding: "24px 24px 48px 24px",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "24px",
            flex: "1 0 0",
            borderRadius: "16px",
            border: "1.5px solid rgba(0, 0, 0, 0.00)",
            background: "rgba(71, 57, 116, 0.08)",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Trends
            </Typography>
            <PeriodSelector label="Showing" value="This year" />
          </Box>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            sx={{
              "& .MuiTabs-indicator": {},
              width: "100%",
            }}
          >
            <Tab
              label="Discovered Defects"
              sx={{
                textTransform: "none",
                fontWeight: tabValue === 0 ? "bold" : "normal",
                color: tabValue === 0 ? "#6366F1" : "#757575",
              }}
            />
            <Tab
              label="Defects Per Severity"
              sx={{
                textTransform: "none",
                fontWeight: tabValue === 1 ? "bold" : "normal",
                color: tabValue === 1 ? "#6366F1" : "#757575",
              }}
            />
          </Tabs>

          <Box sx={{ mb: 2, width: "100%" }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", display: "inline-block", mr: 1 }}
            >
              1,024
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#4CAF50",
                fontWeight: "medium",
                display: "inline-block",
              }}
            >
              +5%
            </Typography>
          </Box>
          <Box sx={{ height: 300, width: "100%" }}>
            <TrendChart />
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "grid", gridTemplateColumns: "2fr 3fr", gap: 2 }}>
        <Stack
          direction={"column"}
          className="gray-container-table dashboard-table"
        >
          <Stack direction="row" justifyContent="space-between" p={3}>
            <Typography variant="h6">Scan Logs</Typography>
            <Stack direction="row" spacing={2}>
              <CustomSelect
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
                }}
                fullWidth={false}
              />
            </Stack>
          </Stack>
          <Table
            columns={scannedColumns}
            data={scannedData}
            progressPending={false}
            pagination={false}
            selectableRows={false}
            onSort={() => {}}
          />
        </Stack>
        <Stack
          direction={"column"}
          className="gray-container-table dashboard-table"
        >
          <Stack direction="row" justifyContent="space-between" p={3}>
            <Typography variant="h6">Job Details</Typography>
            <Stack direction="row" spacing={2}>
              <CustomSelect
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
                }}
                fullWidth={false}
              />
            </Stack>
          </Stack>
          <Table
            columns={jobDetailsColumns}
            data={jobDetailsData}
            progressPending={false}
            pagination={false}
            selectableRows={false}
            onSort={() => {}}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default Dashboard;
