import Announcement from "@/pages/Announcement";
import Attendance from "@/pages/Attendance";
import { OnlineSurvey } from "@/pages/Online_survey_pages/OnlineSurvey";
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
      case "online-survey":
        return <OnlineSurvey/>
    }
  };

  return (
    <div>
      {renderSubMenuComponent()}
    </div>
  );
};

export default General;