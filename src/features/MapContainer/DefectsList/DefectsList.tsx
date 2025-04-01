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

const DefectsList = () => {
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
          <div className="defects-list-header-left">
            <CrossSmIcon />
            <h5>Defects</h5>
          </div>
          <ExplandArrowIcon />
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
const DefectItem = ({ issue }: { issue: any }) => {
  return (
    <div className="defect-item">
      <div className="defect-item-top">
        <span className="subtitle3">{issue.type}</span>
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
          <span className="subtitle2">{issue.dateTime}</span>
        </div>
        <div className="footer-item">
          <ScannerDarkIcon />
          <span className="subtitle2">{issue.detectedBy}</span>
        </div>
      </div>
    </div>
  );
};
