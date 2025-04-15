import { Box, Typography } from "@mui/material";
import { IconButton, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { ROUTE_ROLES_AND_PERMISSIONS_LISTING } from "../../utils/constant";
import InputField from "../../components/common/InputField/InputField";
import { Controller, useForm } from "react-hook-form";
import Button from "../../components/common/Button/Button";
import CustomSelect from "../../components/common/CustomSelect/CustomSelect";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddUserFormValues } from "../../utils/types";
import { addNewUserSchema } from "../../schemas/addNewUserSchema";


const AddNewUser = () => {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<AddUserFormValues>({
    resolver: yupResolver(addNewUserSchema),
    mode: "onChange",
    defaultValues: {
      userName: "",
      email: "",
      phoneNumber: "",
      roleDescription: ""
    },
  });

  const handleAddUser = (data: AddUserFormValues) => {
    console.log('Form Values:', {
      userName: data.userName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      roleDescription: data.roleDescription
    });
  }
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
      <form onSubmit={handleSubmit(handleAddUser)}>
        <Box maxWidth="828px" width="100%" margin="0 auto" mt="36px">
          <Stack direction="row" flexWrap="wrap" gap="12px" mt="16px">
            <InputField
              control={control}
              name="userName"
              label="Email"
              type="text"
              sx={{ mb: 2 }}
            />
            <InputField
              control={control}
              name="email"
              label="Email"
              type="text"
              sx={{ mb: 2 }}
            />
            <InputField
              control={control}
              name="phoneNumber"
              label="Phone Number"
              type="text"
              sx={{ mb: 2 }}
            />

            <Controller
              name="roleDescription"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <CustomSelect
                  label="Role"
                  options={[
                    { label: "Admin", value: "admin" },
                    { label: "User", value: "user" },
                    { label: "Manager", value: "manager" },
                    { label: "Supervisor", value: "supervisor" }
                  ]}
                  onChange={field.onChange}
                  value={field.value}
                  error={!!error}
                  helperText={error?.message}
                  sx={{
                    width: "100%",
                    maxWidth: "calc(50% - 6px)",
                    background: "white",
                  }}
                />
              )}
            />

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
      </form>
    </Box>
  );
};

export default AddNewUser;
