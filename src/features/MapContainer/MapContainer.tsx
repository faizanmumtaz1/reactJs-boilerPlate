import "./mapContainer.scss";
import {
  AddPathIcon,
  AltRouteIcon,
  ExtremelySvereIcon,
  ModerateIcon,
  MildIcon,
  ScanWifiIcon,
  SearchIcon,
  StraightLineIcon,
  TimerIcon,
  DefectIcon,
  FilterIcon,
  ArrowBackIcon,
} from "../../assets/Images/svg";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import CustomSelect from "../../components/common/CustomSelect/CustomSelect";
import SearchBar from "../../components/common/SearchBar/SearchBar";
import DefectsList from "./DefectsList/DefectsList";
import MapView from "./Map";
import Button from "../../components/common/Button/Button";
import { useState } from "react";
import useCheckMobileScreen from "../../hooks/useCheckMobileScreen";
import Drawer from '@mui/material/Drawer';
const MapContainer = () => {
  const [isDefectsListOpen, setIsDefectsListOpen] = useState(false);
  const isItMobile = useCheckMobileScreen();
  const [showFiltersOnMobile, setShowFiltersOnMobile] = useState(false);
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
  const handleDefectsListClose = () => {
    setIsDefectsListOpen(false);
  };
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
        <Typography variant="h4">Map</Typography>
      </div>
      <div>

        {!isDefectsListOpen && isItMobile && (
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <Typography variant="caption" className="text-xs path-name">
              View defects by simply tapping or  through the defects panel.
            </Typography>

            <Button
              variant="outlined"
              color="info"
              className="rounded-full-button"
              sx={{
              }}
              onClick={() => setIsDefectsListOpen(!isDefectsListOpen)}
              endIcon={<DefectIcon />}
            >
              View Defects
            </Button>
          </Box>

        )}
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

        {isItMobile && <IconButton onClick={() => { setShowFiltersOnMobile(true) }} sx={{
          backgroundColor: 'rgba(248, 249, 251, 1)',
          borderRadius: '8px',
          "&:hover": {
            backgroundColor: "rgba(248, 249, 251, 1)",
          },
        }}> <FilterIcon /> </IconButton>}

        {!isItMobile ?
          <>
            <CustomSelect
              label="Severity"
              options={severityOptions}
              onChange={() => { }}
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
              onChange={() => { }}
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
              onChange={() => { }}
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
              onChange={() => { }}
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

          </> : <>


            <Drawer
              anchor="right"
              sx={{
                "& .MuiDrawer-paper": {
                  width: '100%',

                },
              }}
              open={showFiltersOnMobile} onClose={() => { setShowFiltersOnMobile(false) }}
            >
              <Box sx={{
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'center',
                p: 2,
                gap: '5px'
              }}>
                <IconButton onClick={()=>{setShowFiltersOnMobile(false)}}>
                  <ArrowBackIcon />
                </IconButton>
                <Typography> Filters</Typography>
              </Box>
              <Divider />
              <Box sx={{
                padding: '24px'
              }}>
                <CustomSelect
                  label="Severity"
                  options={severityOptions}
                  onChange={() => { }}
                  defaultValue="age"
                  name="severity"
                  id="severity-select"
                  fullWidth={true}
                  className="mb-2"
                  rounded="medium"
                  variant="outlined"
                  WrapperClassName=""
                  placeholder="Select"
                  size="medium"
                  sx={{ mb: 3 }}
                />
                <CustomSelect
                  label="Severity"
                  options={severityOptions}
                  onChange={() => { }}
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
                  sx={{ mb: 3 }}
                />
                <CustomSelect
                  label="Severity"
                  options={severityOptions}
                  onChange={() => { }}
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
                  sx={{ mb: 3 }}
                />
                <CustomSelect
                  label="Severity"
                  options={severityOptions}
                  onChange={() => { }}
                  defaultValue="age"
                  name="severity"
                  id="severity-select"
                  fullWidth={true}
                  className=""
                  rounded="medium"
                  variant="outlined"
                  WrapperClassName="month-select-wrapper"
                  placeholder="Select"
                  size="medium"
                  sx={{ mb: 3 }}
                />
              </Box>

              <Box sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                width: '100%',
                borderRadius: '24px 24px 0 0',
                padding: '24px 24px 32px 24px',
                boxShadow: '0px -5px 13px 0px rgb(184 180 180 / 49%)'
              }}>
                <Button variant="outlined" fullWidth={true} sx={{ borderRadius: '32px' }}>
                  Apply Filters
                </Button>
              </Box>

            </Drawer>


          </>}

      </div>
      <div className="map-container">
        {!isItMobile && <div className="buttons-wrapper">
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
        </div>}

        {!isItMobile &&
          <>
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
                View Defects
              </Button>
            )}
          </>
        }


        {isDefectsListOpen && (
          <DefectsList handleDefectsListClose={handleDefectsListClose} />
        )}
        <MapView />
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
      <Typography variant="caption" className="text-xxxs path-name">
        {name}
      </Typography>
      <Typography variant="caption" className="text-xxs-500 path-value">
        {value}
      </Typography>
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
