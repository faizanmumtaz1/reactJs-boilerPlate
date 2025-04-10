import { Box } from "@mui/material";

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

export default SvarityItem;
