import "./mapContainer.scss";
import {
  AddPathIcon,
  AltRouteIcon,
  ScanWifiIcon,
  SearchIcon,
  StraightLineIcon,
  TimerIcon,
} from "../../assets/Images/svg";
import { Box } from "@mui/material";
import CustomSelect from "../../components/common/CustomSelect/CustomSelect";
import SearchBar from "../../components/common/SearchBar/SearchBar";
import DefectsList from "./DefectsList/DefectsList";
const MapContainer = () => {
  const pathDetails = [
    {
      icon: <AltRouteIcon />,
      name: "Path",
      value: "8877",
    },
    {
      icon: <StraightLineIcon />,
      name: "Length",
      value: "8877",
    },
    {
      icon: <ScanWifiIcon />,
      name: "Defects",
      value: "8877",
    },
    {
      icon: <AddPathIcon />,
      name: "ROADS COVERED",
      value: "8877",
    },
    {
      icon: <TimerIcon />,
      name: "DURATION",
      value: "8877",
    },
  ];
  // Severity data
  const severityData = [
    { label: "1 - 250", percentage: 5, color: "severity-high" },
    { label: "3 - 856 (20%)", percentage: 20, color: "severity-medium" },
    { label: "5 - 3124 (71%)", percentage: 71, color: "severity-low" },
    { label: "N/A...", percentage: 4, color: "severity-na" },
  ];

  // Classification data
  const classificationData = [
    { label: "PO -1445 (33%)", percentage: 33, color: "classification-po" },
    { label: "LO -733 (17%)", percentage: 17, color: "classification-lo" },
    { label: "TR - 1124 (26%)", percentage: 26, color: "classification-tr" },
    { label: "WH - 706 (16%)", percentage: 16, color: "classification-wh" },
    { label: "AL - ...", percentage: 8, color: "classification-al" },
  ];
  const severityOptions = [
    { label: "1 - 250", value: "1-250" },
    { label: "3 - 856 (20%)", value: "3-856" },
    { label: "5 - 3124 (71%)", value: "5-3124" },
    { label: "N/A...", value: "N/A..." },
  ];
  return (
    <div className="map-wrapper">
      <div className="title-container">
        <h4>Map</h4>
      </div>
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
      <div className="map-container">
        <DefectsList />
      </div>
      <div className="map-controls-container">
        <div className="path-details-container">
          <ul className="path-details-list">
            {pathDetails.map((item) => (
              <PathDetailsItem key={item.name} {...item} />
            ))}
          </ul>
        </div>
        <div className="svarity-container">
          <SvarityItem data={severityData} />
          <SvarityItem data={classificationData} />
        </div>
      </div>
    </div>
  );
};

export default MapContainer;
const PathDetailsItem = ({
  icon,
  name,
  value,
}: {
  icon: React.ReactNode;
  name: string;
  value: string;
}) => {
  return (
    <div className="path-details-list-item">
      <div className="path-details-list-item-icon">{icon}</div>
      <span className="text-xxxs path-name">{name}</span>
      <span className="text-xxs-500 path-value">{value}</span>
    </div>
  );
};
const SvarityItem = ({
  data,
}: {
  data: { label: string; percentage: number; color: string }[];
}) => {
  return (
    <div className="svarity-item">
      <Box className="progress-bar">
        {data.map((item, index) => (
          <Box
            key={`severity-${index}`}
            className={`progress-segment ${item.color}`}
            sx={{ width: `${item.percentage}%` }}
          >
            <span className="caption segment-label">{item.label}</span>
          </Box>
        ))}
      </Box>
    </div>
  );
};
