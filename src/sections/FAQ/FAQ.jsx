import React from "react";
import AccordionExpandDefault from "../../components/FAQ/Accordian/AccordionExpandDefault";

const FAQ = () => {
  const questions = [
    {
      summary: "How can I hire 100 workers fast with Scale Hire?",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      summary: "What is the process for bulk hiring with Scale Hire?",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      summary: "Who can use Scale Hire?",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      summary: "What types of roles can I fill using Scale Hire?",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      summary:
        "How does Scale Hire ensure quality in mass hiring and high-volume recruitment?",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      summary: "How fast can I expect results with Scale Hire?",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      summary:
        "What are the key benefits of using Scale Hire for high-volume staffing?",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      summary: "Can Scale Hire help with seasonal or project-based hiring?",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      summary: "How does Scale Hire help with hiring decisions?",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
  ];

  return (
    <div className="bg-[#FFFFFF] mt-5 flex flex-col items-center py-24">
      <h2 className="font-semibold text-5xl">FAQ</h2>
      <div className="mt-8">
        <AccordionExpandDefault questions={questions} />
      </div>
    </div>
  );
};

export default FAQ;
