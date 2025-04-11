import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import CustomSelect from "../../components/common/CustomSelect/CustomSelect";
import Table from "../../components/common/Table/Table";
import MetricCard from "./MatricCard";
import { useState } from "react";
import DashboardChip from "../../components/common/CustomChip/CustomChip";
import Button from "../../components/common/Button/Button";
import TrendChart from "./TrendChart";
import { Chart, registerables } from "chart.js";
import StatusBadge from "./StatusBadge";
import SvarityItem from "./SverityItem";
import {
  ArrowBackIcon,
  DownloadSmIcon,
  FilterIcon,
} from "../../assets/Images/svg";
import CustomTabs from "../../components/common/Tabs";
import useCheckMobileScreen from "../../hooks/useCheckMobileScreen";
Chart.register(...registerables);

const Dashboard = () => {
  const isItMobile = useCheckMobileScreen();
  const [tabValue, setTabValue] = useState(0);
  const [showFiltersOnMobile, setShowFiltersOnMobile] = useState(false);

  const pushDataSelect = [
    { label: "This week", value: "This week" },
    { label: "This month", value: "This month" },
    { label: "This year", value: "This year" },
    { label: "All time", value: "All time" },
  ];
  const createdBySelect = [
    { label: "John Doe", value: "John Doe" },
    { label: "Jane Doe", value: "Jane Doe" },
    { label: "John Smith", value: "John Smith" },
    { label: "Jane Smith", value: "Jane Smith" },
  ];
  const regionSelect = [
    { label: "New York", value: "New York" },
    { label: "Los Angeles", value: "Los Angeles" },
    { label: "Chicago", value: "Chicago" },
    { label: "Houston", value: "Houston" },
  ];

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
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
          variant="outlined"
          color="primary"
          size="small"
          className="rounded-full-button"
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
          variant="outlined"
          color="primary"
          size="small"
          className="rounded-full-button"
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
          variant="outlined"
          color="primary"
          size="small"
          className="rounded-full-button"
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
          variant="outlined"
          color="primary"
          size="small"
          className="rounded-full-button"
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
          variant="outlined"
          color="primary"
          size="small"
          className="rounded-full-button"
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
          variant="outlined"
          color="primary"
          size="small"
          className="rounded-full-button"
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
          variant="outlined"
          color="primary"
          size="small"
          className="rounded-full-button"
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
          variant="outlined"
          color="primary"
          size="small"
          className="rounded-full-button"
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
          variant="outlined"
          color="primary"
          size="small"
          className="rounded-full-button"
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
          variant="outlined"
          color="primary"
          size="small"
          className="rounded-full-button"
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
          variant="outlined"
          color="primary"
          size="small"
          className="rounded-full-button"
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
          variant="outlined"
          color="primary"
          size="small"
          className="rounded-full-button"
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
      width: "60px",
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
      download: <DownloadSmIcon />,
    },
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
      download: <DownloadSmIcon />,
    },
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
      download: <DownloadSmIcon />,
    },
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
      download: <DownloadSmIcon />,
    },
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
      download: <DownloadSmIcon />,
    },
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
      download: <DownloadSmIcon />,
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
        <Button variant="text" color="primary" size="small">
          View on Map
        </Button>
      ),
    },
    {
      jobId: (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="body2">#81982</Typography>
        </Box>
      ),
      classification: <SvarityItem data={classificationData} />,
      severity: <SvarityItem data={classificationData} />,
      noOfDefects: (
        <Button variant="text" color="primary" size="small">
          View on Map
        </Button>
      ),
    },
    {
      jobId: (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="body2">#81982</Typography>
        </Box>
      ),
      classification: <SvarityItem data={classificationData} />,
      severity: <SvarityItem data={classificationData} />,
      noOfDefects: (
        <Button variant="text" color="primary" size="small">
          View on Map
        </Button>
      ),
    },
    {
      jobId: (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="body2">#81982</Typography>
        </Box>
      ),
      classification: <SvarityItem data={classificationData} />,
      severity: <SvarityItem data={classificationData} />,
      noOfDefects: (
        <Button variant="text" color="primary" size="small">
          View on Map
        </Button>
      ),
    },
  ];
  const handlePushDataSelect = (e: any) => {
    console.log(e);
  };
  return (
    <Box
      sx={{
        width: "100%",
        px: { xs: 2, md: 3 },
        my: { xs: 2, md: 3 },
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        spacing={{ xs: 1, md: 2 }}
        sx={{
          width: "100%",
        }}
      >
        {isItMobile && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Typography
              variant="body1"
              color="var(--text-secondary) !important"
            >
              View all of important data in one look.
            </Typography>
            <IconButton
              onClick={() => {
                setShowFiltersOnMobile(true);
              }}
              sx={{
                backgroundColor: "rgba(248, 249, 251, 1)",
                borderRadius: "8px",
                "&:hover": {
                  backgroundColor: "rgba(248, 249, 251, 1)",
                },
              }}
            >
              <FilterIcon />
            </IconButton>
          </Box>
        )}

        {!isItMobile ? (
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Typography variant="h4">Dashboard</Typography>

            <Stack direction="row" spacing={2} className="filters-container">
              <CustomSelect
                label="Client"
                options={createdBySelect}
                onChange={() => {}}
                name="client"
                id="client-select"
                value={createdBySelect[0].value}
                rounded="medium"
                variant="outlined"
                size="medium"
                sx={{
                  minWidth: "180px",
                }}
                fullWidth={false}
                className="white-select"
              />
              <CustomSelect
                label="Region"
                options={regionSelect}
                onChange={() => {}}
                name="region"
                id="region-select"
                value={regionSelect[0].value}
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
        ) : (
          <Drawer
            anchor="right"
            sx={{
              "& .MuiDrawer-paper": {
                width: "100%",
              },
            }}
            open={showFiltersOnMobile}
            onClose={() => {
              setShowFiltersOnMobile(false);
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                p: 2,
                gap: "5px",
              }}
            >
              <IconButton
                onClick={() => {
                  setShowFiltersOnMobile(false);
                }}
              >
                <ArrowBackIcon />
              </IconButton>
              <Typography> Filters</Typography>
            </Box>
            <Divider />
            <Box
              sx={{
                padding: "24px",
              }}
            >
              <CustomSelect
                label="Client"
                options={createdBySelect}
                onChange={() => {}}
                name="client"
                id="client-select"
                value={createdBySelect[0].value}
                rounded="medium"
                variant="outlined"
                size="medium"
                sx={{
                  minWidth: "180px",
                  mb: 2,
                }}
                fullWidth={true}
                className="white-select"
              />
              <CustomSelect
                label="Region"
                options={regionSelect}
                onChange={() => {}}
                name="region"
                id="region-select"
                value={regionSelect[0].value}
                rounded="medium"
                variant="outlined"
                size="medium"
                sx={{
                  minWidth: "180px",
                }}
                fullWidth={true}
              />
            </Box>
            <Box
              sx={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                width: "100%",
                borderRadius: "24px 24px 0 0",
                padding: "24px 24px 32px 24px",
                boxShadow: "0px -5px 13px 0px rgb(184 180 180 / 49%)",
              }}
            >
              <Button
                variant="outlined"
                fullWidth={true}
                sx={{ borderRadius: "32px" }}
              >
                Apply Filters
              </Button>
            </Box>
          </Drawer>
        )}
      </Stack>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            lg: "1fr 1fr 1fr 1fr",
            md: "1fr 1fr",
            sm: "1fr 1fr",
            xs: "1fr 1fr",
          },
          gap: 2,
          mb: 3,
          mt: 2,
        }}
      >
        <MetricCard title="Total Scanned Km" value="1,024" change="+5%" />
        <MetricCard title="Active Clients" value="87" change="+3%" />
        <MetricCard title="Devices in Use" value="12" change="-2%" />
        <MetricCard title="Discovered Defects" value="1903" change="+10%" />
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            lg: "3fr 2fr",
            md: "1fr 1fr",
            sm: "1fr",
          },
          gap: 2,
        }}
      >
        <Stack
          direction={"column"}
          className="gray-container-table dashboard-table"
          sx={{
            height: "100%",
            mt: 0,
            display: { xs: "none", md: "flex" },
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            p={{ xs: 2, md: 3 }}
          >
            <Typography variant="h6">Data Push Request</Typography>
            <Stack direction="row" spacing={2}>
              <CustomSelect
                label="Showing"
                options={pushDataSelect}
                onChange={(e) => handlePushDataSelect(e)}
                name="status"
                id="status-select"
                rounded="medium"
                variant="outlined"
                value={pushDataSelect[1].value}
                size="medium"
                sx={{
                  minWidth: "180px",
                  backgroundColor: "var(--white)",
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
            className="dashboard-table-scroll"
          />
        </Stack>
        <Box
          sx={{
            display: "flex",
            padding: "24px",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "24px",
            // flex: "1 0 0",
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
            <CustomSelect
              label="Showing"
              options={pushDataSelect}
              onChange={(e) => handlePushDataSelect(e)}
              name="month"
              id="month-select"
              rounded="medium"
              variant="outlined"
              value={pushDataSelect[2].value}
              size="medium"
              sx={{
                minWidth: "180px",
                backgroundColor: "var(--white)",
              }}
              fullWidth={false}
            />
          </Box>
          <CustomTabs
            tabs={[
              {
                label: "Discovered Defects",
                content: <DiscoveredDefects />,
              },
              {
                label: "Defects Per Severity",
                content: <DefectsPerSeverity />,
              },
            ]}
            value={tabValue}
            onChange={handleTabChange}
            sx={{
              "& .MuiTabs-indicator": {},
              width: "100%",
              px: 0,
            }}
            panelSx={{
              px: 0,
              pb: 0,
            }}
            tabSx={{
              fontSize: { xs: "12px", md: "14px" },
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "24px",
              letterSpacing: "0.4px",
              textTransform: "capitalize",
              padding: "9px 16px",
              flex: "1 0 0",
              whiteSpace: "nowrap",
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            lg: "2fr 3fr",
            md: "1fr 1fr",
            sm: "1fr",
          },
          gap: 2,
        }}
      >
        <Stack
          direction={"column"}
          className="gray-container-table dashboard-table"
          sx={{
            maxHeight: "232px",
            overflow: "hidden",
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            px={3}
            pt={3}
            pb={2}
          >
            <Typography variant="h6">Scan Logs</Typography>
            <Stack direction="row" spacing={2}>
              <CustomSelect
                label="Showing"
                options={pushDataSelect}
                onChange={(e) => handlePushDataSelect(e)}
                name="status"
                id="status-select"
                rounded="medium"
                variant="outlined"
                value={pushDataSelect[2].value}
                size="medium"
                sx={{
                  minWidth: "180px",
                  backgroundColor: "var(--white)",
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
            className="dashboard-table-scroll-scanned"
          />
        </Stack>
        <Stack
          direction={"column"}
          className="gray-container-table dashboard-table"
          sx={{
            maxHeight: "232px",
            overflow: "hidden",
          }}
        >
          <Stack direction="row" justifyContent="space-between" p={3}>
            <Typography variant="h6">Job Details</Typography>
            <Stack direction="row" spacing={2}>
              <CustomSelect
                label="Showing"
                options={pushDataSelect}
                onChange={(e) => handlePushDataSelect(e)}
                name="status"
                id="status-select"
                rounded="medium"
                variant="outlined"
                value={pushDataSelect[2].value}
                size="medium"
                sx={{
                  minWidth: "180px",
                  backgroundColor: "var(--white)",
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
            className="dashboard-table-scroll-scanned"
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default Dashboard;
const DiscoveredDefects = () => {
  return (
    <>
      <Box
        sx={{
          mb: 2,
          width: "100%",
          display: "flex",
          justifyContent: "start",
          alignItems: "flex-end",
          gap: 1,
        }}
      >
        <Typography variant="h4">1,024</Typography>
        <Typography className="text-xs" sx={{ color: "#4CAF50 !important" }}>
          +5%
        </Typography>
      </Box>
      <Box sx={{ width: "100%", height: 175 }}>
        <TrendChart />
      </Box>
    </>
  );
};
const DefectsPerSeverity = () => {
  return (
    <>
      <Box
        sx={{
          mb: 2,
          width: "100%",
          display: "flex",
          justifyContent: "start",
          alignItems: "flex-end",
          gap: 1,
        }}
      >
        <Typography variant="h4">2032</Typography>
        <Typography className="text-xs" sx={{ color: "#4CAF50 !important" }}>
          +32%
        </Typography>
      </Box>
      <Box sx={{ height: 175, width: "100%" }}>
        <TrendChart />
      </Box>
    </>
  );
};
