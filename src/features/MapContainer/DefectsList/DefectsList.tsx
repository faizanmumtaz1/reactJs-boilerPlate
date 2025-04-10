import {
  CrossSmIcon,
  ExplandArrowIcon,
  SearchIcon,
} from "../../../assets/Images/svg";
import SearchBar from "../../../components/common/SearchBar/SearchBar";
import "./style.scss";
import Button from "../../../components/common/Button/Button";
import { ROUTE_DEFECT_LISTING } from "../../../utils/constant";
import { Typography } from "@mui/material";
import DefectItem from "./DefectItem";
import { useNavigate } from "react-router-dom";
const DefectsList = ({
  handleDefectsListClose,
}: {
  handleDefectsListClose: () => void;
}) => {
  const issues = [
    {
      type: "Pothole",
      id: "#82901",
      severity: "Severe",
      severityColor: "error",
      dateTime: "1/12/34 00:88:00",
      detectedBy: "Arres Eye",
    },
    {
      type: "Transverse",
      id: "#28902",
      severity: "Moderate",
      severityColor: "success",
      dateTime: "1/12/34 00:88:00",
      detectedBy: "Arres Eye",
    },
    {
      type: "Crack",
      id: "#829012",
      severity: "Mild",
      severityColor: "success",
      dateTime: "1/12/34 00:88:00",
      detectedBy: "Arres Eye",
    },
    {
      type: "Chip",
      id: "#219034",
      severity: "Minor",
      severityColor: "error",
      dateTime: "1/12/34 00:88:00",
      detectedBy: "Arres Eye",
    },
    {
      type: "Rutting",
      id: "#329021",
      severity: "Severe",
      severityColor: "success",
      dateTime: "1/12/34 00:88:00",
      detectedBy: "Arres Eye",
    },
  ];
  const navigate = useNavigate();

  return (
    <div className="defects-list-wrapper">
      <div className="defects-list-header">
        <div className="header-top">
          <div className="header-top-title-wrapper">
            <div className="defects-list-header-left">
              <Button
                className="icon-button"
                size="small"
                onClick={handleDefectsListClose}
                variant="outlined"
              >
                <CrossSmIcon />
              </Button>
              <Typography variant="h5">Defects</Typography>
            </div>
            <Button
              className="icon-button"
              size="small"
              variant="outlined"
              onClick={() => {
                navigate(ROUTE_DEFECT_LISTING);
              }}
            >
              <ExplandArrowIcon />
            </Button>
          </div>
          <Typography
            variant="subtitle1"
            className="subtitle1"
            sx={{ color: "var(--text-secondary) !important" }}
          >
            View all of the defects here
          </Typography>
        </div>
        <SearchBar
          placeholder="Search"
          label="Search"
          variant="outlined"
          width="100%"
          rounded="medium"
          className="container-search-bar"
          startAdornment={<SearchIcon />}
        />
      </div>
      <div className="defects-list-body">
        {issues.map((issue) => (
          <DefectItem key={issue.id} issue={issue} />
        ))}
      </div>
    </div>
  );
};

export default DefectsList;
