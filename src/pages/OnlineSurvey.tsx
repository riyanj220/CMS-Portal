

import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton,
    Box
} from "@mui/material";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import { useNavigate } from "react-router";

const rows = [
    {
        type: "course",
        id: "1",
        feedback: "Course Evaluation by Students",
        session: "Spring 2025",
        course: "INTRODUCTION TO DATABASE SYSTEMS,",
        faculty: "Engr. Kiran Hidayat",
        fromDate: "18-Jun-2025",
        toDate: "20-Jul-2025",
        status: "Submitted",
        formUrl: "/form/1",
    },
    {
        type: "course",
        id: "2",
        feedback: "Course Evaluation by Students",
        session: "Spring 2025",
        course: "PROBABILITY & STATISTICS",
        faculty: "Muhammad Mobin Anwer Siddiqui",
        fromDate: "18-Jun-2025",
        toDate: "20-Jul-2025",
        status: "Submitted",
        formUrl: "/form/2",
    }, {
        type: "course",
        id: "3",
        feedback: "Course Evaluation by Students",
        session: "Spring 2025",
        course: "PROBABILITY & STATISTICS",
        faculty: "Muhammad Mobin Anwer Siddiqui",
        fromDate: "18-Jun-2025",
        toDate: "20-Jul-2025",
        status: "Submitted",
        formUrl: "/form/2",
    }, {
        type: "course",
        id: "4",
        feedback: "Course Evaluation by Students",
        session: "Spring 2025",
        course: "PROBABILITY & STATISTICS",
        faculty: "Muhammad Mobin Anwer Siddiqui",
        fromDate: "18-Jun-2025",
        toDate: "20-Jul-2025",
        status: "Submitted",
        formUrl: "/form/2",
    }, {
        type: "teacher",
        id: "5",
        feedback: "Teacher Evaluation by Students",
        session: "Spring 2025",
        course: "PROBABILITY & STATISTICS",
        faculty: "Muhammad Mobin Anwer Siddiqui",
        fromDate: "18-Jun-2025",
        toDate: "20-Jul-2025",
        status: "Submitted",
        formUrl: "/form/2",
    }, {
        type: "teacher",
        id: "6",
        feedback: "Teacher Evaluation by Students",
        session: "Spring 2025",
        course: "PROBABILITY & STATISTICS",
        faculty: "Muhammad Mobin Anwer Siddiqui",
        fromDate: "18-Jun-2025",
        toDate: "20-Jul-2025",
        status: "Submitted",
        formUrl: "/form/2",
    }, {
        type: "teacher",
        id: "7",
        feedback: "Teacher Evaluation by Students",
        session: "Spring 2025",
        course: "PROBABILITY & STATISTICS",
        faculty: "Muhammad Mobin Anwer Siddiqui",
        fromDate: "18-Jun-2025",
        toDate: "20-Jul-2025",
        status: "Submitted",
        formUrl: "/form/2",
    }, {
        type: "teacher",
        id: "8",
        feedback: "Teacher Evaluation by Students",
        session: "Spring 2025",
        course: "PROBABILITY & STATISTICS",
        faculty: "Muhammad Mobin Anwer Siddiqui",
        fromDate: "18-Jun-2025",
        toDate: "20-Jul-2025",
        status: "Submitted",
        formUrl: "/form/2",
    }, {
        type: "teacher",
        id: "9",
        feedback: "Teacher Evaluation by Students",
        session: "Spring 2025",
        course: "PROBABILITY & STATISTICS",
        faculty: "Muhammad Mobin Anwer Siddiqui",
        fromDate: "18-Jun-2025",
        toDate: "20-Jul-2025",
        status: "Submitted",
        formUrl: "/form/2",
    }, {
        type: "teacher",
        id: "10",
        feedback: "Teacher Evaluation by Students",
        session: "Spring 2025",
        course: "PROBABILITY & STATISTICS",
        faculty: "Muhammad Mobin Anwer Siddiqui",
        fromDate: "18-Jun-2025",
        toDate: "20-Jul-2025",
        status: "Submitted",
        formUrl: "/form/2",
    },
];

const columns = [
    { id: "feedback", label: "FEEDBACK" },
    { id: "session", label: "SESSION" },
    { id: "course", label: "COURSE" },
    { id: "faculty", label: "FACULTY" },
    { id: "fromDate", label: "FROMDATE" },
    { id: "toDate", label: "TODATE" },
    { id: "status", label: "STATUS" },
    { id: "form", label: "FORM" }
];



export const OnlineSurvey = () => {

    const navigate = useNavigate();

    const handleFormClick = (type: string, id: string) => {
        navigate(`/dashboard/general/online-survey/${type}/${id}`);
    };

    return (
        <Paper sx={{ width: '100%' }}>
            <Box
                sx={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 2,
                    backgroundColor: 'white',
                    textAlign: 'center',
                    py: 2,
                }}
            >
                <div className="text-xl font-semibold text-gray-800 sm:text-2xl sm:mb-4  md:text-3xl">Online Survey</div>
            </Box>
            <TableContainer component={Paper}
                sx={{
                    maxHeight: 600,
                    '@media (max-device-width: 768px)': {
                        maxHeight: 'unset',
                    },
                    "&::-webkit-scrollbar": {
                        width: "6px",
                        height: "6px",
                    },
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "#c4b5fd",
                        borderRadius: "3px",
                    },
                    "&::-webkit-scrollbar-track": {
                        backgroundColor: "#f3f4f6",
                    },
                    scrollbarWidth: "thin",
                    scrollbarColor: "#c4b5fd #f3f4f6",
                }}>
                <Table sx={{ minWidth: 650 }} stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map(col => (
                                <TableCell
                                    key={col.id}
                                    sx={{
                                        backgroundColor: "#E5E7EB",
                                        fontWeight: "bold",
                                        textTransform: "uppercase",
                                        fontSize: 13
                                    }}
                                >
                                    {col.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, idx) => (
                            <TableRow key={idx}>
                                <TableCell>{row.feedback}</TableCell>
                                <TableCell>{row.session}</TableCell>
                                <TableCell>{row.course}</TableCell>
                                <TableCell>{row.faculty}</TableCell>
                                <TableCell>{row.fromDate}</TableCell>
                                <TableCell>{row.toDate}</TableCell>
                                <TableCell>{row.status}</TableCell>
                                <TableCell align="left">
                                    <IconButton
                                        onClick={() => handleFormClick(row.type, row.id)}
                                        color="primary"
                                        size="small"
                                        sx={{
                                            backgroundColor: "#F2F6FF",
                                            borderRadius: 1,
                                        }}
                                    >
                                        <DescriptionOutlinedIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};
