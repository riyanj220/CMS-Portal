import { useState } from 'react';
import { Box, Button, FormControl, InputLabel, Select, MenuItem,Paper, SelectChangeEvent } from '@mui/material';
import { jsPDF } from 'jspdf';  // Import jsPDF for generating PDFs

export const PrintTranscript = () => {
  const [page, setPage] = useState("front");

  const handlePageChange = (event: SelectChangeEvent) => {
    setPage(event.target.value);
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    // Front Page Content
    if (page === "front") {
      doc.text("Transcript - Front Page", 10, 10);
      doc.text("Name: Ryan Jamil", 10, 20);
      doc.text("Father's Name: Muhammad Jamil", 10, 30);
      doc.text("Enrolment No: 2019BSSE123", 10, 40);
      doc.text("Program: Software Engineering", 10, 50);
      doc.text("Batch: 2023", 10, 60);
      doc.text("CGPA: 3.95", 10, 70);

      // Add course data for Front page (example)
      doc.text("Course 1: Software Engineering - Grade: A", 10, 80);
      doc.text("Course 2: Data Structures - Grade: A-", 10, 90);

      // Add more content as needed
    }

    // Back Page Content
    if (page === "back") {
      doc.text("Transcript - Back Page", 10, 10);
      doc.text("Start Date: 01-09-2023", 10, 20);
      doc.text("End Date: 30-06-2024", 10, 30);
      doc.text("GPA: 3.8", 10, 40);
      doc.text("CGPA: 3.95", 10, 50);

      // Add more content for back page
    }

    doc.save("transcript.pdf");
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', padding: 2, overflow: "auto" }}>
      {/* Header with Dropdown for Front/Back selection */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
        <FormControl sx={{ width: '30%' }}>
          <InputLabel>Page</InputLabel>
          <Select
            value={page}
            onChange={handlePageChange}
            label="Page"
            fullWidth
          >
            <MenuItem value="front">Front</MenuItem>
            <MenuItem value="back">Back</MenuItem>
          </Select>
        </FormControl>

        {/* Download Button */}
        <Button
          variant="contained"
          color="primary"
          onClick={handleDownloadPDF}
        >
          Download
        </Button>
      </Box>

      {/* Scrollable Container for Transcript */}
      <Paper sx={{ padding: 3, overflow: 'auto', maxHeight: '600px' }}>
      <div className="text-xl text-center font-semibold text-gray-800 sm:text-2xl sm:mb-4 md:text-3xl">Transcript</div>

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          {/* Show Front or Back of Transcript based on Selection */}
          {page === "front" ? (
            <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
              <img src="/path/to/front-image.jpg" alt="Front Page" style={{ maxWidth: '100%', objectFit: 'contain' }} />
            </Box>
          ) : (
            <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
              <img src="/path/to/back-image.jpg" alt="Back Page" style={{ maxWidth: '100%', objectFit: 'contain' }} />
            </Box>
          )}
        </Box>
      </Paper>
    </Box>
  );
};
