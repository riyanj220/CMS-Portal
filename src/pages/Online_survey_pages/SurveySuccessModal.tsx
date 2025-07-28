import { Box, Typography, Button, Modal, Stack, Divider } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router";

interface SurveySuccessModalProps {
    open: boolean;
    user?: {
        name?: string;
        regNo?: string;
        program?: string;
        email?: string;
    };
}

export default function SurveySuccessModal({ open, user }: SurveySuccessModalProps) {
    const navigate = useNavigate();
    const portalUrl = "/dashboard/general/online-survey";

    const handleCloseAndNavigate = () => {
        navigate(portalUrl, { replace: true });
    };

    return (
        <Modal
            open={open}
            onClose={handleCloseAndNavigate}
            aria-labelledby="survey-success-title"
            aria-describedby="survey-success-description"
            slotProps={{
                backdrop: {
                    style: { backgroundColor: "rgba(44,62,80,0.20)" },
                },
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: { xs: 370, sm: 500, md: 570 },
                    bgcolor: "background.paper",
                    borderRadius: 4,
                    boxShadow: 15,
                    p: { xs: 3, sm: 5 },
                    outline: "none",
                    textAlign: "center",
                }}
            >
                <Stack spacing={4} alignItems="center">
                    <Box>
                        <CheckCircleIcon sx={{ fontSize: 72, color: "#38b000", mb: -1 }} />
                    </Box>
                    <Typography
                        id="survey-success-title"
                        sx={{
                            color: "#1976d2",
                            fontWeight: 700,
                            fontSize: 28,
                            letterSpacing: 0.7,
                            mb: 0.5,
                        }}
                    >
                        Survey Submitted
                    </Typography>
                    
                    <Typography
                        sx={{
                            fontWeight: 400,
                            fontSize: 19,
                            color: "#666",
                            letterSpacing: 0.1,
                            mb: 1,
                        }}
                    >
                        Thank you for your valuable feedback.
                    </Typography>

                    {/* User info */}
                    <Stack spacing={2.5} sx={{ width: "100%", alignItems: "center" }}>
                        <Box>
                            <Typography sx={{ fontWeight: 800, color: "#2196f3", fontSize: 28 }}>
                                {user?.name ?? "RIYAN JAMIL"}
                            </Typography>
                            <Typography sx={{ fontWeight: 700, color: "#2b354f", fontSize: 22,mb:3 }}>
                                {user?.regNo ?? "2023F-BSE-075"}
                            </Typography>
                        </Box>
                        <Stack spacing={1} alignItems="center" width="100%">
                            <Typography sx={{ fontWeight: 600, color: "#444", fontSize: 19 }}>
                                <span style={{ color: "#1976d2", fontWeight: 800 }}>
                                    {user?.program ?? "(BS) - Software Engineering - MOR"}
                                </span>
                            </Typography>
                            <Typography sx={{ fontWeight: 600, color: "#444", fontSize: 19 }}>
                                <span style={{ color: "#1976d2", fontWeight: 800 }}>
                                    {user?.email ?? "riyanjamil220@gmail.com"}
                                </span>
                            </Typography>
                        </Stack>
                    </Stack>

                    {/* Add divider before the button for separation */}
                    <Divider sx={{ width: "80%", my: 2, borderColor: "#e0e8ef" }} />

                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        sx={{
                            borderRadius: 2,
                            px: 5,
                            fontWeight: 700,
                            mt: 0,
                            fontSize: 18,
                            textTransform: "uppercase",
                            letterSpacing: 1,
                            boxShadow: "0 2px 20px #2196f355",
                            height: 52,
                        }}
                        onClick={handleCloseAndNavigate} 
                    >
                        PROCEED TO PORTAL
                    </Button>
                </Stack>
            </Box>
        </Modal>
    );
}
