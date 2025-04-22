import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField, Button, Select, MenuItem, FormControl, InputLabel, useMediaQuery, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

interface Task {
    id: number;
    task: string;
    dueDate: string;
    createdDate: string;
    priority: string;
    status: string;
    active: boolean;
}

const TodoList = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [taskInput, setTaskInput] = useState("");
    const [dueDateInput, setDueDateInput] = useState("");
    const [priorityInput, setPriorityInput] = useState("Normal");
    const [statusInput, setStatusInput] = useState("Not Started");
    const [activeInput, setActiveInput] = useState(false);

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [isFocused, setIsFocused] = useState(false);

    const [editingTask, setEditingTask] = useState<Task | null>(null);

    const [taskError, setTaskError] = useState(false);
    const [dueDateError, setDueDateError] = useState(false);

    // Handle Page Change for Pagination
    const handleChangePage = (_event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    // Load tasks from localStorage when component mounts
    useEffect(() => {
        const savedTasks = localStorage.getItem("tasks");
        if (savedTasks) {
            setTasks(JSON.parse(savedTasks));
        }
    }, []);

    // Save tasks to localStorage whenever tasks state changes
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    // Columns for the table
    const columns = [
        { id: "task", label: "Task" },
        { id: "dueDate", label: "Due Date" },
        { id: "createdDate", label: "Created Date" },
        { id: "activeStatus", label: "Active Status" },
        { id: "status", label: "Status" },
        { id: "priority", label: "Priority" },
        { id: "edit", label: "Edit" },
        { id: "delete", label: "Delete" },
    ];


    // Handle Add Task
    const addTask = () => {
        if (!taskInput || !dueDateInput) {
            if (!taskInput) setTaskError(true);
            if (!dueDateInput) setDueDateError(true);
            return;
        }
        if (taskInput && dueDateInput) {
            const newTask: Task = {
                id: Date.now(),
                task: taskInput,
                dueDate: dueDateInput,
                createdDate: new Date().toLocaleDateString(),
                priority: priorityInput,
                status: statusInput,
                active: activeInput,
            };
            setTasks((prevTasks) => [...prevTasks, newTask]);
            setTaskInput(""); // Clear input fields after adding task
            setDueDateInput("");
            setPriorityInput("Normal");
            setStatusInput("Not Started");
            setActiveInput(false);
            setTaskError(false); // Reset errors after adding the task
            setDueDateError(false);
        }
    };

    // Handle Status Change
    const handleStatusChange = (id: number, newStatus: string) => {
        const updatedTasks = tasks.map((task) =>
            task.id === id ? { ...task, status: newStatus } : task
        );
        setTasks(updatedTasks);
    };

    // Handle Task Delete
    const deleteTask = (id: number) => {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
    };

    const startEditing = (task: Task) => {
        setEditingTask(task);
        setTaskInput(task.task);
        setDueDateInput(task.dueDate);
        setPriorityInput(task.priority);
        setStatusInput(task.status);
        setActiveInput(task.active);
    };

    const updateTask = () => {
        if (editingTask) {
            const updatedTasks = tasks.map((task) =>
                task.id === editingTask.id
                    ? { ...task, task: taskInput, dueDate: dueDateInput, priority: priorityInput, status: statusInput, active: activeInput }
                    : task
            );
            setTasks(updatedTasks);
            clearForm();
        }
    };

    const clearForm = () => {
        setEditingTask(null);
        setTaskInput("");
        setDueDateInput("");
        setPriorityInput("Normal");
        setStatusInput("Not Started");
        setActiveInput(false);
    };

    const isSmallScreen = useMediaQuery("(max-width:600px)");

    return (

        <Paper sx={{ width: "100%" }}>
            {/* Sticky Heading */}
            <Box
                sx={{
                    position: "sticky",
                    top: 0,
                    zIndex: 2,
                    backgroundColor: "white",
                    textAlign: "center",
                    py: 2,
                }}
            >
                <div className="text-xl font-semibold text-gray-800 sm:text-2xl sm:mb-4 md:text-3xl">Todo List</div>
            </Box>

            {/* Task Form */}
            <Box sx={{ width: '100%', overflowX: 'auto' ,display:"flex", justifyContent:"center"}}>
                <Box
                    sx={{
                        display: 'flex',
                        minWidth: '300px',
                        padding: 2,
                        flexShrink: 0, // prevents shrinking inside flex parent
                        flexDirection:"column",
                        width: '100%',
                        maxWidth: '50rem',       // this limits the width
                    }}
                >
                    <TextField
                        label="Task"
                        value={taskInput}
                        onChange={(e) => setTaskInput(e.target.value)}
                        fullWidth
                        sx={{ marginBottom: 2 }}
                        error={taskError}
                        helperText={taskError ? "Task cannot be empty" : ""}
                    />
                    <TextField
                        label="Due Date"
                        value={dueDateInput}
                        onChange={(e) => setDueDateInput(e.target.value)}
                        fullWidth
                        sx={{ marginBottom: 2 }}
                        type={isFocused ? "date" : "text"} // Conditionally change type based on focus
                        onFocus={() => setIsFocused(true)}  // Set focus state to true when focused
                        onBlur={() => setIsFocused(false)} // Set focus state to false when blurred
                        error={dueDateError}
                        helperText={dueDateError ? "Due date cannot be empty" : ""}
                    />
                    <FormControl fullWidth sx={{ marginBottom: 2 }}>
                        <InputLabel>Priority</InputLabel>
                        <Select
                            value={priorityInput}
                            onChange={(e) => setPriorityInput(e.target.value)}
                            label="Priority"
                        >
                            <MenuItem value="Low">Low</MenuItem>
                            <MenuItem value="Normal">Normal</MenuItem>
                            <MenuItem value="High">High</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth sx={{ marginBottom: 2 }}>
                        <InputLabel>Status</InputLabel>
                        <Select
                            value={statusInput}
                            onChange={(e) => setStatusInput(e.target.value)}
                            label="Status"
                        >
                            <MenuItem value="Not Started">Not Started</MenuItem>
                            <MenuItem value="In Progress">In Progress</MenuItem>
                            <MenuItem value="Completed">Completed</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth sx={{ marginBottom: 2 }}>
                        <InputLabel>Active</InputLabel>
                        <Select
                            value={activeInput ? "Active" : "Inactive"}
                            onChange={(e) => setActiveInput(e.target.value === "Active")}
                            label="Active"
                        >
                            <MenuItem value="Active">Active</MenuItem>
                            <MenuItem value="Inactive">Inactive</MenuItem>
                        </Select>
                    </FormControl>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Button variant="contained" size={isSmallScreen ? "medium" : "large"} color="primary" onClick={editingTask ? updateTask : addTask}>
                            {editingTask ? "Update Task" : "Add Task"}
                        </Button>
                    </Box>
                </Box>
            </Box>

            <TableContainer sx={{ maxHeight: { xs: 500, sm: 600 } }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    sx={{
                                        backgroundColor: "#E5E7EB", // Tailwind gray-200 hex color
                                        fontWeight: "bold",
                                    }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tasks
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((task) => (
                                <TableRow hover role="checkbox" tabIndex={-1} key={task.id}>
                                    <TableCell>{task.task}</TableCell>
                                    <TableCell>{task.dueDate}</TableCell>
                                    <TableCell>{task.createdDate}</TableCell>
                                    <TableCell>{task.active ? "Active" : "Inactive"}</TableCell>
                                    <TableCell>
                                        <select
                                            className="p-2 border border-gray-300 rounded-md"
                                            value={task.status}
                                            onChange={(e) => handleStatusChange(task.id, e.target.value)}
                                        >
                                            <option value="Not Started">Not Started</option>
                                            <option value="In Progress">In Progress</option>
                                            <option value="Completed">Completed</option>
                                        </select>
                                    </TableCell>
                                    <TableCell>{task.priority}</TableCell>
                                    <TableCell sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <IconButton
                                            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                            color="primary"
                                            onClick={() => startEditing(task)}
                                        >
                                            <EditIcon />
                                        </IconButton>
                                    </TableCell>
                                    <TableCell>
                                        <IconButton
                                            color="error"
                                            onClick={() => deleteTask(task.id)}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={tasks.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
};

export default TodoList;
