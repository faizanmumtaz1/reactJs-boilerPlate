import { Paper, Typography } from "@mui/material";

const MetricCard = ({
  title,
  value,
  change,
}: {
  title: string;
  value: string | number;
  change: string;
}) => {
  const isPositive = change.startsWith("+");

  return (
    <Paper
      sx={{
        p: 3,
        borderRadius: 2,
        height: "100%",
        backgroundColor: "#F8F9FA",
      }}
    >
      <Typography variant="subtitle1" sx={{ mb: 2, color: "#757575" }}>
        {title}
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
        {value}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: isPositive ? "#4CAF50" : "#F44336",
          fontWeight: "medium",
        }}
      >
        {change}
      </Typography>
    </Paper>
  );
};

export default MetricCard;
