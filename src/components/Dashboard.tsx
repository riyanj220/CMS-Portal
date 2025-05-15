import { Box, Paper, Typography } from "@mui/material";

export const Dashboard = () => {
    return (
        <>
            <Paper sx={{ width: '100%', p: 2 }}>
                {/* Sticky Heading */}
                <Box
                    sx={{
                        fontFamily: "'Poppins', sans-serif",
                        position: 'sticky',
                        top: 0,
                        zIndex: 2,
                        display: "flex",
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <div className="text-xl font-semibold text-gray-800 sm:text-2xl md:text-3xl">Dashboard</div>
                    <Box sx={{ display: 'flex', gap: 0, borderRadius: 1 }}>
                        <Box sx={{
                            border: '1px solid black',
                            p: 1,
                            backgroundColor: '#f0f0f0',
                            whiteSpace: 'nowrap',
                        }}>
                            <Typography sx={{ color: 'gray', fontWeight: 500 }}>
                                My ID: 2023F-BSE-075
                            </Typography>
                        </Box>

                        <Box sx={{
                            borderTop: '1px solid black',
                            borderBottom: '1px solid black',
                            borderRight: '1px solid black',
                            p: 1,
                            backgroundColor: '#f0f0f0',
                            whiteSpace: 'nowrap',
                        }}>
                            <Typography sx={{ color: 'gray', fontWeight: 500 }}>
                                My Enrollment No.: 2959/SE/2023F
                            </Typography>
                        </Box>

                        <Box sx={{
                            border: '1px solid black',
                            borderLeft: 'none', // avoid double border with previous box
                            p: 1,
                            backgroundColor: '#f0f0f0',
                            whiteSpace: 'nowrap',
                        }}>
                            <Typography sx={{ color: 'gray', fontWeight: 500 }}>
                                My Section: B
                            </Typography>
                        </Box>
                    </Box>
                    <Typography
                        component="div"
                        sx=
                        {{
                            color: "text.disabled",
                            fontWeight: "500",
                            whiteSpace: "nowrap",
                            border: '1px solid black',
                            p: 1,
                            backgroundColor: "#f0f0f0",
                        }}
                    >
                        Today: <strong>Thursday, May 15 2025</strong>
                    </Typography>
                </Box>
            </Paper>
        </>
    );
}