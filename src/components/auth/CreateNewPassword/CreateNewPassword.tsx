import { Box, Paper, Typography } from '@mui/material'
import Logo from '../../../assets/images/logo.png';
import InputField from '../../common/InputField/InputField'
import Button from '../../common/Button/Button'
import { useForm } from 'react-hook-form'
import { createNewPasswordschema } from '../../../schemas/createNewPasswordSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import { createPasswordFormValues } from '../../../utils/types'

const CreateNewPassword = () => {
    const { control, handleSubmit } = useForm<createPasswordFormValues>({
        resolver: yupResolver(createNewPasswordschema),
        mode: 'onChange',
        defaultValues: {
            password: '',
            confirmPassword: '',

        },
    });

    const handleCreatePassword = (data: createPasswordFormValues) => {
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
                    maxWidth: 500,
                    boxShadow: 'none',
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', mb: 3 }}>
                    <img src={Logo} alt="logo" height={50} />
                </Box>

                <Typography variant="h5" component="h1"  sx={{ mb: 3, textAlign: 'left', fontSize:'24px' }}>
                    Create a password to log in to your account
                </Typography>


                <form onSubmit={handleSubmit(handleCreatePassword)}>
                    <InputField
                        control={control}
                        name="password"
                        label="New password here"
                        type="password"
                        sx={{ mb: 2 }}
                        helperText={'Create a strong password with at least 8 characters, including uppercase and lowercase letters, a number, and a special character (e.g., !@#$%). '}
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

export default CreateNewPassword