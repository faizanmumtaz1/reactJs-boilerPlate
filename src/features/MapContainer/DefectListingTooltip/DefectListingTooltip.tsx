import defectimage from "../../../assets/images/defect.png";
import "./style.scss";
import CustomChip from "../../../components/common/CustomChip/CustomChip";
import {
  ManGrayIcon,
  ScanWifiIcon,
  LocationIcon,
  GlobeWorldIcon,
} from "../../../assets/Images/svg";
import { Typography } from "@mui/material";
const calculationList = [
  {
    label: "WIDTH",
    value: "10",
  },
  {
    label: "LENGTH",
    value: "10",
  },
  {
    label: "DEPTH",
    value: "10",
  },
  {
    label: "REGION",
    value: "12",
  },
  {
    label: "VOLUME",
    value: "10",
  },
];
const defectList = [
  {
    icon: <ScanWifiIcon />,
    name: "Path ID",
    value: "10",
  },
  {
    icon: <GlobeWorldIcon />,
    name: "Region",
    value: "Manchester",
  },
  {
    icon: <ManGrayIcon />,
    name: "Client",
    value: "Arres",
  },
  {
    icon: <LocationIcon />,
    name: "Lat",
    value: "53.483959",
  },
  {
    icon: <LocationIcon />,
    name: "Long",
    value: "-2.244644",
  },
];

const DefectListingTooltip = () => {
  return (
    <div
      className="defect-listing-tooltip-wrapper"
      style={{ zIndex: 1000, height: "100%", minHeight: "550px" }}
    >
      <div className="defect-listing-tooltip-header">
        <div className="image-wrapper">
          <img src={defectimage} alt="defect" />
        </div>
        <div className="image-wrapper">
          <img src={defectimage} alt="defect" />
        </div>
      </div>
      <div className="defect-listing-tooltip-body">
        <div className="defect-details">
          <Typography variant="subtitle2" className="subtitle2">
            Arres Eye • 4 Feb 2022 • 8:00 am
          </Typography>
          <div className="defect-top">
            <Typography variant="h5" className="h5">
              Transverse
            </Typography>
            <div className="chip-wrapper">
              <CustomChip label="#28902" size="small" rounded={true} />
              <CustomChip
                label="#28902"
                size="small"
                rounded={true}
                color="success"
              />
            </div>
          </div>
          <ul className="defect-list">
            {defectList.map((item) => (
              <DefectListItem key={item.name} {...item} />
            ))}
          </ul>
        </div>
        <div className="defect-calculation-wrapper">
          <ul className="calculation-list">
            {calculationList.map((item) => (
              <CalculationListItem key={item.label} {...item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DefectListingTooltip;
const DefectListItem = ({
  icon,
  name,
  value,
}: {
  icon: React.ReactNode;
  name: string;
  value: string;
}) => {
  return (
    <li className="defect-list-item">
      <div className="defect-name-wrapper">
        {icon}
        <Typography variant="body1" className="body1" component="span">
          {name}
        </Typography>
      </div>
      <Typography variant="subtitle1" className="subtitle1" component="span">
        {value}
      </Typography>
    </li>
  );
};
const CalculationListItem = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => {
  return (
    <li className="calculation-list-item">
      <Typography
        variant="body1"
        className="overline"
        component="span"
        sx={{ color: "var(--text-secondary) !important" }}
      >
        {label}
      </Typography>
      <Typography className="subtitle3" component="span">
        {value}
      </Typography>
    </li>
  );
};
