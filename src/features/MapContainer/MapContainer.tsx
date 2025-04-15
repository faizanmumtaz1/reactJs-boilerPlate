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
import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import CustomSelect from "../../components/common/CustomSelect/CustomSelect";
import SearchBar from "../../components/common/SearchBar/SearchBar";
import DefectsList from "./DefectsList/DefectsList";
import MapView from "./Map";
import Button from "../../components/common/Button/Button";
import { useEffect, useState } from "react";
import useCheckMobileScreen from "../../hooks/useCheckMobileScreen";
import Drawer from "@mui/material/Drawer";
import SvarityItem from "./SaverityItem";
import PathDetailsItem from "./PathDetailitem";
import { useForm } from "react-hook-form";
const MapContainer = () => {
  const { control } = useForm();
  const [isDefectsListOpen, setIsDefectsListOpen] = useState(false);
  const isItMobile = useCheckMobileScreen();
  const [showFiltersOnMobile, setShowFiltersOnMobile] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    if (!isItMobile) {
      setShowDetails(true);
    }
  }, [isItMobile]);

  const pathDetails = [
    {
      icon: <AltRouteIcon />,
      name: "Path",
      value: "8877",
    },
    {
      icon: <StraightLineIcon />,
      name: "Length",
      value: "20.54 km",
    },
    {
      icon: <ScanWifiIcon />,
      name: "Defects",
      value: "4388",
    },
    {
      icon: <AddPathIcon />,
      name: "ROADS COVERED",
      value: "45%",
    },
    {
      icon: <TimerIcon />,
      name: "DURATION",
      value: "49 Min 26 Sec",
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
    { label: "Severity (1-Hight, 5- Low)", value: "1-250" },
    { label: "Severity (1-Hight, 5- Low)", value: "3-856" },
    { label: "Severity (1-Hight, 5- Low)", value: "5-3124" },
    { label: "Severity (1-Hight, 5- Low)", value: "N/A..." },
  ];
  return (
    <div className="map-wrapper">
      {!isItMobile && (
        <div className="title-container">
          <Typography variant="h4">Map</Typography>
        </div>
      )}

      {!isDefectsListOpen && isItMobile && (
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap={1}
          sx={{
            width: "100%",
            padding: " 0px 24px 16px 24px",
            marginTop: "16px",
          }}
        >
          <Typography sx={{ fontSize: 14 }} color="text.secondary">
            View defects by simply tapping or through the defects panel.
          </Typography>

          <Button
            variant="outlined"
            color="secondary"
            className="rounded-full-button"
            sx={{
              minWidth: 146,
              padding: "6px 16px",
              marginLeft: "auto",
              maxHeight: 45,
            }}
            onClick={() => setIsDefectsListOpen(!isDefectsListOpen)}
            endIcon={<DefectIcon />}
            size="small"
          >
            View Defects
          </Button>
        </Stack>
      )}

      <div className="filters-container">
        <SearchBar
          placeholder="Search for area rods etc"
          label="Search"
          variant="outlined"
          width="100%"
          rounded="medium"
          className="container-search-bar"
          startAdornment={<SearchIcon />}
        />

        {isItMobile && (
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
        )}

        {!isItMobile ? (
          <>
            <CustomSelect
              label="Client Selection"
              options={severityOptions}
              control={control}
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
              label="Region"
              options={severityOptions}
              control={control}
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
              label="Defect Type"
              options={severityOptions}
              control={control}
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
              label="Device"
              options={severityOptions}
              control={control}
              name="device"
              className=""
              rounded="medium"
              variant="outlined"
              placeholder="Select"
              size="medium"
              fullWidth={true}
            />
            <CustomSelect
              label="Showing"
              options={severityOptions}
              control={control}
              name="showing"
              id="showing"
              fullWidth={true}
              className=""
              rounded="medium"
              variant="outlined"
              placeholder="Select"
              size="medium"
            />
          </>
        ) : (
          <>
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
                  label="Severity"
                  options={severityOptions}
                  control={control}
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
                  control={control}
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
                  control={control}
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
                  control={control}
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
          </>
        )}
      </div>
      <div className="map-container">
        {!isItMobile && (
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
              Extremely severe
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
        )}

        {!isItMobile && (
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
        )}
        {!isItMobile && (
          <>
            {!isDefectsListOpen && (
              <Button
                variant="outlined"
                color="info"
                className="rounded-full-button"
                sx={{
                  position: "absolute",
                  bottom: "16px",
                  left: "48px",
                  zIndex: 1000,
                }}
              >
                View On Street Map
              </Button>
            )}
          </>
        )}

        {isDefectsListOpen && (
          <DefectsList
            handleDefectsListClose={handleDefectsListClose}
            onClick={() => setIsPopupOpen(true)}
          />
        )}
        <MapView
          style={{
            borderRadius: isItMobile ? "0px" : "24px",
          }}
          openPopup={isPopupOpen}
          setOpenPopup={setIsPopupOpen}
        />
      </div>
      <div className="map-controls-container">
        <div
          className="toggle-line"
          onClick={() => setShowDetails((prev) => !prev)}
        />
        <div className="path-details-container">
          <ul className="path-details-list">
            {pathDetails.map((item) => (
              <PathDetailsItem key={item.name} {...item} />
            ))}
          </ul>
        </div>

        {showDetails && (
          <div className="svarity-container">
            <div className="svarity-item-wrapper">
              <CustomSelect
                options={severityOptions}
                control={control}
                name="status"
                id="status-select"
                rounded="none"
                variant="standard"
                size="small"
                fullWidth={false}
                className="svarity-select"
                WrapperClassName="svarity-select-wrapper svarity-select-wrapper-top"
                sx={{
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                }}
              />
              <SvarityItem data={severityData} />
            </div>
            <div className="svarity-item-wrapper">
              <CustomSelect
                options={severityOptions}
                control={control}
                name="status"
                id="status-select"
                rounded="none"
                variant="standard"
                size="small"
                fullWidth={false}
                className="svarity-select"
                WrapperClassName="svarity-select-wrapper"
                sx={{
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                }}
              />
              <SvarityItem data={classificationData} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MapContainer;
