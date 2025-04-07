import { Box, Typography } from "@mui/material";
import { IconButton, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { ROUTE_ROLES_AND_PERMISSIONS_LISTING } from "../../utils/constant";
import InputField from "../../components/common/InputField/InputField";
import { useForm } from "react-hook-form";
import Button from "../../components/common/Button/Button";

const clientData = [
  {
    id: 1,
    label: "Username",
    name: "username",
    type: "text",
  },
  {
    id: 2,
    label: "Email",
    name: "email",
    type: "email",
  },
  {
    id: 3,
    label: "Phone Number",
    name: "phoneNumber",
    type: "tel",
  },
  {
    id: 4,
    label: "Role",
    name: "role",
    type: "text",
  },
];

const AddNewUser = () => {
  const navigate = useNavigate();
  const { control } = useForm();
  return (
    <Box bgcolor="#F8F9FB" width="100%" height="calc(100vh - 64px)">
      <Stack
        direction="row"
        gap="16px"
        bgcolor="#fff"
        p="16px 24px"
        width="100%"
        alignItems="center"
      >
        <IconButton
          onClick={() => navigate(ROUTE_ROLES_AND_PERMISSIONS_LISTING)}
          sx={{
            width: "32px",
            height: "32px",
            ":hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <ArrowBackIcon sx={{ color: "#000000" }} />
        </IconButton>
        <Typography variant="h5">Add New User</Typography>
      </Stack>

      <Box maxWidth="828px" width="100%" margin="0 auto" mt="36px">
        <Stack direction="row" flexWrap="wrap" gap="12px" mt="16px">
          {clientData.map((item) => (
            <>
              <InputField
                key={item.id}
                name={item.name}
                control={control}
                label={item.label}
                type={item.type}
                sx={{
                  width: "100%",
                  maxWidth: "calc(50% - 6px)",
                  background: "white",
                }}
              />
            </>
          ))}
        </Stack>
      </Box>

      <Stack
        direction="row"
        justifyContent="end"
        mt="24px"
        gap="12px"
        bgcolor="#fff"
        p="16px 24px"
        width="calc(100% - 88px)"
        position="fixed"
        bottom="0"
        // left="0"
      >
        <Button
          variant="outlined"
          color="secondary"
          className="rounded-full-button"
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          className="rounded-full-button"
        >
          Invite User
        </Button>
      </Stack>
    </Box>
  );
};

export default AddNewUser;
