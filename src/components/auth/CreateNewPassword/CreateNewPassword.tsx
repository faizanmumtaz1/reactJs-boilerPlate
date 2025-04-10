import { Box, Paper, Stack, Typography } from "@mui/material";
import InputField from "../../common/InputField/InputField";
import Button from "../../common/Button/Button";
import { useForm } from "react-hook-form";
import { createNewPasswordschema } from "../../../schemas/createNewPasswordSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { createPasswordFormValues } from "../../../utils/types";
import { LogoIconLogin } from "../../../assets/Images/svg";
import { useNavigate } from "react-router-dom";
import { ROUTE_HOME } from "../../../utils/constant";
const CreateNewPassword = () => {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<createPasswordFormValues>({
    resolver: yupResolver(createNewPasswordschema),
    mode: "onChange",
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const handleCreatePassword = (data: createPasswordFormValues) => {
    console.log("Form submitted:", data);
    // Handle login logic here
    navigate(ROUTE_HOME);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Paper
        sx={{
          p: 0,
          width: "100%",
          maxWidth: 552,
          boxShadow: "none",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
            mb: 2,
          }}
        >
          <LogoIconLogin />
        </Box>
        <Stack direction="column" p={2}>
          <Typography variant="h5">Create New Password.</Typography>
        </Stack>
        <Stack direction="column" p={2}>
          <form onSubmit={handleSubmit(handleCreatePassword)}>
            <InputField
              control={control}
              name="password"
              label="New password here"
              type="password"
              sx={{ mb: "4px" }}
              helperTextInput={
                "Create a strong password with at least 8 characters, including uppercase and lowercase letters, a number, and a special character (e.g., !@#$%). "
              }
            />

            <InputField
              control={control}
              name="confirmPassword"
              label="Confirm password"
              type="password"
              sx={{ mb: 2 }}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              size="medium"
              className="rounded-full-button"
            >
              Create password
            </Button>
          </form>
        </Stack>
      </Paper>
    </Box>
  );
};

export default CreateNewPassword;
