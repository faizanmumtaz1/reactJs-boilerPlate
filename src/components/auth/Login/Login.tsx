import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Paper, Typography } from '@mui/material';
import InputField from '../../common/InputField/InputField';
import Button from '../../common/Button/Button';
import { loginSchema } from '../../../schemas/loginSchema';
import { LoginFormValues } from '../../../utils/types';
import Logo from '../../../assets/images/logo.png';
import { ROUTE_FORGET_PASSWORD, ROUTE_MAP } from '../../../utils/constant';
import { Link, useNavigate } from 'react-router';


// Define the validation schema using Yup


// Define type based on the schema


const Login = () => {
  const { control, handleSubmit } = useForm<LoginFormValues>({
    resolver: yupResolver(loginSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });
  
const navigate = useNavigate()
  const onSubmit = (data: LoginFormValues) => {
    console.log('Form submitted:', data);
    // Handle login logic here
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Paper
        sx={{
          p: 4,
          width: '100%',
          maxWidth: 400,
          boxShadow: 'none',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', mb: 3 }}>
          <img src={Logo} alt="logo" height={50} />
        </Box>

        <Typography variant="h5" component="h1" sx={{ mb: 0, textAlign: 'left' }}>
          Login
        </Typography>
        <Typography variant="body1" component="p" sx={{ mb: 3, textAlign: 'left', color: '#00000099' }}>
          Please enter your credentials to get started.
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            control={control}
            name="email"
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
          <Link to={ROUTE_FORGET_PASSWORD} style={{ fontSize: '14px', textAlign: 'left', color: 'rgba(0, 0, 0, 0.87)', cursor: 'pointer' }}>
            Forgot Password?
          </Link>

          <Button
            type="submit"
            variant="primary"
            fullWidth
            size="large"
            sx={{
              borderRadius: '25px',
              mt: 2
            }}
            onClick={()=>{navigate(ROUTE_MAP)}}
          >
            Log In
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;