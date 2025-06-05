import { Box, Button, Typography } from "@mui/material"
import { LabelList, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const dataForGpa = [
    { name: 'Fall 2023', gpa: 1.2 },
    { name: 'Spring 2024', gpa: 2.48 },
    { name: 'Fall 2024', gpa: 3.5 },
];

export const ChartOfGPA = () => {
    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: 650,
                borderRadius: 2,
                boxShadow: "0px 4px 16px rgba(0,0,0,0.06)",
                p: 3,
                backgroundColor: "#f9fafb",
                mb: 4,
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
    )
}
