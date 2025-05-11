import { useState } from 'react';
import { Box, Button, FormControl, InputLabel, Select, MenuItem, Paper, SelectChangeEvent, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { jsPDF } from 'jspdf';  // Import jsPDF for generating PDFs

export const PrintTranscript = () => {
  const [page, setPage] = useState("front");

  const handlePageChange = (event: SelectChangeEvent) => {
    setPage(event.target.value);
  };

  function createData(
    code: string,
    title: string,
    crHours: number,
    marks: number,
    grade: string,
    gps: number
  ) {
    return { code, title, crHours, marks, grade, gps };
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

  function createDataForMarksTable(
    maxMarks: number,
    marksObtained: number,
  ) {
    return { maxMarks, marksObtained };
  }

  const rowsForMarksTable = [
    createDataForMarksTable(1850.00, 1667.00),
  ];

  function createDataForSemesterWiseTable(
    srNo:number,
    semester:string,
    totalCrHours:number,
    earnedCrHours:number,
    earnedGp:number,
    earnedGpa:number,
    CGPA: string,
    numberOfCoursesPassed:number
  )
  {
    return {srNo,semester, totalCrHours, earnedCrHours, earnedGp, earnedGpa, CGPA, numberOfCoursesPassed}
  }

  const rowsForSemesterWiseTable = [
    createDataForSemesterWiseTable(1,'1st Semester', 15, 15,59.32,3.95,'',7),
    createDataForSemesterWiseTable(2,'2nd Semester', 17, 17,67.66,3.98,"3.96",8),
    createDataForSemesterWiseTable(3,'3rd Semester', 17, 17,66.98,3.95,'',7),
  ]

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
    <Box sx={{ display: 'flex', flexDirection: 'column', overflow: "auto" }}>
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
      <Paper sx={{ padding: 2, overflow: 'auto', maxHeight: '680px' }}>
        <Box
          sx={{
            position: "sticky",
            top: '-15px',
            zIndex: 1,
            backgroundColor: "white",
            textAlign: "center",
            py: 2,
            minWidth: '1100px', // Ensure full width
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
          <>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1rem', marginTop: 4, minWidth: '1100px', width: '100%' }}>
              {/* First Table */}
              <TableContainer component={Paper} sx={{ marginBottom: 4, flexDirection: 'column' }}>
                <Table sx={{ minWidth: 450 }} size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow sx={{
                      backgroundColor: 'rgb(209 213 219)', // Tailwind gray-200 hex color
                      fontWeight: "bold",
                    }}>
                      <TableCell align="center" colSpan={6}>Fall 2023</TableCell>
                    </TableRow>
                    <TableRow sx={{
                      backgroundColor: "#E5E7EB", // Tailwind gray-200 hex color
                    }}>
                      <TableCell sx={{ flex: 0.5 }}>Course Code</TableCell>
                      <TableCell sx={{ flex: 2 }}>Course Title</TableCell>
                      <TableCell align="right" sx={{ flex: 1 }}>Cr Hrs</TableCell>
                      <TableCell align="right" sx={{ flex: 1 }}>Marks</TableCell>
                      <TableCell align="right" sx={{ flex: 1 }}>Grade</TableCell>
                      <TableCell sx={{ flex: 0.5 }}>GPs</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.code}>
                        <TableCell>{row.code}</TableCell>
                        <TableCell>{row.title}</TableCell>
                        <TableCell align="right">{row.crHours}</TableCell>
                        <TableCell align="right">{row.marks}</TableCell>
                        <TableCell align="right">{row.grade}</TableCell>
                        <TableCell align="right">{row.gps}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2, ml: 2 }}>
                  {/* First Column */}
                  <Box sx={{ flex: 1 }}>
                    <div><strong>Total Credit Hours:</strong> 15</div>
                    <div><strong>GPA:</strong> 3.95</div>
                    <div><strong>CGPA:</strong> 3.95</div>
                  </Box>

                  {/* Second Column */}
                  <Box sx={{ flex: 1 }}>
                    <div><strong>Start Date:</strong> 09-10-2023</div>
                    <div><strong>End Date:</strong> 30-01-2024</div>
                  </Box>
                </Box>

              </TableContainer>

              {/* Second Table */}
              <TableContainer component={Paper} sx={{ marginBottom: 4, flexDirection: 'column' }}>
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
                      <TableCell>Course Code</TableCell>
                      <TableCell>Course Title</TableCell>
                      <TableCell align="right">Cr Hrs</TableCell>
                      <TableCell align="right">Marks</TableCell>
                      <TableCell align="right">Grade</TableCell>
                      <TableCell>GPs</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.code}>
                        <TableCell>{row.code}</TableCell>
                        <TableCell>{row.title}</TableCell>
                        <TableCell align="right">{row.crHours}</TableCell>
                        <TableCell align="right">{row.marks}</TableCell>
                        <TableCell align="right">{row.grade}</TableCell>
                        <TableCell align="right">{row.gps}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2, mb: 2, ml: 2 }}>
                  {/* First Column */}
                  <Box sx={{ flex: 1 }}>
                    <div><strong>Total Credit Hours:</strong> 15</div>
                    <div><strong>GPA:</strong> 3.95</div>
                    <div><strong>CGPA:</strong> 3.95</div>
                  </Box>

                  {/* Second Column */}
                  <Box sx={{ flex: 1 }}>
                    <div><strong>Start Date:</strong> 09-10-2023</div>
                    <div><strong>End Date:</strong> 30-01-2024</div>
                  </Box>
                </Box>
              </TableContainer>
            </Box>

            <TableContainer component={Paper} sx={{ marginBottom: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' ,mb:2}}>
                <Table sx={{ maxWidth: 650 }} aria-label="simple table">
                  <TableHead sx={{ backgroundColor: 'rgb(209 213 219)' }}>
                    <TableRow>
                      <TableCell align='center'>Maximum Marks</TableCell>
                      <TableCell align="center">Marks Obtained</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rowsForMarksTable.map((row, index) => (
                      <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row" align='center'>
                          {row.maxMarks}
                        </TableCell>
                        <TableCell align="center">{row.marksObtained}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </TableContainer>

            <TableContainer component={Paper} sx={{ marginBottom: 2}}>
                <Table sx={{ minWidth: 450 }} size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow sx={{
                      backgroundColor: 'rgb(209 213 219)', // Tailwind gray-200 hex color
                      fontWeight: "bold",
                    }}>
                      <TableCell align="center" colSpan={8}>Updated Semester wise Status</TableCell>
                    </TableRow>
                    <TableRow sx={{
                      backgroundColor: "#E5E7EB", // Tailwind gray-200 hex color
                    }}>
                      <TableCell sx={{ flex: 0.5 }}>S.No</TableCell>
                      <TableCell sx={{ flex: 2 }}>Semester</TableCell>
                      <TableCell align="center" sx={{ flex: 1 }}>Total Cr. Hr.</TableCell>
                      <TableCell align="center" sx={{ flex: 1 }}>Earned Cr.Hr.</TableCell>
                      <TableCell align="center" sx={{ flex: 1 }}>Earned G.P</TableCell>
                      <TableCell align='center' sx={{ flex: 0.5 }}>Earned GPA</TableCell>
                      <TableCell align='center' sx={{ flex: 0.5 }}>CGPA</TableCell>
                      <TableCell align='center' sx={{ flex: 0.5 }}>No of Courses Passed</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rowsForSemesterWiseTable.map((row) => (
                      <TableRow key={row.srNo}>
                        <TableCell>{row.srNo}</TableCell>
                        <TableCell>{row.semester}</TableCell>
                        <TableCell align="center">{row.totalCrHours}</TableCell>
                        <TableCell align="center">{row.earnedCrHours}</TableCell>
                        <TableCell align="center">{row.earnedGp}</TableCell>
                        <TableCell align="center">{row.earnedGpa}</TableCell>
                        <TableCell align="center">{row.CGPA}</TableCell>
                        <TableCell align="center">{row.numberOfCoursesPassed}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                

              </TableContainer>

          </>
        )}



      </Paper>
    </Box>
  );
};
