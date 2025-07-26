import { Box, List, ListItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { PrintButton } from "./PrintButton";
import { useRef } from "react";

interface Data {
  courseCode: string;
  courseTitle: string;
  attendanceStatus: string;
  survey: string;
  examDate: string;
  startTime: string;
  endTime: string;
  room: string;
  seatNo: string;
}

const columns = [
  { id: "sno", label: "S.No." },
  { id: "courseCode", label: "Course Code" },
  { id: "courseTitle", label: "Course Title" },
  { id: "attendanceStatus", label: "Attendance Status" },
  { id: "survey", label: "Survey" },
  { id: "examDate", label: "Exam Date" },
  { id: "startTime", label: "Start Time" },
  { id: "endTime", label: "End Time" },
  { id: "room", label: "Room" },
  { id: "seatNo", label: "Seat No." },
];

function createData(
  courseCode: string,
  courseTitle: string,
  attendanceStatus: string,
  survey: string,
  examDate: string,
  startTime: string,
  endTime: string,
  room: string,
  seatNo: string
): Data {
  return {
    courseCode, courseTitle, attendanceStatus, survey, examDate, startTime, endTime, room, seatNo
  };
}

const rows = [
  createData("MS-301T", "Probability & Statistics", "Allowed", "Submitted", "16-July-2025", "14:00:00", "17:00:00", "GT-03", "R4 C5"),
  createData("HS-211", "Technical Report Writing", "Allowed", "Submitted", "16-July-2025", "14:00:00", "17:00:00", "GT-03", "R4 C5"),
  createData("SE-211T", "Software Design & Architecture", "Allowed", "Submitted", "16-July-2025", "14:00:00", "17:00:00", "GT-03", "R4 C5"),
  createData("SE-204T", "Operating System", "Allowed", "Submitted", "16-July-2025", "14:00:00", "17:00:00", "GT-03", "R4 C5"),
  createData("SE-209T", "Database", "Allowed", "Submitted", "16-July-2025", "14:00:00", "17:00:00", "GT-03", "R4 C5"),
]


export const PrintAdmitCard = () => {
  const printRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div ref={printRef} className="admit-card-print-containe mb-10">
        <Box
          sx={{
            width: "790px",
            margin: "8px auto",
            display: "flex",
            flexDirection: "column",
            padding: 1.5,
            border: "1px solid black",
            backgroundColor: "white",
            boxSizing: "border-box",
            overflow: "visible"
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
              mt: 1,
            }}
          >
            {/* Logo */}
            <Box sx={{ minWidth: 80 }}>
              <img
                src="../../images/login-logo.png"
                alt="University Logo"
                style={{ width: 70, height: 70, objectFit: "contain" }} // reduced
              />
            </Box>
            {/* Heading */}
            <Box sx={{ flex: 2, textAlign: "center", marginTop: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: 18, letterSpacing: 0.5, mb: 1.5 }}>
                Sir Syed University of Engineering & Technology
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: "bold", fontSize: 16, letterSpacing: 0.5, mb: 1 }}>
                Spring 2025
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: "bold", fontSize: 15, letterSpacing: 0.5 }}>
                New Admit Card
              </Typography>
            </Box>
            {/* QR + Image */}
            <Box sx={{ minWidth: 70, alignItems: "center" }}>
              <img
                src="../../images/qr.png"
                alt="QR CODE"
                style={{ width: 65, height: 65, objectFit: "contain" }} // reduced
              />
              <img
                src="../../images/dp.png"
                alt="Student"
                style={{ width: 60, height: 80, objectFit: "cover", marginTop: 8 }}
              />
            </Box>
          </Box>


          {/* Instructions Box */}
          <Box
            sx={{
              background: "#F7FAFC",
              borderLeft: "2px solid #6c63ff",
              // p: 1.5, // less padding
              borderRadius: 1,
              boxShadow: "0px 1px 3px #eee",
              mb: 1.2,
            }}
          >

            {/* Instructions Section */}
            <Box
              sx={{
                flex: 1,
                background: "#f9fafb",
                borderLeft: "3px solid #6c63ff",
                p: 1,
                borderRadius: 1,
                boxShadow: "0px 1px 6px #eee",
                minWidth: 0,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
                <InfoOutlinedIcon sx={{ color: "#6c63ff", fontSize: 18, mr: 1 }} />
                <Typography sx={{ fontWeight: "bold", fontSize: 15 }}>Instructions:</Typography>
              </Box>

              <List dense sx={{ pl: 1.5 }}>
                <ListItem sx={{ display: "list-item", fontSize: 13, py: 0 }}>
                  If Attendance status is <b>SOA</b> (Short of Attendance) or Survey status is <b>Unsubmitted</b> for a course, the student is ineligible to sit in the exam for that course.
                </ListItem>
                <ListItem sx={{ display: "list-item", fontSize: 13, py: 0 }}>
                  Course Title will be <b>Strike-Through</b> in case of ineligible courses due to the above reasons.
                </ListItem>
                <ListItem sx={{ display: "list-item", fontSize: 13, py: 0 }}>
                  Survey Status can be resolved/updated from Unsubmitted to Submitted for any course by filling the survey in Student Portal before the examination.
                </ListItem>
              </List>

            </Box>
          </Box>


          {/* Info of student*/}
          <TableContainer component={Paper} sx={{ boxShadow: "none", mb: 1.5 }}>
            <Table size="small" sx={{ minWidth: 650, border: "1.2px solid black" }}>
              <TableBody>
                {/* Row 1 */}
                <TableRow>
                  <TableCell sx={{ border: "1.2px solid black", fontWeight: 600, minWidth: 80, fontSize: 12, py: 0.5 }}>
                    Reg. No.
                  </TableCell>
                  <TableCell sx={{ border: "1.2px solid black", fontSize: 12, }}>2023F-BSE-075</TableCell>
                  <TableCell sx={{ border: "1.2px solid black", fontWeight: 600, minWidth: 80, fontSize: 12, py: 0.5 }}>Name</TableCell>
                  <TableCell sx={{ border: "1.2px solid black", fontSize: 12, }}>Riyan Jamil</TableCell>
                  <TableCell sx={{ border: "1.2px solid black", fontWeight: 600, minWidth: 80, fontSize: 12, py: 0.5 }}>
                    Enrollment No.
                  </TableCell>
                  <TableCell sx={{ border: "1.2px solid black", fontSize: 12 }}>2959/SE/2023F</TableCell>
                </TableRow>
                {/* Row 2 */}
                <TableRow>
                  <TableCell sx={{ border: "1.2px solid black", fontWeight: 600, minWidth: 80, fontSize: 12, py: 0.5 }}>Department</TableCell>
                  <TableCell sx={{ border: "1.2px solid black", fontSize: 12 }}>(BS) - Software Engineering - MOR</TableCell>
                  <TableCell sx={{ border: "1.2px solid black", fontWeight: 600, minWidth: 80, fontSize: 12, py: 0.5 }}>Semester</TableCell>
                  <TableCell sx={{ border: "1.2px solid black", fontSize: 12 }}>4th Semester </TableCell>
                  <TableCell sx={{ border: "1.2px solid black", fontWeight: 600, minWidth: 80, fontSize: 12, py: 0.5 }}>Mobile No.</TableCell>
                  <TableCell sx={{ border: "1.2px solid black", fontSize: 12 }}>+92 12345678</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Typography sx={{ fontWeight: "bold", fontSize: 15, mb: 1 }}>
            I have to appear in the following courses
          </Typography>


          {/* Information of exam course */}
          <TableContainer sx={{ mb: 2, maxWidth: "100%" }}>
            <Table stickyHeader aria-label="sticky table" size="small">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      sx={{
                        backgroundColor: '#E5E7EB',
                        fontWeight: 'bold',
                        fontSize: 12,         // smaller text
                        padding: "4px 6px",   // less horizontal padding
                        minWidth: 40,         // less minWidth for compact columns
                        maxWidth: 80,         // optional, to force wrapping if text is long
                        whiteSpace: "normal", // allow text wrapping
                        wordBreak: "break-word",
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, idx) => (
                  <TableRow hover tabIndex={-1} key={row.courseCode} sx={{ fontSize: 12 }}>
                    {columns.map((column) => {
                      if (column.id === "sno") {
                        return (
                          <TableCell
                            key="sno"
                            align="center"
                            sx={{
                              fontSize: 12,
                              padding: "4px 6px",
                              minWidth: 35,
                            }}
                          >
                            {idx + 1}
                          </TableCell>
                        );
                      }
                      return (
                        <TableCell
                          key={column.id}
                          sx={{
                            fontSize: 12,
                            padding: "4px 6px",
                            minWidth: 40,
                            maxWidth: 80,
                            whiteSpace: "normal",
                            wordBreak: "break-word",
                          }}
                        >
                          {row[column.id as keyof Data]}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>


          <Typography sx={{ fontWeight: "bold", fontSize: 12, mb: 1.5 }}>
            Student is allowed to appear in the above subjects in Spring 2025 EndTerm Examination (After the clearance of necessary dues)
          </Typography>

          {/* Fees remaining */}
          <Box sx={{
            display: "inline-flex",
            border: "1.5px solid #111",
            borderRadius: 2,
            overflow: "hidden",
            minWidth: 270,
            alignItems: "center",
            boxShadow: "0px 1px 6px #f3f4f6",
            // alignSelf: "center",
            mb: 2
          }}>
            <Box
              sx={{
                background: "#f3f4f6",
                px: 2.5,
                py: 1,
                fontWeight: 600,
                fontSize: 14,
                borderRight: "1.5px solid #111",
                letterSpacing: 0.5,
                minWidth: 120,
                textAlign: "left",
              }}
            >
              Fee Due Amount
            </Box>
            <Box
              sx={{
                px: 2.5,
                py: 1,
                fontWeight: 500,
                fontSize: 14,
                letterSpacing: 0.5,
                minWidth: 80,
                color: "#10642A",
                textAlign: "center",
              }}
            >
              0.00
            </Box>
          </Box>

          {/* Declaration by student */}
          <Box
            sx={{
              background: "#F7FAFC",
              borderLeft: "4px solid #7c3aed",
              padding: 2.5,
              marginY: 2,
              borderRadius: 1.5,
              boxShadow: "0px 2px 6px #eee",
              maxWidth: "100%",
            }}
          >
            <Typography component="span" sx={{ fontWeight: "bold", fontSize: 15, mr: 1 }}>
              Declaration by the Student:
            </Typography>
            <Typography component="span" sx={{ fontSize: 14 }}>
              I understand that I am being allowed to appear in the above examinations on the condition that I have completed the attendance requirement. If my attendance is short or I have not fulfilled any other condition of appearing in examinations, my result may be cancelled.
            </Typography>
          </Box>

          {/* Disclaimer/proclamation */}
          <Box
            sx={{
              border: "1.5px solid #bbb",
              borderRadius: 1,
              padding: 2.5,
              background: "#fff",
              mt: 2,
              mb: 2,
              boxShadow: "0px 2px 6px #f3f4f6",
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: 15,
                mb: 1.2,
                letterSpacing: 0.4,
                textTransform: "uppercase",
              }}
            >
              DISCLAIMER/PROCLAMATION
            </Typography>
            <ol style={{ paddingLeft: 22, marginTop: 8, marginBottom: 12, color: "#222", fontSize: 14 }}>
              <li style={{ marginBottom: 5 }}>
                1. The University reserves the right to correct, modify or change the results at any time on the basis of original record or in any manner if found to have been wrongly computed or compiled. Typographical error, if any, will not entitle anybody to interpret the result in his/her favor and to claim any advantage therefrom. The University reserves the right to correct such mistakes as and when they come to notice and no action shall lie against the University.
              </li>
              <li style={{ marginBottom: 5 }}>
                2. Every care has been taken to ensure that the results are accurate. The University, however, does not hold itself responsible for any omission or mistake of results notification.
              </li>
              <li style={{ marginBottom: 5 }}>
                3. Declaration by the Student: I understand that I am being allowed to appear in the above examinations on the condition that I have completed the attendance requirement. If my attendance is short or I have not fulfilled any other condition of appearing in examinations, my result may be canceled.
              </li>
              <li style={{ marginBottom: 5 }}>
                Note: Ineligible candidates shall not claim any right for the announcement of their results if an admit card is issued to them inadvertently on the basis of incorrect/false information.
              </li>
            </ol>
            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2, alignItems: "center" }}>
              <Typography sx={{ fontWeight: 600, fontSize: 13 }}>
                Printed Date: <span style={{ fontWeight: 700 }}>07-Jul-2025 08:08:43 PM</span>
              </Typography>
              <Typography sx={{ fontWeight: 600, fontSize: 13 }}>
                Signature of Candidate
              </Typography>
            </Box>
          </Box>

        </Box>
      </div>

      <PrintButton printRef={printRef}  className="no-print"/>

    </>
  );
};
