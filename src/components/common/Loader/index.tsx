import { Box, CircularProgress } from "@mui/material";

interface LoaderProps {
  size?: number;
}

const Loader = ({ size = 40 }: LoaderProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        minHeight: "200px",
      }}
    >
      <CircularProgress size={size} />
    </Box>
  );
};

export default Loader;
