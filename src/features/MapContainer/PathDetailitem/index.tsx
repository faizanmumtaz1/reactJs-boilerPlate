import { Typography } from "@mui/material";

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
      <Typography
        sx={{
          textAlign: "center",
        }}
        variant="caption"
        className="text-xxs-500 path-value"
      >
        {value}
      </Typography>
    </div>
  );
};

export default PathDetailsItem;
