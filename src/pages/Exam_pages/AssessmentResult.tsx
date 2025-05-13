import { Box, Button, Paper, Stack, Table, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material"
import { useEffect, useState } from "react";

const sessions = [
  {
    value: 'Spring 2025',
    label: 'Spring 2025',
  },
  {
    value: 'Fall 2024',
    label: 'Spring 2024',
  },
  {
    value: 'Fall 2023',
    label: 'Fall 2023',
  },
];

interface Course {
  value: string;
  label: string;
}

const courses: { [key: string]: Course[] } = {
  'Spring 2025': [
    { value: 'Introduction To Database Systems', label: 'Introduction To Database Systems' },
    { value: 'Introduction To Database Systems Lab', label: 'Introduction To Database Systems Lab' },
  ],
  'Fall 2024': [
    { value: 'Probability & Statistics', label: 'Probability & Statistics' },
    { value: 'Technical Report Writing', label: 'Technical Report Writing' },
  ],
  'Fall 2023': [
    { value: 'Software Design & Architecture', label: 'Software Design & Architecture' },
    { value: 'Software Design & Architecture Lab', label: 'Software Design & Architecture Lab' },
  ]
};

const createData = (
  assementType: string,
  assessment: string,
  courseCode: string,
  sectionCode: string,
  teacher: string,
  totalMarks: number,
  marksObtained: number
) => {
  return { assementType, assessment, courseCode, sectionCode, teacher, totalMarks, marksObtained };
};

const rows = [
  createData('Mid Term', 'MT1', 'INTRODUCTION TO DATABASE SYSTEMS, ( SE209T )', 'Spring 2025-2023F-BS-SE-SE209T-B-17231', 'Engr. Kiran Hidayat', 15, 14),
  createData('Mid Term', 'MT2', 'INTRODUCTION TO DATABASE SYSTEMS, ( SE209T )', 'Spring 2025-2023F-BS-SE-SE209T-B-17231', 'Engr. Kiran Hidayat', 15, 14),
];

export const AssessmentResult = () => {
  const [selectedSession, setSelectedSession] = useState('Spring 2025');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [filteredRows, setFilteredRows] = useState(rows);
  const [isLoading, setIsLoading] = useState(true);

  const handleSessionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSession(event.target.value);
    setSelectedCourse(''); // Reset course selection
  };

  const handleCourseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCourse(event.target.value);
  };

  useEffect(() => {
    if (selectedCourse) {
      const newFilteredRows = rows.filter((row) =>
        row.courseCode.toLowerCase().includes(selectedCourse.toLowerCase())
      );
      setFilteredRows(newFilteredRows);
    } else {
      setFilteredRows([]);
    }
    setIsLoading(false);
  }, [selectedCourse]);


  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false); // Stop loading after 2 seconds
    }, 2000);

    return () => clearTimeout(loadingTimeout);
  }, []);


  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', overflow: "auto" }} >
      <Paper sx={{ padding: 2, overflow: 'auto', maxHeight: '680px' }}>
        <Box
          sx={{
            position: "sticky",
            top: '-17px',
            zIndex: 1,
            backgroundColor: "white",
            textAlign: "center",
            py: 2,
            minWidth: '1100px',
          }}
        >
          <div className="text-xl font-semibold text-gray-800 sm:text-2xl sm:mb-4 md:text-3xl">Assessment Result</div>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1rem', marginTop: 4, minWidth: '1100px', width: '100%' }}>
            <Box
              component="form"
              sx={{ '& .MuiTextField-root': { m: 1, width: '45ch', mb: '50px' } }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  id="outlined-select-currency-native"
                  select
                  label="Session"
                  value={selectedSession}
                  onChange={handleSessionChange}
                  slotProps={{
                    select: { native: true },
                  }}
                  helperText="Please select your session"
                >
                  {sessions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>

                <TextField
                  id="outlined-select-currency-native"
                  select
                  value={selectedCourse}
                  onChange={handleCourseChange}
                  slotProps={{
                    select: { native: true },
                  }}
                  helperText="Please select your course"
                >
                  <option value="" disabled>Select a course</option>
                  {selectedSession && courses[selectedSession]?.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </div>
            </Box>
          </Box>

          {isLoading ? (
            <Stack spacing={2}>
              <Stack direction="row" spacing={2}>
                <Button loading variant="outlined">
                  Submit
                </Button>
              </Stack>
            </Stack>
          ) : (
            <TableContainer component={Paper} sx={{ marginBottom: 4, flexDirection: 'column' }}>
              <Table sx={{ minWidth: 450 }} size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow sx={{
                    backgroundColor: "#E5E7EB", // Tailwind gray-200 hex color
                  }}>
                    <TableCell sx={{ flex: 0.5 }}>Assessment Type</TableCell>
                    <TableCell sx={{ flex: 2 }}>Assessment</TableCell>
                    <TableCell align="center" sx={{ flex: 1 }}>Course (Code)</TableCell>
                    <TableCell align="center" sx={{ flex: 1 }}>Section Code</TableCell>
                    <TableCell align="center" sx={{ flex: 1 }}>Teacher</TableCell>
                    <TableCell align="left" sx={{ flex: 1 }}>Total Marks</TableCell>
                    <TableCell align="left" sx={{ flex: 1 }}>Marks Obtained</TableCell>
                  </TableRow>
                </TableHead>
                {filteredRows.length > 0 ? (
                  filteredRows.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell align="center">{row.assementType}</TableCell>
                      <TableCell align="center">{row.assessment}</TableCell>
                      <TableCell align="left">{row.courseCode}</TableCell>
                      <TableCell align="left">{row.sectionCode}</TableCell>
                      <TableCell align="left">{row.teacher}</TableCell>
                      <TableCell align="center">{row.totalMarks}</TableCell>
                      <TableCell align="center">{row.marksObtained}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7} align="center">No data available for the selected course</TableCell>
                  </TableRow>
                )}
              </Table>
            </TableContainer>
          )}
        </Box>
      </Paper>
    </Box>
  );
};
