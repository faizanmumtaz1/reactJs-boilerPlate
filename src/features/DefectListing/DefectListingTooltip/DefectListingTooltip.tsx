import TooltipCustom from "../../../components/common/Tooltip/TooltipCustom";
import defectimage from "../../../assets/images/defect.png";
import "./style.scss";
import CustomChip from "../../../components/common/CustomChip/CustomChip";
import {
  ManGrayIcon,
  ScanWifiIcon,
  LocationIcon,
  GlobeWorldIcon,
} from "../../../assets/Images/svg";
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
    <div className="defect-listing-tooltip-wrapper">
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
          <span className="subtitle2">Arres Eye • 4 Feb 2022 • 8:00 am</span>
          <div className="defect-top">
            <h5>Transverse</h5>
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
        <span className="body1">{name}</span>
      </div>
      <span className="subtitle1">{value}</span>
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
      <span className="body1">{label}</span>
      <span className="subtitle1">{value}</span>
    </li>
  );
};
