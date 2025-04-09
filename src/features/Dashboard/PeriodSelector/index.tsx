import { Typography } from "@mui/material";

import { Box } from "@mui/material";

const PeriodSelector = ({ label, value }: { label: string; value: string }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      border: "1px solid #757575",
      borderRadius: "20px",
      px: 2,
      py: 1,
    }}
  >
    <Typography variant="caption" sx={{ mr: 1, color: "#757575" }}>
      {label}
    </Typography>
    <Typography variant="body2" sx={{ mr: 1 }}>
      {value}
    </Typography>
    <Typography>▼</Typography>
  </Box>
);
export default PeriodSelector;
