import { Box, Checkbox, FormControl, FormControlLabel, IconButton, InputLabel, MenuItem, Paper, Select, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Tooltip, Typography } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { DeleteIcon } from "lucide-react";
import { useState } from "react";
import { alpha } from "@mui/material/styles";


const createData = (id: number, name: string, courseCode: string, courseType: string, creditHours: number, seatsAvailableComment: string, info: string, teacher: string, timing: string, availableSeats: number) => ({
  id, name, courseCode, courseType, creditHours, seatsAvailableComment, info, teacher, timing, availableSeats
});

const sectionData: Record<string, ReturnType<typeof createData>[]> = {
  A: [
    createData(1, 'COMPUTING PROFESSIONAL PRACTICES', 'HS412T', 'core', 3, 'Available', 'Spring 2025 - A', 'Engr. Shoaib Alam', 'MON 8:30AM - 9:30AM | CF-44', 17),
    createData(2, 'DATA STRUCTURES', 'CS202T', 'core', 3, 'Available', 'Spring 2025 - A', 'Dr. Ahmed', 'TUE 11:30AM - 12:30PM | CF-12', 10),
    createData(3, 'SOFTWARE DESIGN', 'CS310T', 'elective', 3, 'Not Available', 'Spring 2025 - A', 'Ms. Hira', 'WED 9:30AM - 10:30AM | CF-22', 0),
  ],
  B: [
    createData(4, 'DATABASE SYSTEMS', 'CS303T', 'core', 3, 'Available', 'Spring 2025 - B', 'Engr. Bilal', 'MON 10:30AM - 11:30AM | CF-10', 5),
    createData(5, 'WEB ENGINEERING', 'CS401T', 'elective', 3, 'Available', 'Spring 2025 - B', 'Ms. Sara', 'TUE 1:30PM - 2:30PM | CF-9', 8),
    createData(6, 'OPERATING SYSTEMS', 'CS305T', 'core', 3, 'Not Available', 'Spring 2025 - B', 'Dr. Ali', 'FRI 2:30PM - 3:30PM | CF-20', 0),
  ],
  C: [
    createData(7, 'ARTIFICIAL INTELLIGENCE', 'CS501T', 'elective', 3, 'Available', 'Spring 2025 - C', 'Dr. Faizan', 'THU 10:30AM - 11:30AM | CF-18', 12),
    createData(8, 'MACHINE LEARNING', 'CS502T', 'elective', 3, 'Available', 'Spring 2025 - C', 'Dr. Sana', 'WED 11:30AM - 12:30PM | CF-15', 14),
    createData(9, 'COMPUTER NETWORKS', 'CS404T', 'core', 3, 'Available', 'Spring 2025 - C', 'Mr. Usman', 'MON 2:30PM - 3:30PM | CF-11', 3),
  ],
  D: [
    createData(10, 'HUMAN COMPUTER INTERACTION', 'CS406T', 'elective', 3, 'Available', 'Spring 2025 - D', 'Ms. Amna', 'MON 3:30PM - 4:30PM | CF-7', 9),
    createData(11, 'MOBILE COMPUTING', 'CS408T', 'elective', 3, 'Available', 'Spring 2025 - D', 'Dr. Shahbaz', 'WED 2:00PM - 3:00PM | CF-5', 6),
    createData(12, 'INFORMATION SECURITY', 'CS409T', 'core', 3, 'Not Available', 'Spring 2025 - D', 'Engr. Rizwan', 'FRI 12:30PM - 1:30PM | CF-13', 0),
  ],
  E: [
    createData(13, 'PROJECT MANAGEMENT', 'PM401T', 'core', 3, 'Available', 'Spring 2025 - E', 'Ms. Huma', 'TUE 9:30AM - 10:30AM | CF-3', 11),
    createData(14, 'BIG DATA ANALYTICS', 'CS510T', 'elective', 3, 'Available', 'Spring 2025 - E', 'Dr. Kamran', 'THU 11:30AM - 12:30PM | CF-8', 5),
    createData(15, 'BLOCKCHAIN TECHNOLOGY', 'CS511T', 'elective', 3, 'Available', 'Spring 2025 - E', 'Dr. Nida', 'MON 4:00PM - 5:00PM | CF-6', 7),
  ],
  F: [
    createData(16, 'EMBEDDED SYSTEMS', 'CS512T', 'core', 3, 'Available', 'Spring 2025 - F', 'Engr. Yasir', 'TUE 3:30PM - 4:30PM | CF-1', 4),
    createData(17, 'DATA VISUALIZATION', 'CS513T', 'elective', 3, 'Available', 'Spring 2025 - F', 'Ms. Zainab', 'WED 1:30PM - 2:30PM | CF-14', 6),
    createData(18, 'CLOUD COMPUTING', 'CS514T', 'elective', 3, 'Not Available', 'Spring 2025 - F', 'Dr. Asim', 'FRI 11:00AM - 12:00PM | CF-2', 0),
  ],
};

const Registration = () => {

  const [section, setSection] = useState('');
  const handleSectionChange = (event: any) => {
    setSection(event.target.value);
  }
  const [selected, setSelected] = useState<number[]>([]);

  const [dense, setDense] = useState(false);

  return (
    <Paper sx={{ width: '100%' }}>
      {/* Sticky Heading */}
      <Box sx={{ position: 'sticky', top: 0, zIndex: 2, backgroundColor: 'white', textAlign: 'center', py: 2 }}>
        <div className="text-xl font-semibold text-gray-800 sm:text-2xl sm:mb-4 md:text-3xl">Registration</div>
      </Box>

      {/* Section Selector */}
      <Box sx={{ p: 3, width: '40%' }}>
        <FormControl fullWidth>
          <InputLabel id="section-label">Select Section</InputLabel>
          <Select
            labelId="section-label"
            value={section}
            label="Select Section"
            onChange={handleSectionChange}
          >
            {['A', 'B', 'C', 'D', 'E', 'F'].map((value) => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* Table or Message */}
      <Box sx={{ px: 3, pb: 3 }}>
        {section ? (
          <>
            <Toolbar
              sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(selected.length > 0 && {
                  bgcolor: (theme) =>
                    alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                }),
              }}
            >
              <Typography sx={{ flex: '1 1 100%', fontWeight: 'bold', textAlign: 'center' }} variant="h6" component="div">
                {selected.length > 0 ? `${selected.length} selected` : 'Courses'}
              </Typography>
              <Tooltip title={selected.length > 0 ? "Delete" : "Filter list"}>
                <IconButton>
                  {selected.length > 0 ? <DeleteIcon /> : <FilterListIcon />}
                </IconButton>
              </Tooltip>
            </Toolbar>

            <TableContainer>
              <Table size={dense ? "small" : "medium"}>
                <TableHead>
                  <TableRow sx={{ backgroundColor: '#E5E7EB' }}>
                    <TableCell padding="checkbox">
                      <Checkbox
                        indeterminate={
                          selected.length > 0 &&
                          selected.length < sectionData[section]?.length
                        }
                        checked={
                          sectionData[section]?.length > 0 &&
                          selected.length === sectionData[section]?.length
                        }
                        onChange={(event) => {
                          if (event.target.checked) {
                            const allIds = sectionData[section].map((row) => row.id);
                            setSelected(allIds);
                          } else {
                            setSelected([]);
                          }
                        }}
                      />
                    </TableCell>

                    <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>Course Code</TableCell>
                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>Course Type</TableCell>
                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>Credit Hours</TableCell>
                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>Available / Not Available</TableCell>
                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>Information</TableCell>
                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>Teacher Name</TableCell>
                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>Timing</TableCell>
                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>Available Seats</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {sectionData[section]?.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={selected.includes(row.id)}
                          onChange={() =>
                            setSelected((prev) =>
                              prev.includes(row.id) ? prev.filter((id) => id !== row.id) : [...prev, row.id]
                            )
                          }
                        />
                      </TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell align="center">{row.courseCode}</TableCell>
                      <TableCell align="center">{row.courseType}</TableCell>
                      <TableCell align="center">{row.creditHours}</TableCell>
                      <TableCell align="center">{row.seatsAvailableComment}</TableCell>
                      <TableCell align="center">{row.info}</TableCell>
                      <TableCell align="center">{row.teacher}</TableCell>
                      <TableCell align="center">{row.timing}</TableCell>
                      <TableCell align="center">{row.availableSeats}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <FormControlLabel
              control={<Switch checked={dense} onChange={() => setDense(!dense)} />}
              label="Dense padding"
            />
          </>
        ) : (
          <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center' }}>
            Please select a section to register courses
          </Typography>
        )}
      </Box>
    </Paper>
  )
}


export default Registration;
