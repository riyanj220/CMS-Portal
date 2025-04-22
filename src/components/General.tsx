import Announcement from "@/pages/Announcement";
import Attendance from "@/pages/Attendance";
import TimeTable from "@/pages/TimeTable";
import TodoList from "@/pages/TodoList";
import { useParams } from "react-router";


const General = () => {
  const { submenu } = useParams(); 

  const renderSubMenuComponent = () => {
    switch (submenu) {
      case "time-table":
        return <TimeTable />;
      case "todo-list":
        return <TodoList />;
      case "attendance":
        return <Attendance />;
      case "announcements":
        return <Announcement />;
    }
  };

  return (
    <div>
      {renderSubMenuComponent()}
    </div>
  );
};

export default General;