import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";


interface Data{
  title :string,
  date: string
}


const Announcement = () => {
  const columns = [
    {
      label: 'TITLE'
    },
    {
      label: 'DATE'
    },
  ]

  const createData = (title:string, date:string):Data => {
      return {
        title, date
      }
  };

  const rows = [
    createData("lorem ipsum sda kfds ad asdadas sda", "24/4/2025"),
    createData("lorem ipsum sda kfds ad asdadas sda", "23/3/2025"),
    createData("lorem ipsum sda kfds ad asdadas sda", "22/2/2025"),
    createData("lorem ipsum sda kfds ad asdadas sda", "21/1/2025"),
    createData("lorem ipsum sda kfds ad asdadas sda", "20/1/2025"),
    createData("lorem ipsum sda kfds ad asdadas sda", "19/8/2024"),
    createData("lorem ipsum sda kfds ad asdadas sda", "18/8/2024"),
  ]

  return (
    <Paper sx={{ width: "90%" , margin: "0 auto", maxWidth: "1200px", padding: "1rem", '@media (min-width: 600px)': { padding: "2rem" }}}>
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
        <div className="text-xl font-semibold text-gray-800 sm:text-2xl sm:mb-4 md:text-3xl">Announcements</div>
      </Box>

      <TableContainer sx={{ maxHeight: { xs: 500, sm: 600 } }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <TableCell
                  key={index}
                  sx={{
                    backgroundColor: "#E5E7EB", // Tailwind gray-200 hex color
                    fontWeight: "bold",
                    textAlign: "center"
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row,index) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                <TableCell sx={{ textAlign: "center" }}>{row.title}</TableCell>
                <TableCell sx={{ textAlign: "center" }}>{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </Paper>
  )
}

export default Announcement;
