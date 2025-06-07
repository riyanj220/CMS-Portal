import { Alert, Box, Button, Checkbox, FormControl, FormControlLabel, IconButton, InputLabel, MenuItem, Modal, Paper, Select, Snackbar, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Tooltip, Typography } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { SaveIcon } from "lucide-react";
import { useState } from "react";
import { alpha } from "@mui/material/styles";
import DeleteIcon from '@mui/icons-material/Delete';

type Course = ReturnType<typeof createData>;
type SectionData = Record<string, Course[]>

const createData = (id: number, name: string, courseCode: string, courseType: string, creditHours: number, seatsAvailableComment: string, info: string, teacher: string, timing: string, availableSeats: number) => ({
  id, name, courseCode, courseType, creditHours, seatsAvailableComment, info, teacher, timing, availableSeats
});


const Registration = () => {

  const [section, setSection] = useState('');
  const [savedCourses, setSavedCourses] = useState<ReturnType<typeof createData>[]>([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [rowToDelete, setRowToDelete] = useState<null | number>(null); // store row ID
  const [sectionData, setSectionData] = useState<SectionData>(() => ({
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
      createData(18, 'CLOUD COMPUTING', 'CS514T', 'elective', 3, 'Not Available', 'Spring 2025 - F', 'Dr. Asim', 'FRI 11:00AM - 12:00PM | CF-2', 1),
    ],
  }));


  const handleSectionChange = (event: any) => {
    setSection(event.target.value);
  }
  const [selected, setSelected] = useState<number[]>([]);

  const [dense, setDense] = useState(false);

  const handleSave = () => {
    const selectedRows = sectionData[section].filter((row) =>
      selected.includes(row.id)
    );

    const newRows = selectedRows.filter(
      (row) => !savedCourses.some((saved) => saved.id === row.id)
    );

    if (newRows.length > 0) {
      setSavedCourses((prev) => [...prev, ...newRows]);
      setSnackbarOpen(true);

      // Decrease availableSeats by 1 for saved courses
      const updatedSection = sectionData[section].map((row) => {
        if (newRows.some((saved) => saved.id === row.id)) {
          return {
            ...row,
            availableSeats: Math.max(row.availableSeats - 1, 0), // avoid negative seats
          };
        }
        return row;
      });

      setSectionData((prev) => ({
        ...prev,
        [section]: updatedSection,
      }));
    }

    setSelected([]);
  };


  return (
    <>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Courses saved successfully!
        </Alert>
      </Snackbar>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Confirm Delete
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Are you sure you want to delete this course from your saved list?
          </Typography>
          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
            <Button variant="outlined" onClick={() => setOpen(false)}>Cancel</Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                setSavedCourses(prev => prev.filter(p => p.id !== rowToDelete));
                setOpen(false);
              }}
            >
              Delete
            </Button>
          </Box>
        </Box>
      </Modal>

      <Paper sx={{ width: '100%' }}>
        {/* Sticky Heading */}
        <Box sx={{ position: 'sticky', top: 0, zIndex: 2, backgroundColor: 'white', textAlign: 'center', py: 2 }}>
          <div className="text-xl font-semibold text-gray-800 sm:text-2xl sm:mb-4 md:text-3xl">Registration</div>
        </Box>

        {/* Section Selector */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 3, pt: 3 }}>
          {/* Section Selector */}
          <Box sx={{ width: '40%' }}>
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

          {/* Total Credit Hours */}
          <Typography sx={{ fontWeight: 'bold', pr: 3 ,fontSize:20}}>
            Total Credit Hours:{" "}
            {savedCourses.reduce((total, course) => total + course.creditHours, 0)}
          </Typography>
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

              {/* Main Courses Table */}
              <TableContainer>
                <Table size={dense ? "small" : "medium"}>
                  <TableHead>
                    <TableRow sx={{ backgroundColor: '#E5E7EB' }}>
                      <TableCell padding="checkbox">
                        <Checkbox
                          indeterminate={
                            selected.length > 0 &&
                            selected.length < sectionData[section]?.filter(row =>
                              row.availableSeats > 0 &&
                              !savedCourses.some(saved => saved.id === row.id)
                            ).length
                          }
                          checked={
                            sectionData[section]?.length > 0 &&
                            selected.length === sectionData[section]?.filter(row =>
                              row.availableSeats > 0 &&
                              !savedCourses.some(saved => saved.id === row.id)
                            ).length
                          }
                          onChange={(event) => {
                            if (event.target.checked) {
                              const unsavedSelectableIds = sectionData[section]
                                .filter(row => row.availableSeats > 0 && !savedCourses.some(saved => saved.id === row.id))
                                .map(row => row.id);
                              setSelected(unsavedSelectableIds);
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
                            disabled={row.availableSeats === 0 || savedCourses.some(saved => saved.id === row.id)}
                            onChange={() => {
                              if (row.availableSeats === 0) return;
                              setSelected((prev) =>
                                prev.includes(row.id)
                                  ? prev.filter((id) => id !== row.id)
                                  : [...prev, row.id]
                              );
                            }}
                          />

                        </TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell align="center">{row.courseCode}</TableCell>
                        <TableCell align="center">{row.courseType}</TableCell>
                        <TableCell align="center">{row.creditHours}</TableCell>
                        <TableCell align="center">{row.availableSeats === 0 ? 'Not Available' : 'Available'}</TableCell>
                        <TableCell align="center">{row.info}</TableCell>
                        <TableCell align="center">{row.teacher}</TableCell>
                        <TableCell align="center">{row.timing}</TableCell>
                        <TableCell align="center">{row.availableSeats}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                <FormControlLabel
                  control={<Switch checked={dense} onChange={() => setDense(!dense)} />}
                  label="Dense padding"
                />

                <Tooltip title="Save selected courses">
                  <Button
                    onClick={handleSave}
                    variant="outlined"
                    color="primary"
                    size="large"
                    startIcon={<SaveIcon />}
                    sx={{ ml: 2 }}
                  >
                    Save
                  </Button>
                </Tooltip>

              </Box>


              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center' }}>
                  Confirmed Courses
                </Typography>

                {savedCourses.length === 0 ? (
                  <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center' }}>
                    No Confirmed Courses
                  </Typography>
                ) : (

                  // {/* Confirmed Courses Table */}
                  <TableContainer component={Paper}>
                    <Table size="small">
                      <TableHead>
                        <TableRow sx={{ backgroundColor: '#f3f4f6' }}>
                          <TableCell align='left' sx={{ fontWeight: 'bold' }}>Sr. No</TableCell>
                          <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                          <TableCell align="center" sx={{ fontWeight: 'bold' }}>Course Code</TableCell>
                          <TableCell align="center" sx={{ fontWeight: 'bold' }}>Course Type</TableCell>
                          <TableCell align="center" sx={{ fontWeight: 'bold' }}>Credit Hours</TableCell>
                          <TableCell align="center" sx={{ fontWeight: 'bold' }}>Information</TableCell>
                          <TableCell align="center" sx={{ fontWeight: 'bold' }}>Teacher Name</TableCell>
                          <TableCell align="center" sx={{ fontWeight: 'bold' }}>Timing</TableCell>
                          <TableCell align="center" sx={{ fontWeight: 'bold' }}>Delete</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {savedCourses.map((row, index) => (
                          <TableRow key={row.id}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell align="center">{row.courseCode}</TableCell>
                            <TableCell align="center">{row.courseType}</TableCell>
                            <TableCell align="center">{row.creditHours}</TableCell>
                            <TableCell align="center">{row.info}</TableCell>
                            <TableCell align="center">{row.teacher}</TableCell>
                            <TableCell align="center">{row.timing}</TableCell>
                            <TableCell align="center">
                              <IconButton
                                onClick={() => {
                                  setRowToDelete(row.id);
                                  setOpen(true);
                                }}
                              >
                                <DeleteIcon fontSize="medium" />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                )}
              </Box>

            </>
          ) : (
            <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center' }}>
              Please select a section to register courses
            </Typography>
          )}
        </Box>
      </Paper>
    </>
  )
}


export default Registration;
