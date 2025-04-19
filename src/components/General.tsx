import { useParams } from "react-router";


const General = () => {
    const { submenu } = useParams();  // Access submenu path parameter
  
    return (
      <div>
        <h1>{submenu ? `${submenu} Page` : "General Page"}</h1>
        {/* Render content based on submenu */}
      </div>
    );
  };
  
  export default General;