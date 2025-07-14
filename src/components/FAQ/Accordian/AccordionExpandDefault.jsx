import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionExpandDefault = ({ questions }) => {
  return (
    <div className="flex flex-col gap-3 rounded-md">
      {questions.map((item, index) => {
        return (
          <Accordion className="shadow-none py-2" key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
            >
              <Typography component="span">{item.summary}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.detail}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default AccordionExpandDefault;
