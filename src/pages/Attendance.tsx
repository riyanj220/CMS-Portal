import { Box, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import PreviewIcon from '@mui/icons-material/Preview';
import { useState } from "react";

interface Data {
  courseTitle: string,
  courseCode: string,
  scheduled: number,
  conducted: number,
  attended: number,
  percentage: number,
  finalAttendacnce: number
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const Attendance = () => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const columns = [
    { id: 'courseTitle', label: 'COURSE', minWidth: 170 },
    { id: 'courseCode', label: 'COURSE CODE', minWidth: 120 },
    { id: 'scheduled', label: 'SCHEDULED', minWidth: 100 },
    { id: 'conducted', label: 'CONDUCTED', minWidth: 100 },
    { id: 'attended', label: 'ATTENDED', minWidth: 120 },
    { id: 'percentage', label: 'PERCENTAGE', minWidth: 180 },
    { id: 'finalAttendacnce', label: 'FINAL ATTENDANCE', minWidth: 120 },
    { id: 'view', label: 'VIEW', minWidth: 170 },
  ];

  const createData = (courseTitle: string,
    courseCode: string,
    scheduled: number,
    conducted: number,
    attended: number,
    percentage: number,
    finalAttendacnce: number): Data => {

    return {
      courseTitle,
      courseCode,
      scheduled,
      conducted,
      attended,
      percentage,
      finalAttendacnce
    };
  }

  const rows = [
    createData('Probability & Satistics', 'MS301T - 2002', 48, 20, 20, 100, 100),
    createData('Technical Writing', 'HS211 - 2347', 32, 14, 14, 100, 100),
    createData('Software design and Architecture', 'SE211T - 4230', 32, 12, 12, 100, 100),
    createData('Software design and Architecture Lab', 'SE211L - 4231', 16, 7, 7, 100, 100),
    createData('Operating System Lab', 'SE204L - 4232', 16, 6, 6, 100, 100),
    createData('Operating System', 'SE204T - 4233', 48, 12, 12, 100, 100),
    createData('Introduction to Database Lab', 'SE204T - 4233', 16, 5, 5, 100, 100),
    createData('Introduction to Database Systems', 'SE209T - 4235', 48, 11, 11, 100, 100),

  ];

  interface ModalData {
    dayTime : string,
    date: string,
    status:string
  }

  const modalColumns = [
    {label: "DAY - TIME"},
    {label: "DATE"},
    {label: "STATUS"},
  ]

  const createModalData = (dayTime:string, date:string, status:string):ModalData => {
    return{
      dayTime,
      date,
      status
    };
  }

  const modalRows = [
    createModalData('Thursday - [10:30:00 - 11:30:00]',	'06-Mar-2025'	,'Present'),
    createModalData('Monday - [15:30:00 - 16:30:00]',	'10-Mar-2025',	'Present'),
    createModalData('Thursday - [10:30:00 - 11:30:00]',	'13-Mar-2025',	'Present'),
    createModalData('Monday - [15:30:00 - 16:30:00]',	'17-Mar-2025',	'Present'),
    createModalData('Thursday - [10:30:00 - 11:30:00]',	'20-Mar-2025',	'Present'),
    createModalData('Monday - [15:30:00 - 16:30:00]',	'24-Mar-2025',	'Present'),
    createModalData('Thursday - [10:30:00 - 11:30:00]',	'27-Mar-2025',	'Present'),
    createModalData('Monday - [15:30:00 - 16:30:00]',	'31-Mar-2025',	'Present'),
    createModalData('Thursday - [10:30:00 - 11:30:00]',	'03-Apr-2025',	'Present'),
    createModalData('Monday - [15:30:00 - 16:30:00]',	'07-Apr-2025',	'Present'),
    createModalData('Thursday - [10:30:00 - 11:30:00]',	'10-Apr-2025',	'Present'),
    createModalData('Monday - [15:30:00 - 16:30:00]',	'14-Apr-2025',	'Present'),
    createModalData('Thursday - [10:30:00 - 11:30:00]',	'17-Apr-2025',	'Present'),
    createModalData('Monday - [15:30:00 - 16:30:00]',	'21-Apr-2025',	'Present')
  ]

  return (

    <Paper sx={{ width: "100%" }}>
      {/* Sticky Heading */}
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
        <div className="text-xl font-semibold text-gray-800 sm:text-2xl sm:mb-4 md:text-3xl">Attendance</div>
      </Box>

      <TableContainer sx={{ maxHeight: { xs: 500, sm: 600 } }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  sx={{
                    backgroundColor: "#E5E7EB", // Tailwind gray-200 hex color
                    fontWeight: "bold",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={row.courseCode}>
                <TableCell>{row.courseTitle}</TableCell>
                <TableCell>{row.courseCode}</TableCell>
                <TableCell>{row.scheduled}</TableCell>
                <TableCell>{row.conducted}</TableCell>
                <TableCell>{row.attended}</TableCell>
                <TableCell>{row.percentage}</TableCell>
                <TableCell>{row.finalAttendacnce} %</TableCell>
                <TableCell>
                  <IconButton
                    color="primary"
                    onClick={() => handleOpen()}
                  >
                    <PreviewIcon />

                  </IconButton>
                </TableCell>

                <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                  <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" className="text-center">
                      Details
                    </Typography>

                    <TableContainer sx={{ maxHeight: 440 }}>
                      <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                          <TableRow>
                            {modalColumns.map((column,index) => (
                              <TableCell key={index} sx={{ backgroundColor: '#E5E7EB', fontWeight: 'bold' }}>
                                {column.label}
                              </TableCell>
                            ))}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {modalRows.map((row,index) => (
                            <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                              <TableCell>{row.dayTime}</TableCell>
                              <TableCell>{row.date}</TableCell>
                              <TableCell>{row.status}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Box>
                </Modal>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </Paper>
  );
}

export default Attendance;
