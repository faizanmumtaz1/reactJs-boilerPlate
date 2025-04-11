import { Box, Paper, Typography } from "@mui/material";

const MetricCard = ({
  title,
  value,
  change,
}: {
  title: string;
  value: string | number;
  change: string;
}) => {
  return (
    <Paper
      sx={{
        p: { xs: 2, md: 3 },
        borderRadius: 4,
        height: "100%",
        backgroundColor: "var(--primary-states-selected)",
        border: "none",
        boxShadow: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: { xs: 1, md: 2 },
        maxHeight: "155px",
      }}
    >
      <Typography className="initialsLg">{title}</Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "start",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontSize: { xs: "24px !important", md: "34px" } }}
        >
          {value}
        </Typography>
        <Typography
          className={`text-xs`}
          sx={{
            color: "var(--secondary-500) !important",
          }}
        >
          {change}
        </Typography>
      </Box>
    </Paper>
  );
};

export default MetricCard;
