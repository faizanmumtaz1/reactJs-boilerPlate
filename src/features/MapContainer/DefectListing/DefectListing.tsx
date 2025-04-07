import { ArrowBackIcon, SearchIcon } from "../../../assets/Images/svg";
import CustomSelect from "../../../components/common/CustomSelect/CustomSelect";
import SearchBar from "../../../components/common/SearchBar/SearchBar";
import Table from "../../../components/common/Table/Table";
import { Typography } from "@mui/material";
import "./style.scss";
import { DeleteIcon } from "../../../assets/Images/svg";
import Button from "../../../components/common/Button/Button";
const DefectListingScreen = () => {
  const columns = [
    {
      name: "Defect",
      selector: (row: any) => row.defect,
      sortable: true,
    },
    {
      name: "Path ID",
      selector: (row: any) => row.pathId,
      sortable: true,
    },
    {
      name: "Job ID",
      selector: (row: any) => row.jobId,
      sortable: true,
    },
    {
      name: "Severity",
      selector: (row: any) => row.severity,
      sortable: true,
    },
    {
      name: "Path Length",
      selector: (row: any) => row.pathLength,
      sortable: true,
    },
    {
      name: "Scan Date",
      selector: (row: any) => row.scanDate,
      sortable: true,
    },
    {
      name: "Device Name",
      selector: (row: any) => row.deviceName,
      sortable: true,
    },
    {
      name: "Client",
      selector: (row: any) => row.client,
      sortable: true,
    },
    {
      name: "Region",
      selector: (row: any) => row.region,
      sortable: true,
    },
    {
      name: "Map View",
      selector: (row: any) => row.mapView,
      sortable: true,
    },
    {
      name: "Actions",
      selector: (row: any) => row.actions,
      sortable: true,
    },
  ];
  const data = [
    {
      defect: "Defect 1",
      pathId: "Path 1",
      jobId: "Job 1",
      severity: "Severe",
      pathLength: "Path Length 1",
      scanDate: "Scan Date 1",
      deviceName: "Device Name 1",
      client: "Client 1",
      region: "Region 1",
      mapView: (
        <Button variant="text" color="primary" size="small">
          View on Map
        </Button>
      ),
      actions: (
        <div className="actions-container">
          <DeleteIcon />
        </div>
      ),
    },
    {
      defect: "Defect 2",
      pathId: "Path 2",
      jobId: "Job 2",
      severity: "Moderate",
      pathLength: "Path Length 2",
      scanDate: "Scan Date 2",
      deviceName: "Device Name 2",
      client: "Client 2",
      region: "Region 2",
      mapView: (
        <Button variant="text" color="primary" size="small">
          View on Map
        </Button>
      ),
      actions: (
        <div className="actions-container">
          <DeleteIcon />
        </div>
      ),
    },
    {
      defect: "Defect 3",
      pathId: "Path 3",
      jobId: "Job 3",
      severity: "Mild",
      pathLength: "Path Length 3",
      scanDate: "Scan Date 3",
      deviceName: "Device Name 3",
      client: "Client 3",
      region: "Region 3",
      mapView: (
        <Button variant="text" color="primary" size="small">
          View on Map
        </Button>
      ),
      actions: (
        <div className="actions-container">
          <DeleteIcon />
        </div>
      ),
    },
    {
      defect: "Defect 4",
      pathId: "Path 4",
      jobId: "Job 4",
      severity: "Minor",
      pathLength: "Path Length 4",
      scanDate: "Scan Date 4",
      deviceName: "Device Name 4",
      client: "Client 4",
      region: "Region 4",
      mapView: (
        <Button variant="text" color="primary" size="small">
          View on Map
        </Button>
      ),
      actions: (
        <div className="actions-container">
          <DeleteIcon />
        </div>
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
    <div className="defect-listing-container">
      <div className="defect-listing-header">
        <ArrowBackIcon />
        <Typography variant="h5">Defect Listing</Typography>
      </div>
      <div className="defect-listing-body">
        <div className="defect-listing-table-container">
          <div className="filters-container">
            <SearchBar
              placeholder="Search"
              label="Search"
              variant="outlined"
              width="100%"
              rounded="medium"
              className="container-search-bar"
              startAdornment={<SearchIcon />}
            />
            <CustomSelect
              label="Severity"
              options={severityOptions}
              onChange={() => {}}
              defaultValue="age"
              name="severity"
              id="severity-select"
              fullWidth={true}
              className=""
              rounded="medium"
              variant="outlined"
              WrapperClassName=""
              placeholder="Select"
              size="medium"
            />
            <CustomSelect
              label="Severity"
              options={severityOptions}
              onChange={() => {}}
              defaultValue="age"
              name="severity"
              id="severity-select"
              fullWidth={true}
              className=""
              rounded="medium"
              variant="outlined"
              WrapperClassName=""
              placeholder="Select"
              size="medium"
            />
            <CustomSelect
              label="Severity"
              options={severityOptions}
              onChange={() => {}}
              defaultValue="age"
              name="severity"
              id="severity-select"
              fullWidth={true}
              className=""
              rounded="medium"
              variant="outlined"
              WrapperClassName=""
              placeholder="Select"
              size="medium"
            />
            <CustomSelect
              label="Severity"
              options={severityOptions}
              onChange={() => {}}
              defaultValue="age"
              name="severity"
              id="severity-select"
              fullWidth={true}
              className=""
              rounded="medium"
              variant="outlined"
              WrapperClassName=""
              placeholder="Select"
              size="medium"
            />
          </div>
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
            className="defect-listing-table-wrapper"
          />
        </div>
      </div>
    </div>
  );
};

export default DefectListingScreen;
