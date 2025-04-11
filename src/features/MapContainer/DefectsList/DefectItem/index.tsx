import { Typography } from "@mui/material";
import DashboardChip from "../../../../components/common/CustomChip/CustomChip";
import { ScannerDarkIcon, TimerDarkIcon } from "../../../../assets/Images/svg";
const DefectItem = ({
  issue,
  onClick,
}: {
  issue?: any;
  onClick?: () => void;
}) => {
  return (
    <div className="defect-item" onClick={onClick}>
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

export default DefectItem;
