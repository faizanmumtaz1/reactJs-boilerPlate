import { Box, Chip, Stack, Typography } from "@mui/material";

export default function SingleBox({
  details = [],
  title = "",
  chips = [],
}: {
  details: { heading: string; value: string }[];
  title: string;
  chips: string[];
}) {
  const getColor = (chip: string) => {
    if (chip === "Active") return "success";
    if (chip === "Inactive") return "error";
    return "default";
  };
  const getVariant = (chip: string) => {
    if (chip.startsWith("#")) return "filled";
    return "outlined";
  };
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        p: 2,
        borderRadius: 5,
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: "18px",
            lineHeight: "150%",
            letterSpacing: "0.15px",
          }}
        >
          {title}
        </Typography>
        <Stack direction="row" spacing={1}>
          {chips.map((chip, index) => (
            <Chip
              size="small"
              color={getColor(chip)}
              key={index}
              label={chip}
              variant={getVariant(chip)}
            />
          ))}
        </Stack>
      </Stack>
      {details.map((detail, index) => (
        <Stack gap={1} mt="12px" key={index} direction="row">
          <Typography sx={{ minWidth: 145 }} variant="body2">
            {detail.heading}
          </Typography>
          <Typography
            sx={{
              fontSize: "14px !important",
            }}
            variant="subtitle2"
          >
            {detail.value}
          </Typography>
        </Stack>
      ))}
    </Box>
  );
}
