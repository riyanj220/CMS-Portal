import {
    Box,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
} from "@mui/material";
import { Link } from "react-router";

const ledgerData = [
    {
        description: "N/A",
        feeNature: "Students Activities",
        session: "Fall 2023",
        date: "9/5/2023 12:00:00 AM",
        debit: 1100.0,
        credit: 0.0,
    },
    {
        description: "N/A",
        feeNature: "Security Deposit (Refundable)",
        session: "Fall 2023",
        date: "9/5/2023 12:00:00 AM",
        debit: 5000.0,
        credit: 0.0,
    },
    {
        description: "N/A",
        feeNature: "Examination",
        session: "Fall 2023",
        date: "9/5/2023 12:00:00 AM",
        debit: 5200.0,
        credit: 0.0,
    },
    {
        description: "N/A",
        feeNature: "Examination",
        session: "Fall 2023",
        date: "9/5/2023 12:00:00 AM",
        debit: 5200.0,
        credit: 0.0,
    },
    {
        description: "N/A",
        feeNature: "Examination",
        session: "Fall 2023",
        date: "9/5/2023 12:00:00 AM",
        debit: 5200.0,
        credit: 0.0,
    }, {
        description: "N/A",
        feeNature: "Examination",
        session: "Fall 2023",
        date: "9/5/2023 12:00:00 AM",
        debit: 5200.0,
        credit: 0.0,
    }, {
        description: "N/A",
        feeNature: "Examination",
        session: "Fall 2023",
        date: "9/5/2023 12:00:00 AM",
        debit: 5200.0,
        credit: 0.0,
    },
];

const FinancialLedgerCard = () => {
    return (
        <Box
            sx={{
                width: "95%",
                maxWidth: '100%',
                p: 5,
                borderRadius: 4,
                backgroundColor: "#f9fafb",
                textAlign: "center",
                mb: 5,
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 3,
                    alignItems: "center",
                }}
            >
                <Box>
                    <Typography sx={{ fontWeight: "600", fontSize: "24px", mb: 2 }}>
                        Financial Ledger
                    </Typography>
                    <Typography sx={{ fontSize: 13, color: "gray", textAlign: "left" }}>
                        Current Balance: (119800) <br />
                        Loan/Deferment Amount: (0)
                    </Typography>
                </Box>
                <Box>
                    <Box
                        component="button"
                        style={{
                            backgroundColor: "#8b5cf6",
                            color: "white",
                            borderRadius: 8,
                            border: "none",
                            padding: "6px 16px",
                            cursor: "pointer",
                            fontWeight: 500,
                            fontSize: "14px",
                        }}
                    >
                        <Link to="finantial-ledger" style={{textDecoration:'none'}}>
                            <Button size="medium" variant="contained" sx={{ borderRadius: 2, textTransform: "none", backgroundColor: "#8b5cf6" }}>
                                View
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Box>

            <TableContainer
                component={Paper}
                sx={{
                    maxHeight: 300,
                    overflowX: "auto",
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
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ backgroundColor: "#E5E7EB", fontWeight: "bold" }}>
                                Description
                            </TableCell>
                            <TableCell sx={{ backgroundColor: "#E5E7EB", fontWeight: "bold" }}>
                                Fee Nature
                            </TableCell>
                            <TableCell sx={{ backgroundColor: "#E5E7EB", fontWeight: "bold" }}>
                                Session
                            </TableCell>
                            <TableCell sx={{ backgroundColor: "#E5E7EB", fontWeight: "bold" }}>
                                Date
                            </TableCell>
                            <TableCell sx={{ backgroundColor: "#E5E7EB", fontWeight: "bold" }}>
                                Debit
                            </TableCell>
                            <TableCell sx={{ backgroundColor: "#E5E7EB", fontWeight: "bold" }}>
                                Credit
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {ledgerData.map((row, idx) => (
                            <TableRow key={idx}>
                                <TableCell>{row.description}</TableCell>
                                <TableCell>{row.feeNature}</TableCell>
                                <TableCell>{row.session}</TableCell>
                                <TableCell>{row.date}</TableCell>
                                <TableCell>{row.debit.toFixed(2)}</TableCell>
                                <TableCell>{row.credit.toFixed(2)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default FinancialLedgerCard;
