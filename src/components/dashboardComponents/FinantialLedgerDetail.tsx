import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Box, Typography } from '@mui/material';

interface Column {
    id:
    | 'date'
    | 'transactionType'
    | 'feeBillNo'
    | 'feeNature'
    | 'session'
    | 'date1'
    | 'debit'
    | 'credit'
    | 'charging'
    | 'amount'
    | 'currentBalance';
    label: string;
    minWidth?: number;
    align?: 'right' | 'left';
    format?: (value: number) => string;
}

const columns: readonly Column[] = [
    { id: 'date', label: 'DATE', minWidth: 130 },
    { id: 'transactionType', label: 'TRANSACTION TYPE', minWidth: 130 },
    { id: 'feeBillNo', label: 'FEE BILL NO', minWidth: 130 },
    { id: 'feeNature', label: 'FEE NATURE', minWidth: 170 },
    { id: 'session', label: 'SESSION', minWidth: 130 },
    { id: 'date1', label: 'DATE1', minWidth: 130 },
    { id: 'debit', label: 'DEBIT', minWidth: 100, align: 'right', format: (value) => value.toFixed(2) },
    { id: 'credit', label: 'CREDIT', minWidth: 100, align: 'right', format: (value) => value.toFixed(2) },
    { id: 'charging', label: 'CHARGING', minWidth: 100, align: 'right', format: (value) => value.toFixed(2) },
    { id: 'amount', label: 'AMOUNT', minWidth: 100, align: 'right', format: (value) => value.toFixed(2) },
    { id: 'currentBalance', label: 'CURRENT BALANCE', minWidth: 130, align: 'right', format: (value) => value.toFixed(2) },
];

interface Data {
    date: string;
    transactionType: string;
    feeBillNo: string;
    feeNature: string;
    session: string;
    date1: string;
    debit: number;
    credit: number;
    charging: number;
    amount: number;
    currentBalance: number;
}

function createData(
    date: string,
    transactionType: string,
    feeBillNo: string,
    feeNature: string,
    session: string,
    date1: string,
    debit: number,
    credit: number,
    charging: number,
    amount: number,
    currentBalance: number
): Data {
    return { date, transactionType, feeBillNo, feeNature, session, date1, debit, credit, charging, amount, currentBalance };
}

const rows = [
    createData('9/5/2023 12:00:00 AM', 'Receivable', '1881341', 'Students Activities', 'Fall 2023', '9/5/2023 12:00:00 AM', 1100.00, 0.00, 1100.00, 0.00, 1100.00),
    createData('9/5/2023 12:00:00 AM', 'Receivable', '1881341', 'Security Deposit (Refundable)', 'Fall 2023', '9/5/2023 12:00:00 AM', 5000.00, 0.00, 5000.00, 0.00, 6100.00),
    createData('9/5/2023 12:00:00 AM', 'Receivable', '1881341', 'Examination', 'Fall 2023', '9/5/2023 12:00:00 AM', 5200.00, 0.00, 5200.00, 0.00, 11300.00),
    createData('9/5/2023 12:00:00 AM', 'Receivable', '1881341', 'Examination', 'Fall 2023', '9/5/2023 12:00:00 AM', 5200.00, 0.00, 5200.00, 0.00, 11300.00),
    createData('9/5/2023 12:00:00 AM', 'Receivable', '1881341', 'Examination', 'Fall 2023', '9/5/2023 12:00:00 AM', 5200.00, 0.00, 5200.00, 0.00, 11300.00),
    createData('9/5/2023 12:00:00 AM', 'Receivable', '1881341', 'Examination', 'Fall 2023', '9/5/2023 12:00:00 AM', 5200.00, 0.00, 5200.00, 0.00, 11300.00),
    createData('9/5/2023 12:00:00 AM', 'Receivable', '1881341', 'Examination', 'Fall 2023', '9/5/2023 12:00:00 AM', 5200.00, 0.00, 5200.00, 0.00, 11300.00),
    createData('9/5/2023 12:00:00 AM', 'Receivable', '1881341', 'Examination', 'Fall 2023', '9/5/2023 12:00:00 AM', 5200.00, 0.00, 5200.00, 0.00, 11300.00),
    createData('9/5/2023 12:00:00 AM', 'Receivable', '1881341', 'Examination', 'Fall 2023', '9/5/2023 12:00:00 AM', 5200.00, 0.00, 5200.00, 0.00, 11300.00),
    createData('9/5/2023 12:00:00 AM', 'Receivable', '1881341', 'Examination', 'Fall 2023', '9/5/2023 12:00:00 AM', 5200.00, 0.00, 5200.00, 0.00, 11300.00),
    createData('9/5/2023 12:00:00 AM', 'Receivable', '1881341', 'Examination', 'Fall 2023', '9/5/2023 12:00:00 AM', 5200.00, 0.00, 5200.00, 0.00, 11300.00),
    createData('9/5/2023 12:00:00 AM', 'Receivable', '1881341', 'Examination', 'Fall 2023', '9/5/2023 12:00:00 AM', 5200.00, 0.00, 5200.00, 0.00, 11300.00),
];

export default function FinantialLedgerDetail() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (_event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            {/* Student Info Section */}
            <Box
                sx={{
                    position: "sticky",
                    top: 0,
                    zIndex: 2,
                    backgroundColor: "white",
                    textAlign: "center",
                    py: 2,
                    mt: 2
                }}
            >
                <div className="text-xl font-semibold text-gray-800 sm:text-2xl sm:mb-4 md:text-3xl">Finantial Ledger Details</div>
            </Box>

            <Box
                sx={{
                    px: 3,
                    py: 2,
                    fontSize: 14,
                    color: 'text.primary',
                    borderRadius: 2,
                    backgroundColor: '#f5f7fa', // subtle light background
                    boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
                    maxWidth: 600,
                    mx: 'auto', // center horizontally
                    mb: 3,
                    lineHeight: 1.6,
                }}
            >
                <Typography sx={{ mb: 0.8 }}>
                    <strong>REPORT DATE:</strong> 01-Jun-2025 04:06:20
                </Typography>
                <Typography sx={{ mb: 0.8 }}>
                    <strong>Student:</strong> 2023F-BSE-075 / RIYAN JAMIL
                </Typography>
                <Typography sx={{ mb: 0.8 }}>
                    <strong>Program Structure:</strong> (BS) - Software Engineering - MOR
                </Typography>
                <Typography sx={{ mb: 0 }}>
                    <strong>Current Balance:</strong> 119800
                </Typography>
            </Box>

            <TableContainer
                component={Paper}
                sx={{
                    maxHeight: 400,
                    overflowX: "auto",
                    m: 2,
                    pr: 2,
                    borderRadius: 2,
                    // 👇 Custom scrollbar styling
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
                }}
            >
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                    sx={{ backgroundColor: '#E5E7EB', fontWeight: 'bold' }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 6, pr: 3, mt: 1, mb: 1 }}>
                <Box sx={{ textAlign: 'right' }}>
                    <Typography sx={{ fontWeight: 'bold' }}>Total :</Typography>
                    <Typography sx={{ fontWeight: 'bold' }}>483000.00</Typography>
                </Box>
                <Box sx={{ textAlign: 'right' }}>
                    <Typography sx={{ fontWeight: 'bold' }}>Total :</Typography>
                    <Typography sx={{ fontWeight: 'bold' }}>363200.00</Typography>
                </Box>
            </Box>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}