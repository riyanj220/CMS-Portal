import { Box, Button, FormControl, FormControlLabel, Paper, Radio, RadioGroup, Stack, TextField, Typography } from "@mui/material"
import { useState } from "react";
import SurveySuccessModal from "./SurveySuccessModal";
import { useParams } from "react-router";


const COURSE_QUESTIONS = [
    "The course workload was manageable?",
    "Learning materials (lesson plans, course notes etc.) were relevant, useful and timely available?",
    "Course was completed according to the schedule?",
    "Sufficient number of quizzes were conducted?",
    "Given assignments were adequate and appropriate?",
    "Exams reflected the course content?",
    "The instructor communicated the subject matter clearly?",
    "Was the course intellectually stimulating?",
    "The instructor encouraged student participation?",
    "Were the relevant books available in the library?",
    "How was the audio quality in the class?",
    "Were you satisfied with the visual aid equipment used in the class?",
];

const TEACHER_QUESTIONS = [
    "The instructor is prepared for each class?",
    "Demonstrates current knowledge of the subject?",
    "Lecture presentation was conceptual and relevant?",
    "Punctuality in the class?",
    "Took interest in teaching the course?",
    "Complete the course as per teaching plan?",
    "Teacher helped in gaining knowledge of the subject?",
    "Delivered lecture in English?",
    "Provide guidance after the class?",
    "The instructor is fair in examination?",
    "Were the recommended reading books relevant and useful?",
    "Did the learning and teaching methods encourage student participation?",
    "Was the overall environment in the class conducive to learning?",
];

const OPTIONS = ["A", "B", "C", "D", "E"];

const user = {
    name: "RIYAN JAMIL",
    regNo: "2023F-BSE-075",
    program: "(BS) - Software Engineering - MOR",
    email: "riyanjamil220@gmail.com",
};


export const SurveyQuestions = () => {
    const { type } = useParams();

    const QUESTIONS =
        type === "course" ? COURSE_QUESTIONS :
            type === "teacher" ? TEACHER_QUESTIONS :
                [];

    const surveyTitle =
        type === "course" ? "Course Evaluation" :
            type === "teacher" ? "Teacher Evaluation" :
                "Survey";

    const [answers, setAnswers] = useState(Array(QUESTIONS.length).fill(""));
    const [comment, setComment] = useState("");
    const [openModal, setOpenModal] = useState(false);


    const handleRadioChange = (idx: number, value: string) => {
        const newAnswers = [...answers];
        newAnswers[idx] = value;
        setAnswers(newAnswers);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setOpenModal(true);
    };

    return (
        <Paper
            elevation={3}
            sx={{
                width: "100%",
                mx: "auto",
                p: { xs: 2, sm: 4 },
                borderRadius: 3,
                mb: 10,
            }}
        >   
            {/* Title */}
            <Box
                sx={{
                    position: "sticky",
                    top: -17,
                    zIndex: 2,
                    backgroundColor: "white",
                    textAlign: "center",
                    py: 2,
                }}
            >
                <Typography
                    variant="h4"
                    sx={{ fontWeight: 700, color: "#232e3c", letterSpacing: 1, mb: 1 }}
                >
                    {surveyTitle}
                </Typography>
            </Box>

            <form onSubmit={handleSubmit}>
                {QUESTIONS.map((q, idx) => (
                    <Box
                        key={idx}
                        sx={{
                            mb: 5,
                            pb: 2,
                            ml: 5,
                            mt: 5,
                            borderBottom:
                                idx < QUESTIONS.length - 1
                                    ? "1px solid #e3e7ef"
                                    : undefined,
                        }}
                    >
                        <FormControl component="fieldset" fullWidth>
                            <Stack direction="row" alignItems="center" spacing={2} mb={2}>
                                <Box
                                    sx={{
                                        bgcolor: "#1976d2",
                                        px: 2,
                                        py: 1,
                                        borderRadius: 1,
                                        minWidth: 160,
                                        textAlign: "left",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: 700,
                                            color: "#fff",
                                            fontSize: 16,
                                            letterSpacing: 0.5,
                                        }}
                                    >
                                        QUESTION #{idx + 1}
                                    </Typography>
                                </Box>
                                <Typography
                                    sx={{
                                        fontWeight: 500,
                                        color: "#1976d2",
                                        fontSize: 18,
                                        textTransform: "uppercase",
                                        letterSpacing: 2
                                    }}
                                >
                                    {q}
                                </Typography>
                            </Stack>
                            {/* OPTIONS ROW */}
                            <RadioGroup
                                row
                                name={`question-${idx}`}
                                value={answers[idx]}
                                onChange={e => handleRadioChange(idx, e.target.value)}
                                sx={{
                                    gap: 15, // increase gap
                                    justifyContent: "left",
                                    mt: 1,
                                    ml: 20
                                }}
                            >
                                {OPTIONS.map(opt => (
                                    <FormControlLabel
                                        key={opt}
                                        value={opt}
                                        control={
                                            <Radio
                                                sx={{
                                                    color: "#1976d2",
                                                    transform: "scale(1.4)",
                                                    "&.Mui-checked": { color: "#1976d2" },
                                                }}
                                            />
                                        }
                                        label={
                                            <span style={{ fontSize: 20, fontWeight: 500 }}>{opt}</span>
                                        }
                                        sx={{
                                            mx: 2,
                                            minWidth: 60,
                                        }}
                                    />
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </Box>
                ))}

                {/* Comment Box */}
                <Box sx={{ mt: 4, ml: 5 }}>
                    <Stack direction="row" alignItems="center" spacing={2} mb={2}>
                        <Box
                            sx={{
                                bgcolor: "#1976d2",
                                px: 2,
                                py: 1,
                                borderRadius: 1,
                                minWidth: 160,
                                textAlign: "left",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontWeight: 700,
                                    color: "#fff",
                                    fontSize: 16,
                                    letterSpacing: 0.5,
                                }}
                            >
                                QUESTION #{QUESTIONS.length + 1}
                            </Typography>
                        </Box>
                        <Typography
                            sx={{
                                fontWeight: 500,
                                color: "#1976d2",
                                fontSize: 18,
                                textTransform: "uppercase",
                            }}
                        >
                            Comments:
                        </Typography>
                    </Stack>
                    <TextField
                        variant="outlined"
                        multiline
                        minRows={4}
                        fullWidth
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                        placeholder="Write your feedback here..."
                        sx={{ fontSize: 18 }}
                    />
                </Box>

                {/* Submit Button */}
                <Box sx={{ mt: 5, textAlign: "center" }}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{
                            borderRadius: 2,
                            minWidth: 140,
                            fontWeight: 700,
                            fontSize: 20,
                            py: 1.2,
                            px: 4,
                        }}
                    >
                        Submit
                    </Button>
                </Box>
            </form>

            <SurveySuccessModal open={openModal} user={user} />
        </Paper>
    );
};