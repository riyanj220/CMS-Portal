import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router";

const todoListData = (() => {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    return tasks.slice(0, 5).map((task: any) => ({
        task: task.task,
        dueDate: task.dueDate,
        status: task.status,
    }));
})();


const TodoListCard = () => {
    return (
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
    )
}

export default TodoListCard;