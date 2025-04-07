import { Box, Paper, Stack, Typography } from "@mui/material";
import Logo from "../../../assets/images/logo.png";
import { useForm } from "react-hook-form";
import InputField from "../../common/InputField/InputField";
import Button from "../../common/Button/Button";
import { ROUTE_CREATE_NEW_PASSWORD } from "../../../utils/constant";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm({
    // resolver: yupResolver(),
    defaultValues: {
      verificationCode: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Form submitted:", data);
    // Handle login logic here
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
          <img src={Logo} alt="logo" height={50} />
        </Box>
        <Stack direction="column" p={2}>
          <Typography variant="h5">Forgot Password</Typography>
          <Typography
            variant="body2"
            className="body2"
            sx={{ color: "var(--text-secondary) !important" }}
          >
            Enter the verification code shared to you email{" "}
            <span style={{ fontWeight: "bold", color: "#000000" }}>
              jason******.gmail.com
            </span>{" "}
            to change your password.
          </Typography>
        </Stack>
        <Stack direction="column" p={2}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputField
              control={control}
              name="verificationCode"
              label="Verification code enter here"
              type="text"
              sx={{ mb: 2 }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              size="medium"
              className="rounded-full-button"
              onClick={() => {
                navigate(ROUTE_CREATE_NEW_PASSWORD);
              }}
            >
              Verify account
            </Button>
          </form>
        </Stack>
      </Paper>
    </Box>
  );
};

export default ForgotPassword;
