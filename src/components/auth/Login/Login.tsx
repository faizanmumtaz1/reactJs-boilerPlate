import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, CircularProgress, Paper, Stack, Typography } from "@mui/material";
import InputField from "../../common/InputField/InputField";
import Button from "../../common/Button/Button";
import { loginSchema } from "../../../schemas/loginSchema";
import { LoginFormValues } from "../../../utils/types";
import { ROUTE_FORGET_PASSWORD, ROUTE_MAP } from "../../../utils/constant";
import { Link, useNavigate } from "react-router";
import useMutateLogin from "../../../react-query-hooks/useMutateLogin";
import toastHelper from "../../../utils/toastifyHelper";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/slices/authSlice";
import { LogoIconLogin } from "../../../assets/Images/svg";

const Login = () => {
  const { control, handleSubmit } = useForm<LoginFormValues>({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
    defaultValues: {
      userName: "",
      password: "",
    },
  });

  const { mutateAsync, isLoading } = useMutateLogin();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = async (data: LoginFormValues) => {
    const userData: any = {
      username: data.userName.trim(),
      password: data.password,
    };

    try {
      const response = await mutateAsync(userData);
      toastHelper.success("Login Successfully");
      dispatch(login({ ...response }));
      navigate(ROUTE_MAP);
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.detail || "Something went wrong";
      toastHelper.error(errorMessage);
    }
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
        <Stack direction="column" spacing={1} p={2}>
          <Typography
            variant="h5"
            component="h5"
            sx={{ mb: 0, textAlign: "left" }}
          >
            Login
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{ mb: 3, textAlign: "left", color: "#00000099" }}
          >
            Please enter your credentials to get started.
          </Typography>
        </Stack>
        <Stack direction="column" spacing={1} p={2}>
          <form onSubmit={handleSubmit(handleLogin)}>
            <InputField
              control={control}
              name="userName"
              label="Email"
              type="text"
              sx={{ mb: 2 }}
            />
            <InputField
              control={control}
              name="password"
              label="Password"
              type="password"
              sx={{ mb: 2 }}
            />
            <Link
              to={ROUTE_FORGET_PASSWORD}
              style={{
                fontSize: "14px",
                textAlign: "left",
                color: "rgba(0, 0, 0, 0.87)",
                cursor: "pointer",
              }}
            >
              Forgot Password?
            </Link>

            <Button
              type="submit"
              color="primary"
              fullWidth
              size="large"
              sx={{
                borderRadius: "25px",
                mt: 2,
              }}
              disabled={isLoading}
            >
              {isLoading ? <CircularProgress size={20} /> : "Log In"}
            </Button>
          </form>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Login;
