import { Button, Checkbox, IconButton, Input, InputAdornment, FormHelperText } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const label = { inputProps: { 'aria-label': 'Remember me' } };

export const Login = () => {
    const navigate = useNavigate();

    const [registrationNo, setRegistrationNo] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    // Error states for each field
    const [registrationError, setRegistrationError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    // Toggle show password functionality
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const validateInputs = () => {
        let isValid = true;

        // Clear previous errors
        setRegistrationError('');
        setPasswordError('');

        // Check if registrationNo is empty
        if (registrationNo === '') {
            setRegistrationError('This field is required');
            isValid = false;
        } else if (registrationNo !== 'user') {
            setRegistrationError('Incorrect registration number');
            isValid = false;
        }

        // Check if password is empty
        if (password === '') {
            setPasswordError('This field is required');
            isValid = false;
        } else if (password !== 'password') {
            setPasswordError('Incorrect password');
            isValid = false;
        }

        return isValid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validateInputs()) {
            navigate('/dashboard');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <div className="bg-white p-8 rounded-xl w-full max-w-sm">
                {/* Logo */}
                <div className="flex justify-center mb-6">
                    <img src="images/login-logo.jpg" alt="Logo" className="w-32 h-32" />
                </div>

                {/* Title and description */}
                <div className="text-center mb-4">
                    <h2 className="text-2xl font-semibold">Student Portal</h2>
                    <p className="text-gray-600">Enter your registration No and password</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Registration No Input */}
                    <div className="mb-4">
                        <Input
                            id="registration-no"
                            placeholder="Registration No"
                            fullWidth
                            error={!!registrationError}
                            value={registrationNo}
                            onChange={(e) => setRegistrationNo(e.target.value)}
                        />
                        {registrationError && (
                            <FormHelperText error={!!registrationError} className="mt-1">
                                {registrationError}
                            </FormHelperText>
                        )}
                    </div>

                    {/* Password Input */}
                    <div className="mb-4">
                        <Input
                            id="outlined-adornment-password"
                            placeholder="Password"
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            fullWidth
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label={showPassword ? 'hide password' : 'show password'}
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        onMouseUp={handleMouseUpPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        {passwordError && (
                            <FormHelperText error={!!passwordError} className="mt-1">
                                {passwordError}
                            </FormHelperText>
                        )}
                    </div>

                    {/* Remember me Checkbox */}
                    <div className="flex items-center space-x-2 mb-4">
                        <Checkbox {...label} defaultChecked />
                        <span className="text-sm text-gray-600">Remember me</span>
                    </div>

                    {/* Forgot password link */}
                    <div className="text-right text-sm text-blue-600 mb-4">
                        <a href="#" className="hover:underline">Forgot your password?</a>
                    </div>

                    {/* Sign In Button */}
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        fullWidth
                    >
                        Sign In
                    </Button>
                </form>
            </div>

            <div className="hidden md:block w-1/2 pl-4">
                <img src="images/login-picture.jpg" alt="Student" className="w-full h-full object-cover rounded-lg" />       
            </div>
        </div>
    );
};
