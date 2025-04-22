import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';

interface Column {
  id: keyof Data;
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: any) => string;
}

interface Data {
  course: string;
  courseCode: string;
  semester: string;
  session: string;
  fromDate: string;
  coursePassed: string;
  sectionCode: string;
  faculty: string;
  timings: string;
}

const columns: Column[] = [
  { id: 'course', label: 'COURSE', minWidth: 170 },
  { id: 'courseCode', label: 'COURSE CODE', minWidth: 120 },
  { id: 'semester', label: 'SEMESTER', minWidth: 100 },
  { id: 'session', label: 'SESSION', minWidth: 100 },
  { id: 'fromDate', label: 'FROM DATE', minWidth: 120 },
  { id: 'coursePassed', label: 'COURSE PASSED STATUS', minWidth: 180 },
  { id: 'sectionCode', label: 'SECTION CODE', minWidth: 120 },
  { id: 'faculty', label: 'FACULTY', minWidth: 170 },
  { id: 'timings', label: 'TIMINGS', minWidth: 120 },
];

function createData(
  course: string,
  courseCode: string,
  semester: string,
  session: string,
  fromDate: string,
  coursePassed: string,
  sectionCode: string,
  faculty: string,
  timings: string
): Data {
  return {
    course,
    courseCode,
    semester,
    session,
    fromDate,
    coursePassed,
    sectionCode,
    faculty,
    timings,
  };
}

const rows = [
  createData('Probability & Satistics', 'MS301T - 2002', '4th', 'Spring 2025', ' 2025	1/2/2025 12:00:00 AM', 'Final result not created', 'Spring 2025-2023F-BS-SE-MS301T-B-17239', 'Muhammad Mobin Anwer Siddiqui', 'CF-4 Wednesday (13:30:00 - 14:30:00), CF-4 Wednesday (14:30:00 - 15:30:00), CG-3 Friday (08:30:00 - 09:30:00)'),
  createData('Technical Writing', 'HS211 - 2347', '4th', 'Spring 2025', ' 2025	1/2/2025 12:00:00 AM', 'Final result not created', 'Spring 2025-2023F-BS-SE-HS211-B-17238', 'Syeda Beena Bukhari', 'CF-3 Monday (15:30:00 - 16:30:00), CF-4 Thursday (10:30:00 - 11:30:00)'),
  createData('Software design and architecture', 'SE211T - 4230', '4th', 'Spring 2025', ' 2025	1/2/2025 12:00:00 AM', 'Final result not created', '	Spring 2025-2023F-BS-SE-SE211T-B-17240', 'Engr. Dur-E-Shawar Agha', 'CF-3 Friday (15:30:00 - 16:30:00), CF-4 Wednesday (15:30:00 - 16:30:00), CG-2 Thursday (14:30:00 - 15:30:00)'),
  
  createData('Software design and architecture lab', 'SE211L - 4231', '4th', 'Spring 2025', ' 2025	1/2/2025 12:00:00 AM', 'Final result not created', 'Spring 2025-2023F-BS-SE-SE211L-B-17224', 'Engr. Muhammad Huzaifa', 'BF-03 Monday (11:30:00 - 14:30:00)'),
  
  createData('Operating system lab', 'SE204L - 4232', '4th', 'Spring 2025', ' 2025	1/2/2025 12:00:00 AM', 'Final result not created', 'Spring 2025-2023F-BS-SE-SE204L-B-17237', 'Engr. Samrah Shafique', 'BF-02 Thursday (11:30:00 - 14:30:00)'),
  
  createData('Operating system', 'SE204T - 4233', '4th', 'Spring 2025', ' 2025	1/2/2025 12:00:00 AM', 'Final result not created', 'Spring 2025-2023F-BS-SE-SE204T-B-17236', 'Engr. Farheen Qazi', 'CF-3 Friday (14:30:00 - 15:30:00), CF-3 Monday (16:30:00 - 17:30:00), CF-4 Wednesday (16:30:00 - 17:30:00)'),
  
  createData('Introduction to Database Lab', 'SE209L - 4234', '4th', 'Spring 2025', ' 2025	1/2/2025 12:00:00 AM', 'Final result not created', 'Spring 2025-2023F-BS-SE-SE209L-B-17234', 'Engr. Sumreena Bano',	'CS-4 Friday (09:30:00 - 12:30:00)'),
  
  createData('Introduction to Database systems', 'SE209T - 4235', '4th', 'Spring 2025', ' 2025	1/2/2025 12:00:00 AM', 'Final result not created', '	Spring 2025-2023F-BS-SE-SE209T-B-17231', 'Engr. Kiran Hidayat',	'CF-3 Monday (14:30:00 - 15:30:00), CF-4 Thursday (08:30:00 - 09:30:00), CF-4 Thursday (09:30:00 - 10:30:00)'),
  
];


function Course() {
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
    <Paper sx={{ width: '100%' }}>
      {/* Sticky Heading */}
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 2,
          backgroundColor: 'white',
          textAlign: 'center',
          py: 2,
        }}
      >
        <div className="text-xl font-semibold text-gray-800 sm:text-2xl sm:mb-4  md:text-3xl">Courses</div>
      </Box>

      <TableContainer
        sx={{
          maxHeight: {
            xs: 500,
            sm: 600,
          },
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
                  sx={{ backgroundColor: '#E5E7EB' ,fontWeight: 'bold'}}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.courseCode}>
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
              ))}
          </TableBody>
        </Table>
      </TableContainer>

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

export default Course;