import { Box, Paper, Typography } from "@mui/material";
import DegreeCompletionCard from "./dashboardComponents/DegreeCompletionCard";
import FinancialLedgerCard from "./dashboardComponents/FinancialLedgerCard";
import AnnouncmentsCard from "./dashboardComponents/AnnouncmentsCard";
import FeedbackSurveysCard from "./dashboardComponents/FeedbackSurveysCard";
import TodoListCard from "./dashboardComponents/TodoListCard";
import { OverviewCard } from "./dashboardComponents/OverviewCard";
import { ChartOfGPA } from "./dashboardComponents/ChartOfGPA";
import { ActivityCard } from "./dashboardComponents/ActivityCard";
import { StatsCard } from "./dashboardComponents/StatsCard";


export const Dashboard = () => {
    return (
        <>
            <Paper sx={{ width: '100%', p: 2, overflow: 'auto', fontFamily: "'Poppins', sans-serif" }}>
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

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '1.7rem', }}>

                    {/* Stats Card */}
                    <StatsCard/>

                    {/* Overview Card */}
                    <OverviewCard/>

                    {/* My Activity card */}
                    <ActivityCard/>

                    {/* Chart of GPA */}
                    <ChartOfGPA/>

                    {/* Todo list card */}
                    <TodoListCard/>

                    {/* Degree completion */}
                    <DegreeCompletionCard progress={55} />

                    {/*Finantial Ledger*/}
                    <FinancialLedgerCard />

                    {/* Announcments Card */}
                    <AnnouncmentsCard />

                    {/* Feed Back Surveys Card */}
                    <FeedbackSurveysCard />

                </Box>

            </Paper>
        </>
    );
}