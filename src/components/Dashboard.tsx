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
                        justifyContent: 'space-between',
                        mb:6

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
                <Box
                    sx={{
                        background: "linear-gradient(to bottom, #f84c64 40%, #f0f0f0 40%)", // Tailwind red-400 approx
                        borderRadius: 2,
                        p:4,
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 2,
                        maxWidth: 700, // or 100% max width as needed
                        flexDirection:'flex-start'
                    }}
                >
                    {/* Card 1: Current Balance */}
                    <Box
                        sx={{
                            flex: "1 1 45%",
                            backgroundColor: "#fff2cc",
                            borderRadius: 2,
                            p: 3,
                            display: "flex",
                            flexDirection: "column",
                            gap: 1,
                            minHeight: 120,
                        }}
                    >
                        <Typography sx={{ color: "#d99b00", fontWeight: "bold" }}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="#d99b00"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="12" y1="20" x2="12" y2="10" />
                                <line x1="18" y1="20" x2="18" y2="4" />
                                <line x1="6" y1="20" x2="6" y2="16" />
                            </svg>
                        </Typography>
                        <Typography sx={{ color: "#d99b00", fontWeight: "600" }}>
                            Current Balance <br />
                            (119800.00)
                        </Typography>
                    </Box>

                    {/* Card 2: CGPA */}
                    <Box
                        sx={{
                            flex: "1 1 45%",
                            backgroundColor: "#dbeafe",
                            borderRadius: 2,
                            p: 3,
                            display: "flex",
                            flexDirection: "column",
                            gap: 1,
                            minHeight: 120,
                        }}
                    >
                        <Typography sx={{ color: "#3b82f6" }}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="#3b82f6"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M16 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M12 7a4 4 0 1 0-8 0 4 4 0 0 0 8 0z" />
                                <line x1="20" y1="8" x2="20" y2="14" />
                                <line x1="23" y1="11" x2="17" y2="11" />
                            </svg>
                        </Typography>
                        <Typography sx={{ color: "#3b82f6", fontWeight: "600" }}>
                            CGPA <br />
                            (3.97)
                        </Typography>
                    </Box>

                    {/* Card 3: Registered Courses */}
                    <Box
                        sx={{
                            flex: "1 1 45%",
                            backgroundColor: "#fee2e2",
                            borderRadius: 2,
                            p: 3,
                            display: "flex",
                            flexDirection: "column",
                            gap: 1,
                            minHeight: 120,
                        }}
                    >
                        <Typography sx={{ color: "#dc2626" }}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="#dc2626"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M4 19h16" />
                                <path d="M4 5h16" />
                                <path d="M4 7h16" />
                            </svg>
                        </Typography>
                        <Typography sx={{ color: "#dc2626", fontWeight: "600" }}>
                            Registered Courses <br />
                            (8)
                        </Typography>
                    </Box>

                    {/* Card 4: Average Attendance */}
                    <Box
                        sx={{
                            flex: "1 1 45%",
                            backgroundColor: "#d1fae5",
                            borderRadius: 2,
                            p: 3,
                            display: "flex",
                            flexDirection: "column",
                            gap: 1,
                            minHeight: 120,
                        }}
                    >
                        <Typography sx={{ color: "#14b8a6" }}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="#14b8a6"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                            </svg>
                        </Typography>
                        <Typography sx={{ color: "#14b8a6", fontWeight: "600" }}>
                            Average Attendance <br />
                            ()
                        </Typography>
                    </Box>
                </Box>
            </Paper>
        </>
    );
}