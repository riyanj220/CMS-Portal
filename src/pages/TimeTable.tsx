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
  courseTitle: string;
  courseCode: string;
  sectionCode: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
}

const columns: Column[] = [
  { id: 'courseTitle', label: 'COURSE TITLE', minWidth: 170 },
  { id: 'courseCode', label: 'COURSE CODE', minWidth: 120 },
  { id: 'sectionCode', label: 'SECTION CODE', minWidth: 120 },
  { id: 'monday', label: 'MONDAY', minWidth: 100 },
  { id: 'tuesday', label: 'TUESDAY', minWidth: 100 },
  { id: 'wednesday', label: 'WEDNESDAY', minWidth: 100 },
  { id: 'thursday', label: 'THURSDAY', minWidth: 100 },
  { id: 'friday', label: 'FRIDAY', minWidth: 100 },
];

function createData(
  courseTitle: string,
  courseCode: string,
  sectionCode: string,
  monday: string,
  tuesday: string,
  wednesday: string,
  thursday: string,
  friday: string,
): Data {
  return {
    courseTitle,
    courseCode,
    sectionCode,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
  };
}

const rows = [
  createData(
    'Technical Report Writing',
    'HS211',
    'Spring 2025-2023F-BS-SE-HS211-B-17238',
    '15:30:00-16:30:00',
    '',
    '',
    '10:30:00-11:30:00',
    ''
  ),
  createData(
    'Probability & Satistics',
    'MS301T',
    'Spring 2025-2023F-BS-SE-MS301T-B-17239',
    '',
    '',
    '13:30:00-14:30:00 || 14:30:00-15:30:00',
    '',
    '08:30:00-09:30:00',
  ),

  createData(
    'Operating System Lab',
    'SE204L',
    'Spring 2025-2023F-BS-SE-SE204L-B-17237',
    '',
    '',
    '',
    '11:30:00-14:30:00',
    ''
  ),
  
  createData(
    'Operating System',
    'SE204T',
    'Spring 2025-2023F-BS-SE-SE204T-B-17236',
    '9:30:00-10:30:00 || 16:30:00-17:30:00' ,
    '',
    '16:30:00-17:30:00',
    '',
    ''
  ),
  
  createData(
    'Introduction to Database Lab',
    'SE209L',
    'Spring 2025-2023F-BS-SE-SE209L-B-17234',
    '' ,
    '',
    '',
    '',
    '09:30:00-12:30:00'
  ),
  
  createData(
    'Introduction to Database Systems',
    'SE209T',
    'Spring 2025-2023F-BS-SE-SE209T-B-17231',
    '14:30:00-15:30:00' ,
    '',
    '',
    '08:30:00-09:30:00 || 09:30:00-10:30:00',
    ''
  ),
  
  createData(
    'Software Design and Architecture Lab',
    'SE211L',
    'Spring 2025-2023F-BS-SE-SE211L-B-17224',
    '11:30:00-14:30:00' ,
    '',
    '',
    '',
    ''
  ),
  
  createData(
    'Software Design and Architecture',
    'SE211T',
    'Spring 2025-2023F-BS-SE-SE211T-B-17240',
    '8:30:00-9:30:00' ,
    '',
    '8:30:00 - 9:30:00',
    '14:30:00 - 15:30:00',
    ''
  ),


];

function TimeTable() {
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
        <div className="text-xl font-bold">Time Table</div>
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

export default TimeTable;
