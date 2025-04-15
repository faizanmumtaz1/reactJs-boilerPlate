import { Box, Typography } from "@mui/material";
import { IconButton, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { ROUTE_ROLES_AND_PERMISSIONS_LISTING } from "../../utils/constant";
import InputField from "../../components/common/InputField/InputField";
import { useForm } from "react-hook-form";
import Button from "../../components/common/Button/Button";
import CustomSelect from "../../components/common/CustomSelect/CustomSelect";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddNewUserInput } from "../../schemas/addNewUserSchema";
import { addNewUserSchema } from "../../schemas/addNewUserSchema";
import { useMutateAddUser } from "../../react-query-hooks/useMutateAddUser";
import toastHelper from "../../utils/toastifyHelper";
const AddNewUser = () => {
  const navigate = useNavigate();
  const { mutateAsync } = useMutateAddUser();
  const { control, handleSubmit } = useForm<AddNewUserInput>({
    resolver: yupResolver(addNewUserSchema),
    mode: "onChange",
    defaultValues: {
      forename: "",
      surname: "",
      email: "",
      organisation_name: "",
      is_active: false,
      password: "",
      role_name: undefined,
    },
  });

  const handleAddUser = async (data: AddNewUserInput) => {
    const userData = {
      ...data,
      email_verified: "2025-04-15T10:24:59.151Z",
    };
    console.log("userData", userData);

    try {
      await mutateAsync(userData);
      navigate(ROUTE_ROLES_AND_PERMISSIONS_LISTING);
      toastHelper.success("User added successfully");
    } catch (error) {
      toastHelper.error("User addition failed");
    }
  };
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
              name="forename"
              label="Forename"
              type="text"
              sx={{ mb: 2 }}
            />
            <InputField
              control={control}
              name="surname"
              label="Surname"
              type="text"
              sx={{ mb: 2 }}
            />
            <InputField
              control={control}
              name="email"
              label="Email"
              type="email"
              sx={{ mb: 2 }}
            />
            <CustomSelect
              control={control}
              name="is_active"
              variant="outlined"
              rounded="medium"
              size="large"
              label="Is Active"
              options={[
                { label: "Active", value: "true" },
                { label: "Inactive", value: "false" },
              ]}
              sx={{
                width: "100%",
              }}
            />
            <InputField
              control={control}
              name="password"
              label="Password"
              type="password"
              sx={{ mb: 2 }}
            />
            <InputField
              control={control}
              name="organisation_name"
              label="Organisation Name"
              type="text"
              sx={{ mb: 2 }}
            />
            <CustomSelect
              control={control}
              name="role_name"
              variant="outlined"
              rounded="medium"
              size="large"
              label="Role"
              options={[
                { label: "Admin", value: "admin" },
                { label: "User", value: "user" },
                { label: "Manager", value: "manager" },
                { label: "Supervisor", value: "supervisor" },
              ]}
              sx={{
                width: "100%",
              }}
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
            type="submit"
          >
            Invite User
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default AddNewUser;
