import { useState } from 'react';
import { Box, Button, FormControl, InputLabel, Select, MenuItem, Paper, SelectChangeEvent, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { jsPDF } from 'jspdf';  // Import jsPDF for generating PDFs

export const PrintTranscript = () => {
  const [page, setPage] = useState("front");

  const handlePageChange = (event: SelectChangeEvent) => {
    setPage(event.target.value);
  };

  function createData(
    name: string,
    title: string,
    crHours: number,
    marks: number,
    grade: string,
    gps: number
  ) {
    return { name, title, crHours, marks, grade, gps };
  }

  const rows = [
    createData('HS101', 'ISLAMIC STUDIES', 2, 93, 'A', 4),
    createData('HS102T', 'FUNCTIONAL ENGLISH', 3, 99, 'A', 4),
    createData('MS108T', 'LINEAR ALGEBRA	', 3, 88, 'A', 4),
    createData('SE102L', 'PROGRAMMING FUNDAMENTALS', 1, 46, 'A', 4),
    createData('SE102T', 'PROGRAMMING FUNDAMENTALS', 3, 91, 'A', 4),
    createData('SE105L', 'INTRODUCTION TO COMPUTING', 1, 45, 'A', 4),
    createData('SE105T', 'INTRODUCTION TO COMPUTING', 2, 83, 'A', 4),
  ];

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
      <Paper sx={{ padding: 2, overflow: 'auto', maxHeight: '650px' }}>
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
          <div className="text-xl font-semibold text-gray-800 sm:text-2xl sm:mb-4 md:text-3xl">Transcript</div>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'nowrap', width: '100%', minWidth: '1100px', overflow: 'auto' }}>
          {/* Show Front or Back of Transcript based on Selection */}
          {page === "front" ? (
            <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
              {/* First Column for First Half of Data */}
              <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div><strong>Name:</strong> Riyan Jamil</div>
                <div><strong>Roll No:</strong> 2023F-BSE-075</div>
                <div><strong>Degree Status:</strong> In-Progress</div>
                <div><strong>Batch:</strong> 2023F</div>
              </Box>

              {/* Second Column for Second Half of Data */}
              <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div><strong>Mode of Study:</strong> Regular</div>
                <div><strong>Father's Name:</strong> Muhammad Jamil</div>
                <div><strong>Enrolment No:</strong> 1111F/SE/2023F</div>
                <div><strong>CNIC / Passport No:</strong> XXXXX-XXXXXX-X</div>
              </Box>

              {/* Third Column for Image */}
              <Box sx={{ flex: 0.5, display: 'flex', justifyContent: 'flex-end' }}>
                <img
                  src="../../images/avatar.png" // Your image path
                  alt="Riyan Jamil"
                  style={{ width: '120px', height: '120px' }}
                />
              </Box>
            </Box>
          ) : (
            <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column' }} />
          )}
        </Box>

        {/* Display Tables inside the Transcript card when page is "front" */}
        {page === "front" && (
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1rem', marginTop: 4, minWidth: '1100px', width: '100%', flexWrap: 'nowrap' }}>
            {/* First Table */}
            <TableContainer component={Paper} sx={{ flex: 1 }}>
              <Table sx={{ minWidth: 450 }} size="small" aria-label="a dense table">
                <TableHead >
                  <TableRow sx={{
                  backgroundColor: 'rgb(209 213 219)', // Tailwind gray-200 hex color
                  fontWeight: "bold",
                }}>
                    <TableCell align="center" colSpan={6}>Fall 2023</TableCell>
                  </TableRow>
                  <TableRow sx={{
                  backgroundColor: "#E5E7EB", // Tailwind gray-200 hex color
                }}>
                    <TableCell sx={{ flex: 0.5 }}>Course No.</TableCell>
                    <TableCell sx={{ flex: 2 }}>Course Title</TableCell>
                    <TableCell align="right" sx={{ flex: 1 }}>Cr Hrs</TableCell>
                    <TableCell align="right" sx={{ flex: 1 }}>Marks</TableCell>
                    <TableCell align="right" sx={{ flex: 1 }}>Grade</TableCell>
                    <TableCell sx={{ flex: 0.5 }}>GPs</TableCell>
                  </TableRow>

                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell>{row.name}</TableCell> 
                      <TableCell >{row.title}</TableCell>
                      <TableCell align="right">{row.crHours}</TableCell>
                      <TableCell align="right">{row.marks}</TableCell>
                      <TableCell align='right'>{row.grade}</TableCell>
                      <TableCell align='right'>{row.gps}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            {/* Second Table */}
            <TableContainer component={Paper} sx={{ flex: 1 }}>
              <Table sx={{ minWidth: 450 }} size="small" aria-label="a dense table">
                <TableHead sx={{
                  backgroundColor: "#E5E7EB", // Tailwind gray-200 hex color
                  fontWeight: "bold",
                }}>
                  <TableRow sx={{
                  backgroundColor: 'rgb(209 213 219)', // Tailwind gray-200 hex color
                  }}>
                    <TableCell align="center" colSpan={6}>Spring 2024</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Course No.</TableCell>
                    <TableCell>Course Title</TableCell>
                    <TableCell align="right">Cr Hrs</TableCell>
                    <TableCell align="right">Marks</TableCell>
                    <TableCell align="right">Grade</TableCell>
                    <TableCell>GPs</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell>{row.name}</TableCell> 
                      <TableCell>{row.title}</TableCell>
                      <TableCell align="right">{row.crHours}</TableCell>
                      <TableCell align="right">{row.marks}</TableCell>
                      <TableCell align='right'>{row.grade}</TableCell>
                      <TableCell align='right'>{row.gps}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}
      </Paper>
    </Box>
  );
};
