import "./view-map.scss";
import {
  ExtremelySvereIcon,
  ModerateIcon,
  MildIcon,
  SearchIcon,
  DefectIcon,
} from "../../assets/Images/svg";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import CustomSelect from "../../components/common/CustomSelect/CustomSelect";
import SearchBar from "../../components/common/SearchBar/SearchBar";
import DefectsList from "../MapContainer/DefectsList/DefectsList";
import MapView from "../MapContainer/Map";
import Button from "../../components/common/Button/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ViewMap = () => {
  const [isDefectsListOpen, setIsDefectsListOpen] = useState(false);
  // const pathDetails = [
  //   {
  //     icon: <AltRouteIcon />,
  //     name: "Path",
  //     value: "8877",
  //   },
  //   {
  //     icon: <StraightLineIcon />,
  //     name: "Length",
  //     value: "8877",
  //   },
  //   {
  //     icon: <ScanWifiIcon />,
  //     name: "Defects",
  //     value: "8877",
  //   },
  //   {
  //     icon: <AddPathIcon />,
  //     name: "ROADS COVERED",
  //     value: "8877",
  //   },
  //   {
  //     icon: <TimerIcon />,
  //     name: "DURATION",
  //     value: "8877",
  //   },
  // ];
  const handleDefectsListClose = () => {
    setIsDefectsListOpen(false);
  };
  // Severity data

  const severityOptions = [
    { label: "1 - 250", value: "1-250" },
    { label: "3 - 856 (20%)", value: "3-856" },
    { label: "5 - 3124 (71%)", value: "5-3124" },
    { label: "N/A...", value: "N/A..." },
  ];

  const navigate = useNavigate();

  return (
    <Box className="view-map-container">
      <div className="map-wrapper">
        <Stack
          direction="row"
          gap="16px"
          bgcolor="#fff"
          width="100%"
          alignItems="center"
          sx={{
            flex: 1,
            minHeight: "75px",
          }}
        >
          <IconButton
            onClick={() => navigate(-1)}
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
          <Typography variant="h5">View Map</Typography>
        </Stack>
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
            fullWidth={false}
            className=""
            rounded="medium"
            variant="outlined"
            WrapperClassName="month-select-wrapper"
            placeholder="Select"
            size="medium"
          />
        </div>
        <div className="map-container">
          <div className="buttons-wrapper">
            <Button
              variant="outlined"
              color="info"
              className="rounded-full-button"
            >
              All
            </Button>
            <Button
              variant="outlined"
              color="info"
              className="rounded-full-button"
              startIcon={<ExtremelySvereIcon />}
            >
              Extremely Svere
            </Button>
            <Button
              variant="outlined"
              color="info"
              className="rounded-full-button"
              startIcon={<ModerateIcon />}
            >
              Moderate
            </Button>
            <Button
              variant="outlined"
              color="info"
              className="rounded-full-button"
              startIcon={<MildIcon />}
            >
              Mild
            </Button>
          </div>
          {!isDefectsListOpen && (
            <Button
              variant="outlined"
              color="info"
              className="rounded-full-button"
              sx={{
                position: "absolute",
                top: "16px",
                left: "48px",
                zIndex: 1000,
              }}
              onClick={() => setIsDefectsListOpen(!isDefectsListOpen)}
              endIcon={<DefectIcon />}
            >
              View Defect
            </Button>
          )}

          {isDefectsListOpen && (
            <DefectsList handleDefectsListClose={handleDefectsListClose} />
          )}
          <MapView />
        </div>
        {/* <div className="map-controls-container">
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
      </div> */}
      </div>
    </Box>
  );
};

export default ViewMap;
