import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"


export const SeatingPlan = () => {

  const data = (examDate:string,startTime:string ,endTime:string, course:string, room:string) => {
    return{examDate,startTime,endTime,course,room}
  }

  const rows = [
    data('05-May-2025','15:30:00','17:00:00','OPERATING SYSTEMS','CG-6'),
    data('06-May-2025','15:30:00','17:00:00','TECHNICAL WRITING','CF-2'),
    data('07-May-2025','15:30:00','17:00:00','INTRODUCTION TO DATABASE SYSTEMS,','CF-2'),
    data('08-May-2025','15:30:00','17:00:00','PROBABLITY & STATISTICS','CF-2'),
    data('09-May-2025','15:30:00','17:00:00','SOFTWARE DESIGN & ARCHITECTURE.','CG-6'),
    
  ]
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
              <div className="text-xl font-semibold text-gray-800 sm:text-2xl sm:mb-4 md:text-3xl">Exam Seating Plan</div>
                
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1rem', marginTop: 4, minWidth: '1100px', width: '100%' }}>
              {/* First Table */}
              <TableContainer component={Paper} sx={{ marginBottom: 4, flexDirection: 'column' }}>
                <Table sx={{ minWidth: 450 }} size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow sx={{
                      backgroundColor: "#E5E7EB", // Tailwind gray-200 hex color
                    }}>
                      <TableCell sx={{ flex: 0.5 }}>Exam Date</TableCell>
                      <TableCell sx={{ flex: 2 }}>Start Time</TableCell>
                      <TableCell align="left" sx={{ flex: 1 }}>End Time</TableCell>
                      <TableCell align="left" sx={{ flex: 1 }}>Course</TableCell>
                      <TableCell align="left" sx={{ flex: 1 }}>Room</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row,index) => (
                      <TableRow key={index}>
                        <TableCell>{row.examDate}</TableCell>
                        <TableCell>{row.startTime}</TableCell>
                        <TableCell align="left">{row.endTime}</TableCell>
                        <TableCell align="left">{row.course}</TableCell>
                        <TableCell align="left">{row.room}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              </Box>

              </Box>
          </Paper>
    </Box>
  )
}
