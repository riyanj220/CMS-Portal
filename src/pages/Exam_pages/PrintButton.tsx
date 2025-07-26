import { RefObject, useState } from "react";
import { Box, Button, Snackbar } from "@mui/material";
import { useReactToPrint } from "react-to-print";

interface PrintButtonProps {
  printRef: RefObject<HTMLElement | null>;
  className?: string;
}


export const PrintButton: React.FC<PrintButtonProps> = ({ printRef, className  }) => {
  const [open, setOpen] = useState(false);

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: "Admit Card",
    onBeforePrint: async () => { setOpen(true); },
    onAfterPrint: () => setOpen(false),
  });

  return (
    <>
      <Box sx={{display:"flex" ,justifyContent:"center"}} >

        <Button
          variant="contained"
          color="primary"
          sx={{ mb: 2 }}
          onClick={handlePrint}
          className={className} 
        >
          Print Admit Card
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={() => setOpen(false)}
          message="Tip: Set Margins: None & disable Headers/Footers for best results."
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        />
      </Box>

    </>
  );
};
