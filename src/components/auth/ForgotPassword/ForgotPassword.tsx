import { Box, Paper, Typography } from '@mui/material'
import Logo from '../../../assets/images/logo.png';
import { useForm } from 'react-hook-form';
import InputField from '../../common/InputField/InputField';
import Button from '../../common/Button/Button';

const ForgotPassword = () => {

  const { control, handleSubmit } = useForm({
    // resolver: yupResolver(),
    defaultValues: {
      verificationCode: '',
    },
  });

  const onSubmit = (data: any) => {
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
          Forgot Password
        </Typography>
        <Typography variant="body1" component="p" sx={{ mb: 3, textAlign: 'left', color: '#00000099' }}>
          Enter the verification code shared to you email <span style={{ fontWeight: 'bold', color: '#000000' }}>jason******.gmail.com</span> to change your password.
        </Typography>

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
            variant="primary"
            fullWidth
            size="large"
            sx={{
              borderRadius: '25px',
            }}
          >
            Verify account
          </Button>
        </form>
      </Paper>
    </Box>
  )
}

export default ForgotPassword