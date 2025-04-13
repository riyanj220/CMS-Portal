import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { AppProvider, type Navigation } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AssignmentAddIcon from '@mui/icons-material/AssignmentAdd';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import QuizIcon from '@mui/icons-material/Quiz';

const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: '',
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'general',
    title: 'General',
    icon: <FormatListBulletedIcon/>,
    children: [
        {
            segment: 'time table',
            title: 'Time table',
        },
        {
            segment: 'todo list',
            title: 'Todo list',
        },
        {
            segment: 'attendance',
            title: 'Attendance',
        },
        {
            segment: 'online survey',
            title: 'Online survey',
        },
        {
            segment: 'change password',
            title: 'Change password',
        },
        {
            segment: 'student program outcome',
            title: 'Student program outcome (PLO) attainment',
        },
    ]
  },
  {
    kind: 'divider',
  },
  {
    segment: 'course',
    title: 'Course',
    icon: <LibraryBooksIcon/>,
  },
  {
    segment: 'registration',
    title: 'Registration',
    icon: <AssignmentAddIcon />,
  },
  {
    kind: 'divider',
  },
  {
    segment: 'exam',
    title: 'Exam',
    icon: <QuizIcon />,
    children:[
        {
            segment: 'print unofficial transcript',
            title: 'Print unofficial transcript'
        },
        {
            segment: 'exam seating plan',
            title: 'Exam seating plan'
        },

        {
            segment: 'assesment result',
            title: 'Assesment result'
        },
    ]
  },
  {
    segment: 'fee',
    title: 'Fee',
    icon: <CreditCardIcon />,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }: { pathname: string }) {
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography>Dashboard content for {pathname}</Typography>
    </Box>
  );
}

export default function DashboardLayoutBasic() {

  const router = useDemoRouter('/dashboard');

  return (
    // preview-start
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={undefined}
    >
      <DashboardLayout>
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
    // preview-end
  );
}
