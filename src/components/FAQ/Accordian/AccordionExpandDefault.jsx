import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionExpandDefault = ({ questions }) => {
  return (
    <div className="flex flex-col gap-2 ">
      {questions.map((item, index) => {
        return (
          <Accordion
            key={index}
            square="false"
            sx={{
              borderRadius: "12px",
              boxShadow: "none",
              border: "1px solid #F1F1F1",
              "&:before": {
                display: "none",
              },
            }}
            className="p-2 md:p-3"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
            >
              <Typography component="span">{item.summary}</Typography>
            </AccordionSummary>
            <AccordionDetails square="false" sx={{ border: "none" }}>
              <Typography>{item.detail}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default AccordionExpandDefault;
