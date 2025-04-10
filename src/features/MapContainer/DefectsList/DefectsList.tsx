import {
  CrossSmIcon,
  ExplandArrowIcon,
  ScannerDarkIcon,
  SearchIcon,
  TimerDarkIcon,
} from "../../../assets/Images/svg";
import SearchBar from "../../../components/common/SearchBar/SearchBar";
import "./style.scss";
import DashboardChip from "../../../components/common/CustomChip/CustomChip";
import Button from "../../../components/common/Button/Button";
import { useNavigate } from "react-router-dom";
import { ROUTE_DEFECT_LISTING } from "../../../utils/constant";
import { Typography } from "@mui/material";
const DefectsList = ({
  handleDefectsListClose,
  onClick,
}: {
  handleDefectsListClose: () => void;
  onClick: () => void;
}) => {
  const navigate = useNavigate();
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
      id: "#82901",
      severity: "Mild",
      severityColor: "success",
      dateTime: "1/12/34 00:88:00",
      detectedBy: "Arres Eye",
    },
    {
      type: "Chip",
      id: "#21903",
      severity: "Minor",
      severityColor: "error",
      dateTime: "1/12/34 00:88:00",
      detectedBy: "Arres Eye",
    },
    {
      type: "Rutting",
      id: "#32901",
      severity: "Severe",
      severityColor: "success",
      dateTime: "1/12/34 00:88:00",
      detectedBy: "Arres Eye",
    },
  ];

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
          <DefectItem key={issue.id} issue={issue} onClick={onClick} />
        ))}
      </div>
    </div>
  );
};

export default DefectsList;
const DefectItem = ({ issue, onClick }: { issue: any, onClick: () => void }) => {
  return (
    <div
      className="defect-item"
      onClick={onClick}
    >
      <div className="defect-item-top">
        <Typography classes="subtitle3" className="subtitle3">
          {issue.type}
        </Typography>
        <div className="chip-wrapper">
          <DashboardChip label={issue.id} size="small" rounded={true} />
          <DashboardChip
            label={issue.severity}
            size="small"
            rounded={true}
            color={issue.severityColor}
          />
        </div>
      </div>
      <div className="defect-item-bottom">
        <div className="footer-item">
          <TimerDarkIcon />
          <Typography variant="subtitle2" className="subtitle2">
            {issue.dateTime}
          </Typography>
        </div>
        <div className="footer-item">
          <ScannerDarkIcon />
          <Typography variant="subtitle2" className="subtitle2">
            {issue.detectedBy}
          </Typography>
        </div>
      </div>
    </div>
  );
};
