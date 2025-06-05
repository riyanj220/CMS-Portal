import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"


function createDataForMyCourses(
    name: string,
    attendacne: number,
    teacher: string,
    roomNo: string,
) {
    return { name, attendacne, teacher, roomNo };
}

const rowsForMyCourses = [
    createDataForMyCourses('OPERATING SYSTEMS LAB', 100, 'Engr. Samrah Shafique', 'BF-02'),
    createDataForMyCourses('PROBABLITY & STATISTICS', 100, 'Muhammad Mobin Anwer Siddiqui', 'CF-4,CG-3'),
    createDataForMyCourses('SOFTWARE DESIGN & ARCHITECTURE LAB.', 100, 'Engr. Dur-E-Shawar Agha	', 'BF-03'),
    createDataForMyCourses('SOFTWARE DESIGN & ARCHITECTURE.', 100, 'Engr. Dur-E-Shawar Agha', 'CF-3,CF-4,CG-2'),
    createDataForMyCourses('TECHNICAL WRITING', 100, 'Syeda Beena Bukhari', 'CF-3,CF-4'),

];

export const OverviewCard = () => {
    return (
        <Box
            sx={{
                maxWidth: 600,
                backgroundColor: "#f9fafb",
                borderRadius: 2,
                p: 2,
                mb: 4,
            }}
        >
            {/* Heading */}
            <Box sx={{ mb: 2 }}>
                <Typography
                    variant="h6"
                    component="h2"
                    sx={{
                        color: 'text.primary',
                        letterSpacing: 1,
                        textAlign: 'center',
                        fontWeight: 700,
                        fontSize: 24
                    }}
                >
                    Overview
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, textAlign: 'center', fontSize: 16 }}>
                    Spring 2025
                </Typography>
            </Box>

            {/* Table */}
            <TableContainer component={Paper} elevation={0} sx={{
                boxShadow: 'none', maxHeight: 290,
                '@media (max-device-width: 768px)': {
                    maxHeight: 'unset',
                },
                "&::-webkit-scrollbar": {
                    width: "6px",         // narrow width
                    height: "6px",
                },
                "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "#c4b5fd", // soft purple scroll thumb
                    borderRadius: "3px",
                },
                "&::-webkit-scrollbar-track": {
                    backgroundColor: "#f3f4f6", // light gray track
                },
                scrollbarWidth: "thin", // for Firefox
                scrollbarColor: "#c4b5fd #f3f4f6",
            }}>
                <Table stickyHeader aria-label="courses table" size="small" sx={{ maxWidth: 600 }}>
                    <TableHead>
                        <TableRow
                            sx={{
                                backgroundColor: 'background.paper', // white or near white
                                boxShadow: 'inset 0 -1px 0 #ddd', // subtle bottom border effect
                            }}
                        >
                            <TableCell sx={{ fontWeight: 'bold' }}>Course Name</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                                Attendance
                            </TableCell>
                            <TableCell align="left" sx={{ fontWeight: 'bold' }}>
                                Teacher Name
                            </TableCell>
                            <TableCell align="left" sx={{ fontWeight: 'bold' }}>
                                Room No.
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rowsForMyCourses.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{
                                    '&:hover': {
                                        backgroundColor: 'grey.50',
                                    },
                                    cursor: 'default',
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">{row.attendacne} %</TableCell>
                                <TableCell align="left">{row.teacher}</TableCell>
                                <TableCell align="left">{row.roomNo}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}
