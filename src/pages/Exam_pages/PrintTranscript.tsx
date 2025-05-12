import { useState } from 'react';
import { Box, Button, FormControl, InputLabel, Select, MenuItem, Paper, SelectChangeEvent, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import html2canvas from 'html2canvas-pro';
import { jsPDF } from 'jspdf';  

declare global {
  interface Window {
    html2canvas: typeof html2canvas;
  }
}
window.html2canvas = html2canvas;

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
    srNo: number,
    semester: string,
    totalCrHours: number,
    earnedCrHours: number,
    earnedGp: number,
    earnedGpa: number,
    CGPA: string,
    numberOfCoursesPassed: number
  ) {
    return { srNo, semester, totalCrHours, earnedCrHours, earnedGp, earnedGpa, CGPA, numberOfCoursesPassed }
  }

  const rowsForSemesterWiseTable = [
    createDataForSemesterWiseTable(1, '1st Semester', 15, 15, 59.32, 3.95, '', 7),
    createDataForSemesterWiseTable(2, '2nd Semester', 17, 17, 67.66, 3.98, "3.96", 8),
    createDataForSemesterWiseTable(3, '3rd Semester', 17, 17, 66.98, 3.95, '', 7),
  ]

  function createDataForTranscriptBackSideGradeInterpretation(
    grade: string,
    interpretation: string,
  ) {
    return { grade, interpretation };
  }

  const rowsForTranscriptBackSideGradeInterpretation = [
    createDataForTranscriptBackSideGradeInterpretation('F/R', 'Failed course replaced with another one.'),
    createDataForTranscriptBackSideGradeInterpretation('NC', 'Non-credit course and not included in the calculation of CGPA.'),
    createDataForTranscriptBackSideGradeInterpretation('S', 'Satisfactory, S is counted towards credits but not used in the calculation of CGPA.'),
    createDataForTranscriptBackSideGradeInterpretation('I', 'Incomplete, to be replaced by the grade earned later on.'),
    createDataForTranscriptBackSideGradeInterpretation('W', 'Withdrawn'),
    createDataForTranscriptBackSideGradeInterpretation('U', 'Unsatisfactory, U is neither counted towards credits not used in the calculation of CGPA.'),

  ]

  const createDataForTranscriptBackSideShortForms = (shortform: string, interpretation: string) => {
    return { shortform, interpretation }
  };

  const rowsForTranscriptBackSideShortForms = [
    createDataForTranscriptBackSideShortForms('SGPA', 'Semester Grade Point Average.'),
    createDataForTranscriptBackSideShortForms('CGPA', '	Cumulative Grade Point Average.'),
    createDataForTranscriptBackSideShortForms('R-n', 'Repeat count -n, n is the number of times a course is repeated.Points from the most recent attempt are used in the calculation of CGPA.'),
    createDataForTranscriptBackSideShortForms('Rp-n', '	Replacement n, Rp-n appears in Remarks in front of two courses (course1 taken prior to course 2) representing that course 1 is replace by course 2.')
  ];


const handleDownloadPDF = async () => {
  const sectionId = page === 'front' ? 'transcript-front' : 'transcript-back';
  const element = document.getElementById(sectionId);

  if (!element) {
    console.warn("Transcript section not found.");
    return;
  }

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    backgroundColor: "#ffffff"
  });

  const imgData = canvas.toDataURL('image/jpeg', 1.0);
  const pdf = new jsPDF('p', 'mm', 'a4');

  const imgProps = pdf.getImageProperties(imgData);
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

  pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
  pdf.save(`${sectionId}.pdf`);
};

  console.log("html2canvas version in use:", window.html2canvas);



  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', overflow: "auto" }} id="transcript-front">
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
            top: '-17px',
            zIndex: 1,
            backgroundColor: "white",
            textAlign: "center",
            py: 2,
            minWidth: '1100px', // Ensure full width
          }}
        >

          {page === 'front' ? (
            <div className="text-xl font-semibold text-gray-800 sm:text-2xl sm:mb-4 md:text-3xl">Transcript</div>
          ) : (<div className="text-xl font-semibold text-gray-800 sm:text-2xl sm:mb-4 md:text-3xl">Interpretation of Transcript Contents</div>)}


        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'nowrap', width: '100%', minWidth: '1100px', overflow: 'auto' }}>
          {/* Show Front or Back of Transcript based on Selection */}
          {page === "front" ? (
            <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
              {/* First Column for First Half of Data */}
              <Box id ="test" sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
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
            <Box id="transcript-back" sx={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: 4, minWidth: '1100px', width: '100%' }}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow sx={{
                      backgroundColor: "#E5E7EB", // Tailwind gray-200 hex color
                    }}>
                      <TableCell align="left">Grade</TableCell>
                      <TableCell align="left">Interpretation</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rowsForTranscriptBackSideGradeInterpretation.map((row, index) => (
                      <TableRow
                        key={index}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {row.grade}
                        </TableCell>
                        <TableCell align="left">{row.interpretation}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>


              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow sx={{
                      backgroundColor: "#E5E7EB", // Tailwind gray-200 hex color
                    }}>
                      <TableCell>Shortform </TableCell>
                      <TableCell align="left">Interpretation</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rowsForTranscriptBackSideShortForms.map((row, index) => (
                      <TableRow
                        key={index}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {row.shortform}
                        </TableCell>
                        <TableCell align="left">{row.interpretation}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <Box display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'} >
                <div className="flex flex-col items-center gap-3 mt-4 mb-2 min-w-2xl">
                  <div className="text-lg font-bold underline">Grading System</div>
                  <div className="border border-black w-full">
                    <div className="flex">
                      <div className="flex-1 border-r border-black items-center justify-center text-center p-3.5 font-semibold">Numerical Grade</div>
                      <div className="flex-1 border-r border-black text-center p-3.5 font-semibold">Grade Point</div>
                      <div className="flex-1 border-r border-black text-center p-3.5 font-semibold">Letter Grade</div>
                      <div className="flex-1 text-center p-3.5 font-semibold">Value Remarks</div>
                    </div>
                  </div>

                  <div className="text-lg font-bold underline mt-5">Degree Requirements:</div>
                  <div className='text-lg font-semibold'>
                    Cumulative Grade Point Average (CGPA) minimum 2.0 calculated for all semesters.
                  </div>
                  <div className='text-lg font-semibold'>
                    CGPA = (Total Grade Points / Total Credit Hours)
                  </div>
                </div>
              </Box>

              <Box>
                <div className='flex flex-col gap-2 mb-4 text-lg font-semibold'>
                  <div>Charter Date:	25-Oct-95</div>
                  <div>Date of Admission:</div>
                  <div>Date of Completion:</div>
                  <div>Admssion Required: HSC/DAE or Equivalent Examination</div>
                  <div>Previous Degree:	Nil</div>
                  <div>Controller of Examinations:</div>
                </div>
              </Box>
            </Box>
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
              <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', mb: 2 }}>
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

            <TableContainer component={Paper} sx={{ marginBottom: 2, overflow: 'unset' }}>
              <Table sx={{ minWidth: 1100 }} size="small" aria-label="a dense table">
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

            <Box
              sx={{
                mt: 5,
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                justifyContent: 'space-between',
                gap: '3rem',
                whiteSpace: 'nowrap', // prevents wrapping
                mb: 4
              }}
            >
              <div>
                Prepared By: _____________________________
              </div>
              <div>
                Checked By: ______________________________
              </div>
              <div>
                Controller of Examinations: ___________________________
              </div>
            </Box>

            <Box sx={{ overflow: 'auto', display: 'flex', flexDirection: 'column', minWidth: '1100px', mb: '40', gap: '0.5rem' }}>
              <div className='text-xl'>
                DISCLAIMER/PROCLAMATION
              </div>
              <div>
                Error and omissions are expected. Any entry appearing therein does not in itself confer any right or privilege to a student for the grant of any semester mark sheet/transcript or Degree, which will be issued under the rules and regulations on the basis of original record of the SSUET.
              </div>
              <div>
                1. The University reserves the right to correct, modify or change the results at any time on the basis of original record or in any manner if found to have been wrongly computed or compiled. Typographical error, if any, will not entitle anybody to interpret the result in his/her favor and to claim any advantage therefrom. The University reserves the right to correct such mistakes as and when they come to notice and no action shall lie against the University.
              </div>
              <div>
                2. Every care has been taken to ensure that the results are accurate. The University, however, does not hold itself responsible for any omission or mistake of results notification.
              </div>
              <div>
                3.Declaration by the Student: I understand that I am being allowed to appear in the above examinations on the condition that I have completed the attendance requirement. If my attendance is short or I have not fulfilled any other condition of appearing in examinations, my result may be canceled.
              </div>
              <div>
                4. Note: Ineligible candidates shall not claim any right for the announcement of their results if an admit card is issued to them inadvertently on the basis of incorrect/false information.
              </div>
            </Box>


          </>
        )}



      </Paper>
    </Box>
  );
};
