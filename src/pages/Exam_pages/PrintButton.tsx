import React from "react";
import { Button } from "@mui/material";
import { useReactToPrint } from "react-to-print";
import PrintIcon from "@mui/icons-material/Print";

interface PrintButtonProps {
  printRef: React.RefObject<HTMLElement | null>;
  className?: string;
  title?: string;
}

export const PrintButton: React.FC<PrintButtonProps> = ({
  printRef,
  className = "",
  title = "Print / Save as PDF",
}) => {
  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: "Admit_Card_2023F-BSE-075",
    pageStyle: `
      @page {
        size: A4 portrait;
        margin: 10mm;
      }
      @media print {
        body {
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
      }
    `,
  });

  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<PrintIcon />}
      onClick={() => handlePrint()}
      className={className}
      sx={{
        textTransform: "none",
        fontWeight: 600,
        borderRadius: 2,
        px: 2.5,
        py: 1,
        backgroundColor: "#4f46e5",
        "&:hover": {
          backgroundColor: "#4338ca",
        },
      }}
    >
      {title}
    </Button>
  );
};

export default PrintButton;
