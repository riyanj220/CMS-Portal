import { Box, Typography, CircularProgress } from "@mui/material";

const DegreeCompletionCard = ({ progress = 0 }) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 500,
        p: 5,
        borderRadius: 4,
        backgroundColor: "#f9fafb",
        textAlign: "center",
        mb: 5,
      }}
    >
      {/* Title */}
      <Typography sx={{ fontWeight: 700, fontSize: 28, mb: 5 }}>
        Degree Completion
      </Typography>

      {/* Circular Progress */}
      <Box
        sx={{
          position: "relative",
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 5,
        }}
      >
        <CircularProgress
          variant="determinate"
          value={progress}
          size={180}
          thickness={6}
          sx={{
            color: "#99f6e4", // slightly brighter turquoise
          }}
        />
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontWeight: 800, fontSize: 40, color: "#334155" }}
          >
            {`${progress}%`}
          </Typography>
        </Box>
      </Box>

      {/* Description */}
      <Typography sx={{ fontSize: 18, color: "#475569", px: 2, lineHeight: 1.8 }}>
        Roadmaps are meant to be a guide for students and academic advisors in
        planning a path to a degree.
      </Typography>
    </Box>
  );
};

export default DegreeCompletionCard;
