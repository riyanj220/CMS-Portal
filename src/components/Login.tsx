import React, { useState } from "react";
import {
  Button,
  Checkbox,
  IconButton,
  Input,
  InputAdornment,
  FormHelperText,
} from "@mui/material";
import { useNavigate } from "react-router";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import SchoolIcon from "@mui/icons-material/School";
import KeyIcon from "@mui/icons-material/Key";

export const Login = () => {
  const navigate = useNavigate();
  const baseUrl = import.meta.env.BASE_URL;

  const [registrationNo, setRegistrationNo] = useState("user");
  const [password, setPassword] = useState("password");
  const [showPassword, setShowPassword] = useState(false);

  const [registrationError, setRegistrationError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const validateInputs = () => {
    let isValid = true;
    setRegistrationError("");
    setPasswordError("");

    if (!registrationNo.trim()) {
      setRegistrationError("Registration number is required");
      isValid = false;
    }

    if (!password.trim()) {
      setPasswordError("Password is required");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateInputs()) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 border border-slate-800">
        
        {/* Left Side: Login Form */}
        <div className="p-6 sm:p-10 flex flex-col justify-between">
          <div>
            {/* University Crest */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-slate-900 p-1.5 flex items-center justify-center shrink-0 shadow-sm">
                <img
                  src={`${baseUrl}images/login-logo.png`}
                  alt="SSUET Crest"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `${baseUrl}images/login-logo.jpg`;
                  }}
                />
              </div>
              <div>
                <h1 className="font-bold text-sm sm:text-base text-slate-900 leading-tight">
                  Sir Syed University
                </h1>
                <p className="text-[11px] font-semibold text-indigo-600 uppercase tracking-wider">
                  Student CMS Portal
                </p>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Sign in to your account
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Enter your university credentials to access courses, exams, and attendance.
              </p>
            </div>

            {/* Quick Demo Credentials Pill */}
            <div className="mb-5 p-3 rounded-xl bg-indigo-50 border border-indigo-100 text-xs text-indigo-900 flex items-center gap-2">
              <KeyIcon className="w-4 h-4 text-indigo-600 shrink-0" />
              <div>
                <span className="font-bold">Demo Login: </span>
                <span className="font-mono">User: <strong>user</strong> | Pass: <strong>password</strong></span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Registration / Student ID No.
                </label>
                <Input
                  id="registration-no"
                  placeholder="e.g. 2023F-BSE-075"
                  fullWidth
                  error={!!registrationError}
                  value={registrationNo}
                  onChange={(e) => setRegistrationNo(e.target.value)}
                  sx={{
                    fontSize: 13,
                    py: 0.5,
                  }}
                />
                {registrationError && (
                  <FormHelperText error className="mt-1">
                    {registrationError}
                  </FormHelperText>
                )}
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Password
                </label>
                <Input
                  id="password"
                  placeholder="Enter your portal password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                  error={!!passwordError}
                  sx={{
                    fontSize: 13,
                    py: 0.5,
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={showPassword ? "hide password" : "show password"}
                        onClick={handleClickShowPassword}
                        edge="end"
                        size="small"
                      >
                        {showPassword ? <VisibilityOff className="w-4 h-4" /> : <Visibility className="w-4 h-4" />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                {passwordError && (
                  <FormHelperText error className="mt-1">
                    {passwordError}
                  </FormHelperText>
                )}
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center space-x-1.5 text-slate-600 cursor-pointer select-none">
                  <Checkbox size="small" defaultChecked sx={{ p: 0.5 }} />
                  <span>Remember me</span>
                </label>
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-800">
                  Forgot password?
                </a>
              </div>

              <div className="pt-2">
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  sx={{
                    py: 1.2,
                    borderRadius: 2.5,
                    textTransform: "none",
                    fontWeight: 700,
                    fontSize: 14,
                    backgroundColor: "#4f46e5",
                    "&:hover": {
                      backgroundColor: "#4338ca",
                    },
                  }}
                >
                  Sign In to CMS Portal
                </Button>
              </div>
            </form>
          </div>

          <div className="pt-6 border-t border-slate-100 text-center text-[11px] text-slate-400 mt-6">
            Sir Syed University of Engineering & Technology • Admissions & IT Directorate
          </div>
        </div>

        {/* Right Side: University Branding Art */}
        <div className="hidden md:block relative bg-slate-900">
          <img
            src={`${baseUrl}images/login-picture.jpg`}
            alt="University Campus Life"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-8 text-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 rounded-lg bg-indigo-600/80 text-white">
                <SchoolIcon className="w-4 h-4" />
              </span>
              <span className="text-xs font-semibold text-indigo-300 uppercase tracking-wider">
                Excellence in Engineering
              </span>
            </div>
            <h3 className="text-xl font-bold leading-snug">
              "Work, Work and Only Work, and We are Bound to Succeed"
            </h3>
            <p className="text-xs text-slate-300 mt-2 font-medium">
              Sir Syed Ahmed Khan • Pioneer of Modern Education
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;
