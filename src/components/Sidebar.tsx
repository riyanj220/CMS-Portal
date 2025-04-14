import { useState } from 'react';
import { Dashboard as DashboardIcon, CreditCard as CreditCardIcon, AssignmentAdd as AssignmentAddIcon, FormatListBulleted as FormatListBulletedIcon, LibraryBooks as LibraryBooksIcon, Quiz as QuizIcon } from '@mui/icons-material';
import { Link } from 'react-router';
// import clsx from 'clsx';

const NAV_ITEMS = [
  { kind: 'header', title: '' },
  
  // Main Navigation Items
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
    link: '/dashboard',
  },
  
  {
    segment: 'general',
    title: 'General',
    icon: <FormatListBulletedIcon />,
    link: '/general',
    children: [
      {
        segment: 'time table',
        title: 'Time Table',
        link: '/general/time-table',
      },
      {
        segment: 'todo list',
        title: 'Todo List',
        link: '/general/todo-list',
      },
      {
        segment: 'attendance',
        title: 'Attendance',
        link: '/general/attendance',
      },
      {
        segment: 'online survey',
        title: 'Online Survey',
        link: '/general/online-survey',
      },
      {
        segment: 'change password',
        title: 'Change Password',
        link: '/general/change-password',
      },
      {
        segment: 'student program outcome',
        title: 'Student Program Outcome (PLO) Attainment',
        link: '/general/student-program-outcome',
      },
    ],
  },

  { kind: 'divider' },

  {
    segment: 'course',
    title: 'Course',
    icon: <LibraryBooksIcon />,
    link: '/courses',
  },

  {
    segment: 'registration',
    title: 'Registration',
    icon: <AssignmentAddIcon />,
    link: '/registration',
  },

  { kind: 'divider' },

  {
    segment: 'exam',
    title: 'Exam',
    icon: <QuizIcon />,
    link: '/exam',
    children: [
      {
        segment: 'print unofficial transcript',
        title: 'Print Unofficial Transcript',
        link: '/exam/print-unofficial-transcript',
      },
      {
        segment: 'exam seating plan',
        title: 'Exam Seating Plan',
        link: '/exam/exam-seating-plan',
      },
      {
        segment: 'assessment result',
        title: 'Assessment Result',
        link: '/exam/assessment-result',
      },
    ],
  },

  {
    segment: 'fee',
    title: 'Fee',
    icon: <CreditCardIcon />,
    link: '/fee',
  },
];

export default function Sidebar() {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);  // State to handle submenu toggle

  const handleSubmenuToggle = (segment: string) => {
    setOpenSubmenu(openSubmenu === segment ? null : segment);  // Toggle submenu
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      {/* <div className={clsx('bg-gray-800 text-white w-64', { 'block': isSidebarOpen, 'hidden': !isSidebarOpen })}> */}
        <div>
          {NAV_ITEMS.map((item, index) => {
            if (item.kind === 'divider') {
              return <hr key={index} className="my-2" />;
            }

            return (
              <div key={index}>
                <Link to={item.link || '#'} onClick={item.children ? () => handleSubmenuToggle(item.segment) : undefined}>
                  <div className="flex items-center p-3 text-white hover:bg-gray-600">
                    {item.icon}
                    <span className="ml-4">{item.title}</span>
                    {item.children && (
                      <span className="ml-auto">{openSubmenu === item.segment ? '▲' : '▼'}</span>  // Show an arrow for submenus
                    )}
                  </div>
                </Link>

                {/* Render Submenu if available */}
                {item.children && openSubmenu === item.segment && (
                  <div className="pl-6">
                    {item.children.map((subItem, subIndex) => (
                      <Link key={subIndex} to={subItem.link}>
                        <div className="flex items-center p-3 text-white hover:bg-gray-500">
                          <span className="ml-4">{subItem.title}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    // </div>
  );
}
