import { Box } from "@mui/material";

const StatusBadge = ({ status }: { status: string }) => {
  const getColor = () => {
    switch (status) {
      case "Submitted":
        return "var(--warning-main)";
      case "Completed":
        return "var(--success-main)";
      case "QA":
        return "var(--info-main)";
      default:
        return "#757575";
    }
  };

  return (
    <Box
      sx={{
        display: "inline-block",
        px: "10px",
        py: "4px",
        borderRadius: "100px",
        border: `1px solid ${getColor()}`,
        color: getColor(),
        fontSize: "13px",
        fontWeight: "450",
        lineHeight: "18px",
        letterSpacing: "0.16px",
      }}
    >
      {status}
    </Box>
  );
};

export default StatusBadge;
