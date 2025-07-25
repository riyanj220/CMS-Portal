import { Box, List, ListItem, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";



export const PrintAdmitCard = () => {
  return (
    <Box
      sx={{
        width: "1100px",
        height: "1123px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        padding: 3,
        border: "1px solid black",
        backgroundColor: "white",
      }}
    >
      {/* Header Row */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
          width: "100%",
          mt: 3,
        }}
      >
        {/* University Logo */}
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: 120 }}>
          <img
            src="../../images/login-logo.png"
            alt="University Logo"
            style={{ width: 140, height: 140, objectFit: "contain" }}
          />
        </Box>

        {/* Heading */}
        <Box sx={{ flex: 2, textAlign: "center", marginTop: 5 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              letterSpacing: 1,
              marginBottom: 3
            }}
          >
            Sir Syed University of Engineering & Technology
          </Typography>

          <Typography variant="h5"
            sx={{
              fontWeight: "bold",
              letterSpacing: 1,
              marginBottom: 3
            }}>
            Spring 2025
          </Typography>

          <Typography variant="h5"
            sx={{
              fontWeight: "bold",
              letterSpacing: 1,
            }}>
            New Admit Card
          </Typography>
        </Box>

        {/* QR + Image */}
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: 120 }}>
          <Box sx={{ mb: 1 }}>
            <img
              src="../../images/qr.png"
              alt="QR CODE"
              style={{ width: 140, height: 140, objectFit: "contain" }}
            />
          </Box>
          <Box>
            <img
              src="../../images/dp.png"
              alt="Student"
              style={{ width: 120, height: 160, objectFit: "cover" }}
            />
          </Box>
        </Box>
      </Box>


      {/* Instructions Box */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          width: "100%",
          mb: 3
        }}
      >

        {/* Instructions Section */}
        <Box
          sx={{
            flex: 1,
            background: "#f9fafb",
            borderLeft: "3px solid #6c63ff",
            p: 2,
            borderRadius: 1,
            boxShadow: "0px 1px 6px #eee",
            minWidth: 0,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <InfoOutlinedIcon sx={{ color: "#6c63ff", mr: 1 }} />
            <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>Instructions:</Typography>
          </Box>

          <List dense sx={{ pl: 2 }}>
            <ListItem sx={{ display: "list-item", pl: 0 }}>
              If Attendance status is <b>SOA</b> (Short of Attendance) or Survey status is <b>Unsubmitted</b> for a course, the student is ineligible to sit in the exam for that course.
            </ListItem>
            <ListItem sx={{ display: "list-item", pl: 0 }}>
              Course Title will be <b>Strike-Through</b> in case of ineligible courses due to the above reasons.
            </ListItem>
            <ListItem sx={{ display: "list-item", pl: 0 }}>
              Survey Status can be resolved/updated from Unsubmitted to Submitted for any course by filling the survey in Student Portal before the examination.
            </ListItem>
          </List>

        </Box>
      </Box>


      {/* Info of student*/}
      <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
        <Table size="small" sx={{ minWidth: 650, border: "1.5px solid black" }}>
          <TableBody>
            {/* Row 1 */}
            <TableRow>
              <TableCell sx={{ border: "1.5px solid black", fontWeight: 600, minWidth: 120 }}>
                Registration No.
              </TableCell>
              <TableCell sx={{ border: "1.5px solid black", minWidth: 120 }}>2023F-BSE-075</TableCell>
              <TableCell sx={{ border: "1.5px solid black", fontWeight: 600, minWidth: 80 }}>Name</TableCell>
              <TableCell sx={{ border: "1.5px solid black", minWidth: 120 }}>RIYAN JAMIL</TableCell>
              <TableCell sx={{ border: "1.5px solid black", fontWeight: 600, minWidth: 100 }}>
                Enrollment No
              </TableCell>
              <TableCell sx={{ border: "1.5px solid black", minWidth: 120 }}>2959/SE/2023F</TableCell>
            </TableRow>
            {/* Row 2 */}
            <TableRow>
              <TableCell sx={{ border: "1.5px solid black", fontWeight: 600 }}>Department</TableCell>
              <TableCell sx={{ border: "1.5px solid black" }}>(BS) - Software Engineering - MOR</TableCell>
              <TableCell sx={{ border: "1.5px solid black", fontWeight: 600 }}>Semester</TableCell>
              <TableCell sx={{ border: "1.5px solid black" }}>4th Semester</TableCell>
              <TableCell sx={{ border: "1.5px solid black", fontWeight: 600 }}>Mobile No.</TableCell>
              <TableCell sx={{ border: "1.5px solid black" }}>+9212345678</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>


    </Box>
  );
};
