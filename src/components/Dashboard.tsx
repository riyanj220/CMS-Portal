import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList } from 'recharts';
import DegreeCompletionCard from "./dashboardComponents/DegreeCompletionCard";
import FinancialLedgerCard from "./dashboardComponents/FinancialLedgerCard";
import { Link } from 'react-router';

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

const activityData = [
    { date: "01-06", time: "09:50", label: "Login Details : Student Logged In", color: "#3b82f6" },
    { date: "31-05", time: "07:51", label: "Login Details : Student Logged In", color: "#3b82f6" },
    { date: "31-05", time: "12:19", label: "Login Details : Student Logged In", color: "#3b82f6" },
    { date: "19-04", time: "01:28", label: "Fee Charging : Students Activities : 1,100", color: "#f59e0b" },
    { date: "19-04", time: "01:28", label: "Fee Charging : Tuition Fee : 102,000", color: "#f59e0b" },
    { date: "19-04", time: "01:28", label: "Fee Charging : Semester Fee : 11,500", color: "#f59e0b" },
    { date: "12-07", time: "12:32", label: "Student Payment : Scholarship (Merit) 35% Of Tuition Fee 28,350", color: "#10b981" },
    { date: "18-10", time: "02:51", label: "Student Payment : 81,000", color: "#10b981" },
];


const dataForGpa = [
    { name: 'Fall 2023', gpa: 3.95 },
    { name: 'Spring 2024', gpa: 3.98 },
    { name: 'Fall 2024', gpa: 3.94 },
];


const todoListData = (() => {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    return tasks.slice(0, 5).map((task: any) => ({
        task: task.task,
        dueDate: task.dueDate,
        status: task.status,
    }));
})();


export const Dashboard = () => {
    return (
        <>
            <Paper sx={{ width: '100%', p: 2, overflow: 'auto' ,fontFamily: "'Poppins', sans-serif"}}>
                {/* Sticky Heading */}
                <Box
                    sx={{
                        position: 'sticky',
                        top: 0,
                        zIndex: 2,
                        display: "flex",
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        mb: 6

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

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem', }}>
                    <Box
                        sx={{
                            background: "linear-gradient(to bottom, #f84c64 40%, #f0f0f0 40%)", // Tailwind red-400 approx
                            borderRadius: 2,
                            p: 4,
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 2,
                            maxWidth: 650, // or 100% max width as needed
                            flexDirection: 'flex-start',
                            maxHeight: 461
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


                    {/* Overview Card */}
                    <Box
                        sx={{
                            maxWidth: '100%',
                            backgroundColor: "#f9fafb",
                            borderRadius: 2,
                            p: 4,
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
                            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, textAlign: 'center', fontSize: 16}}>
                                Spring 2025
                            </Typography>
                        </Box>

                        {/* Table */}
                        <TableContainer component={Paper} elevation={0} sx={{ boxShadow: 'none' }}>
                            <Table aria-label="courses table" sx={{ minWidth: 600 }}>
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


                    {/* My Activity card */}
                    <Box
                        sx={{
                            maxWidth: 400,
                            borderRadius: 2,
                            boxShadow: "0px 2px 12px rgba(0,0,0,0.05)",
                            p: 2,
                            backgroundColor: "#f9fafb",
                            mb: 5
                        }}
                    >
                        {/* Header */}
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                            <Typography sx={{ fontWeight: "600", fontSize: "24px" }}>My Activity</Typography>
                            <Button size="large" variant="contained" sx={{ borderRadius: 2, textTransform: "none", backgroundColor: "#8b5cf6" }}>
                                View
                            </Button>
                        </Box>

                        {/* Activity List */}
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                            {activityData.map((activity, index) => (
                                <Box key={index} sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                                    {/* Dot */}
                                    <Box
                                        sx={{
                                            width: 10,
                                            height: 10,
                                            borderRadius: "50%",
                                            backgroundColor: activity.color,
                                            mt: "6px",
                                        }}
                                    />
                                    {/* Content */}
                                    <Box>
                                        <Typography sx={{ fontSize: "16px", color: "#6b7280" }}>
                                            {activity.date} {activity.time}
                                        </Typography>
                                        <Typography sx={{ fontSize: "16px", color: "#111827" }}>{activity.label}</Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Box>


                    {/* Chart of GPA */}
                    <Box
                        sx={{
                            width: '100%',
                            maxWidth: 700,
                            borderRadius: 2,
                            boxShadow: "0px 4px 16px rgba(0,0,0,0.06)",
                            p: 3,
                            backgroundColor: "#f9fafb",
                            mb: 5,
                        }}
                    >
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                            <Typography sx={{ fontWeight: "600", fontSize: "24px" }}>My GPA</Typography>
                            <Button size="large" variant="contained" sx={{ borderRadius: 2, textTransform: "none", backgroundColor: "#8b5cf6" }}>
                                View
                            </Button>
                        </Box>

                        <ResponsiveContainer width="100%" height={500}>
                            <LineChart
                                data={dataForGpa}
                                margin={{ top: 24, right: 30, left: 0, bottom: 0 }}
                            >
                                <defs>
                                    <linearGradient id="gpaGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#facc15" stopOpacity={0.3} />
                                        <stop offset="100%" stopColor="#facc15" stopOpacity={0} />
                                    </linearGradient>
                                </defs>

                                <XAxis dataKey="name" tick={{ fontSize: 16, fontWeight: 'bold' }} padding={{ left: 30, right: 20 }} />
                                <YAxis
                                    domain={[0, 4]}
                                    ticks={[0, 0.4, 0.8, 1.2, 1.6, 2.0, 2.4, 2.8, 3.2, 3.6, 4.0]}
                                    tick={{ fontSize: 16, fontWeight: 'bold' }}
                                />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: "#ffffff",
                                        border: "1px solid #ccc",
                                        borderRadius: 8,
                                        fontSize: 16,
                                    }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="gpa"
                                    stroke="#facc15"
                                    strokeWidth={4}
                                    dot={{
                                        r: 6,
                                        stroke: "#facc15",
                                        strokeWidth: 3,
                                        fill: "#ffffff",
                                    }}
                                    activeDot={{
                                        r: 8,
                                        stroke: "#facc15",
                                        strokeWidth: 3,
                                        fill: "#ffffff",
                                    }}
                                    fill="url(#gpaGradient)"
                                >
                                    <LabelList dataKey="gpa" position="top" fill="#111827" fontSize={16} />
                                </Line>
                            </LineChart>
                        </ResponsiveContainer>
                    </Box>


                    {/* Todo list card */}
                    <Box
                        sx={{
                            width: "100%",
                            maxWidth: 380,
                            borderRadius: 3,
                            backgroundColor: "#f9fafb",
                            p: 3,
                            boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                            mb: 5,
                        }}
                    >
                        {/* Header */}
                        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                            <Typography sx={{ fontWeight: "600", fontSize: "24px" }}>Todo List</Typography>
                            <Link to="/dashboard/general/todo-list" style={{ textDecoration: 'none' }}>
                                <Button
                                    size="large"
                                    variant="contained"
                                    sx={{
                                        textTransform: "none",
                                        backgroundColor: "#8b5cf6",
                                        fontWeight: "500",
                                        fontSize: "13px",
                                        borderRadius: 2,
                                    }}
                                >
                                    View
                                </Button>
                            </Link>
                        </Box>

                        {/* Task Items */}
                        {todoListData.length === 0 ? (
                            <Typography sx={{ color: "gray", fontSize: 14 }}>No tasks yet</Typography>
                        ) : (
                            todoListData.map((item: { task: string; dueDate: string; status: string }, idx: number) => (
                                <Box
                                    key={idx}
                                    sx={{
                                        mb: 2,
                                        p: 2,
                                        borderRadius: 2,
                                        backgroundColor: "white",
                                        boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: 600,
                                            fontSize: 15,
                                            mb: 0.5,
                                            whiteSpace: "nowrap",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                        }}
                                    >
                                        {item.task}
                                    </Typography>
                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <Typography sx={{ fontSize: 13, color: "gray" }}>{item.dueDate}</Typography>
                                        <Typography
                                            sx={{
                                                fontSize: 12,
                                                px: 1.2,
                                                py: 0.3,
                                                borderRadius: 1,
                                                backgroundColor:
                                                    item.status === "Completed"
                                                        ? "#d1fae5"
                                                        : item.status === "In Progress"
                                                            ? "#fef3c7"
                                                            : "#e5e7eb",
                                                color:
                                                    item.status === "Completed"
                                                        ? "#059669"
                                                        : item.status === "In Progress"
                                                            ? "#b45309"
                                                            : "#6b7280",
                                                fontWeight: 500,
                                            }}
                                        >
                                            {item.status}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))
                        )}
                    </Box>


                    {/* Degree completion */}
                    <DegreeCompletionCard progress={55} />

                    {/*Finantial Ledger*/}
                    <FinancialLedgerCard />

                </Box>




            </Paper>
        </>
    );
}