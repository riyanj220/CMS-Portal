import { Box, Button, Typography } from "@mui/material"
import { Link } from "react-router"

export const FeedbackSurveysCard = () => {
    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: 380,
                borderRadius: 3,
                backgroundColor: "#f9fafb",
                p: 3,
                boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                mb: '10rem',
            }}
        >
            {/* Header */}
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                <Typography sx={{ fontWeight: "600", fontSize: "24px", mb: 2 }}>Feedback / Surveys</Typography>
                <Link to="#" style={{ textDecoration: "none" }}>
                    <Button
                        size="large"
                        variant="contained"
                        sx={{
                            textTransform: "none",
                            backgroundColor: "#8b5cf6",
                            fontWeight: 500,
                            fontSize: "12px",
                            borderRadius: 2,
                            alignItems:'center'
                        }}
                    >
                        View
                    </Button>
                </Link>
            </Box>

            {/* Announcements list */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {[
                    {
                        title: "Midterm schedule uploaded",
                        date: "June 5, 2025",
                    },
                    {
                        title: "Project submission extended",
                        date: "June 3, 2025",
                    },
                    {
                        title: "Campus closed on Eid",
                        date: "May 30, 2025",
                    },
                ].map((item, index) => (
                    <Box key={index} sx={{ p: 2, borderRadius: 2, backgroundColor: "#ffffff", boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
                        <Typography sx={{ fontWeight: 500, fontSize: "14px", color: "#111827" }}>{item.title}</Typography>
                        <Typography sx={{ fontSize: "12px", color: "#6b7280", mt: 0.5 }}>{item.date}</Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default FeedbackSurveysCard;