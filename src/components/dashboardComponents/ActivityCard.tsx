import { Box, Button, Typography } from "@mui/material";


const activityData = [
    { date: "01-06", time: "09:50", label: "Login Details : Student Logged In", color: "#3b82f6" },
    { date: "31-05", time: "07:51", label: "Login Details : Student Logged In", color: "#3b82f6" },
    { date: "31-05", time: "12:19", label: "Login Details : Student Logged In", color: "#3b82f6" },
    { date: "19-04", time: "01:28", label: "Fee Charging : Students Activities : 1,100", color: "#f59e0b" },
    { date: "19-04", time: "01:28", label: "Fee Charging : Tuition Fee : 102,000", color: "#f59e0b" },
    // { date: "19-04", time: "01:28", label: "Fee Charging : Semester Fee : 11,500", color: "#f59e0b" },
    // { date: "12-07", time: "12:32", label: "Student Payment : Scholarship (Merit) 35% Of Tuition Fee 28,350", color: "#10b981" },
];

export const ActivityCard = () => {
    return (
        <Box
            sx={{
                maxWidth: 400,
                borderRadius: 2,
                boxShadow: "0px 2px 12px rgba(0,0,0,0.05)",
                p: 2,
                backgroundColor: "#f9fafb",
                mb: 4
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
    )
}
