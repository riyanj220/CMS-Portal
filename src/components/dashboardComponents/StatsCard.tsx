import { Box, Typography } from "@mui/material"

export const StatsCard = () => {
    return (
        <Box
            sx={{
                background: "linear-gradient(to bottom, #f84c64 40%, #f0f0f0 40%)", // Tailwind red-400 approx
                borderRadius: 2,
                p: 4,
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                maxWidth: 450, // or 100% max width as needed
                flexDirection: 'flex-start',
                maxHeight: 430,
                mb: 4
            }}
        >
            {/* Card 1: Current Balance */}
            <Box
                sx={{
                    flex: "1 1 45%",
                    backgroundColor: "#fff2cc",
                    borderRadius: 2,
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    minHeight: 100,
                }}
            >
                <Typography sx={{ color: "#d99b00", fontWeight: "bold" }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"      // desired width
                        height="40"     // desired height
                        viewBox="0 0 24 24"  // crucial for scaling!
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
                <Typography sx={{ color: "#d99b00", fontWeight: "600", fontSize: '1.2rem' }}>
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
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    minHeight: 10,
                }}
            >
                <Typography sx={{ color: "#3b82f6" }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"      // desired width
                        height="40"     // desired height
                        viewBox="0 0 24 24"  // crucial for scaling!
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
                <Typography sx={{ color: "#3b82f6", fontWeight: "600", fontSize: '1.2rem' }}>
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
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    minHeight: 100,
                }}
            >
                <Typography sx={{ color: "#dc2626" }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"      // desired width
                        height="40"     // desired height
                        viewBox="0 0 24 24"  // crucial for scaling!
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
                <Typography sx={{ color: "#dc2626", fontWeight: "600", fontSize: '1.2rem' }}>
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
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    minHeight: 100,
                }}
            >
                <Typography sx={{ color: "#14b8a6" }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"      // desired width
                        height="40"     // desired height
                        viewBox="0 0 24 24"  // crucial for scaling!
                        fill="none"
                        stroke="#14b8a6"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                </Typography>
                <Typography sx={{ color: "#14b8a6", fontWeight: "600", fontSize: '1.2rem' }}>
                    Average Attendance <br />
                    ()
                </Typography>
            </Box>
        </Box>
    )
}
