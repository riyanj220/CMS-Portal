import { AssessmentResult } from "@/pages/Exam_pages/AssessmentResult";
import { PrintAdmitCard } from "@/pages/Exam_pages/PrintAdmitCard";
import { PrintTranscript } from "@/pages/Exam_pages/PrintTranscript";
import { SeatingPlan } from "@/pages/Exam_pages/SeatingPlan";
import { useParams } from "react-router";



export const Exam = () => {
  const { submenu } = useParams(); 

  const renderSubMenuComponent = () => {
    switch (submenu) {
      case "print-unofficial-transcript":
        return <PrintTranscript/>;
      case "exam-seating-plan":
        return <SeatingPlan/>;
      case "assessment-result":
        return <AssessmentResult />;
      case "print-admit-card":
        return <PrintAdmitCard/>;
    }
  };

  return (
    <div>
      {renderSubMenuComponent()}
    </div>
  );
};

export default Exam;
