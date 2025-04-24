import { Box, Button, Paper, TextField, Typography, useMediaQuery } from "@mui/material";
import { useState } from "react";

const Fee = () => {
  const [balance, setBalance] = useState("119,800.00");

  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 2, overflowX: 'auto' }}>
      {/* Paper Component for Card-like Effect */}
      <Paper sx={{
        width: isMobile ? '100%' : '80%', 
        padding: 3, 
        borderRadius: 2, 
        boxShadow: 3, 
        backgroundColor: "#f9f9f9",
        overflowX: 'auto'  // Ensures horizontal scrolling
      }}>
        {/* Title Section */}
        <div className="text-xl mb-5 font-semibold text-center text-gray-800 sm:text-2xl sm:mb-4 md:text-3xl">Fee Management</div>

        {/* Balance Section */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 3 }}>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            Current Balance
          </Typography>
          <TextField
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
            variant="outlined"
            size="small"
            sx={{
              width: isMobile ? '60%' : '40%', // Responsive width
              marginLeft: 2,
              minWidth:"100px"
            }}
            disabled
          />
        </Box>

        {/* Generate Voucher Button */}
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              width: isMobile ? '100%' : 'auto',  // Ensures button is full-width on mobile
              padding: isMobile ? 1 : 1.5,  // Remove extra padding on mobile
              fontSize: isMobile ? '14px' : '16px',  // Adjust font size for mobile
              borderRadius: 3,
              textTransform: 'none',
              boxShadow: 2,
              '&:hover': {
                boxShadow: 3,
              }
            }}
            onClick={() => alert("Generating Voucher...")}
          >
            {isMobile ? "Generate Voucher" : "Generate Current Balance Voucher"}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Fee;
